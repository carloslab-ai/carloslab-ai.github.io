---
share: true
title: Utility Entity
category: Utility Intelligence
---

A Utility Entity represents an object inside a [[UtilityIntelligence/UtilityWorld/utility-world|Utility World]], and only Utility Entities in the same world can interact with each other. Therefore, if you want a GameObject to be the target of a [[UtilityIntelligence/UtilityWorld/utility-agent|Utility Agent]], you need to do the following:
1. Transform the GameObject into a Utility Entity 
2. Register the Utility Entity with the same Utility World as the Utility Agent.

## Transforming GameObjects into Utility Entities

To transform a GameObject into a Utility Entity, you need to attach these two components to it:

1. **Utility Entity Facade**
	- It is used to interact with the **Utility Entity**'s Game Object. For example, [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]] can access the **Entity Facade** of both itself and the target to retrieve information from the components of Game Objects in order to check the validity of the target.
		```cs
		public class OtherTeamFilter : TargetFilter
		{
		    protected override bool OnFilterTarget(UtilityEntity target)
		    {
		        if (target.EntityFacade is Character targetCharacter)
		        {
		            Character myCharacter = AgentFacade as Character;
		            return myCharacter.Team != targetCharacter.Team;
		        }
		
		        return false;
		    }
		}
		```
	- To create your own **Entity Facade**, you need to create a class inherited from `UtilityEntityFacade`. For example:
		```cs
		public class ChargeStation : UtilityEntityFacade
		{
		    [SerializeField]
		    private ChargeStationType type;
		
		    [SerializeField]
		    private float chargeRadius;
		
		    [SerializeField]
		    private float chargePerSec;
		
		    public ChargeStationType Type => type;
		    public float ChargeRadius => chargeRadius;
		    public float ChargePerSec => chargePerSec;
		}
		```
1. **Utility Entity Controller**
	- The main role of a Utility Entity Controller is to create and manage the Utility Entity's lifecycle, including initialization, destruction, registration, and unregistration with utility worlds.
	![[Attachments/UtilityIntelligence/Documentation/UtilityWorld/utility-entity.png|center|400]]

## Registering Utility Entities

> [!NOTE]
> - A Utility Entity can only be associated with a single Utility World. 
> - Therefore, it's not possible to register a Utility Entity with multiple Utility Worlds.

To register a Utility Entity with a Utility World, you need to call the `Register` method of the **UtilityEntityController** and pass the Utility World as the parameter. For example:
```cs
public class AgentsPlacedInSceneDemo : MonoBehaviour
{
    [SerializeField]
    private UtilityWorldController world;

    [SerializeField]
    private List<UtilityAgentController> agents;

    [SerializeField]
    private List<UtilityEntityController> chargeStations;

    private void Start()
    {
        foreach (UtilityAgentController agent in agents)
        {
            agent.Register(world);
        }

        foreach (UtilityEntityController chargeStation in chargeStations)
        {
            chargeStation.Register(world);
        }
    }
}
```

## Getting Utility Entities

After being registered with a Utility World, the Utility Entity is allocated an **Entity Id**. This Id is unique within the world, and you can get the entity from the world by calling `UtilityWorldController.GetEntity()` and passing the **Entity Id** as the parameter of the method. For example:
```cs
int entityId = entity.Id;  
var entity = world.GetEntity(entityId);
```

It's useful in case you want to access the entity from multiple places but don't want to pass the entity object everywhere.

## Destroying Utility Entities

Since utility entities are managed by a utility world, if you destroy a utility entity using `GameObject.Destroy()` and it is the target of some utility agents, you will receive an exception notifying you that you are trying to access an object that has been destroyed. 

This occurs because the target entity has been destroyed before the decision-making process is run. Consequently, when the decision-making process is executed, utility agents attemp to access the destroyed target entity, resulting in the exception.

For safety, you should destroy utility entities by calling `UtilityEntityFacade.Destroy()` instead of `GameObject.Destroy()`. This method ensures that the utility entities are safely destroyed and does not affect any utility agents. For example:
```cs
public class CharacterHealth : MonoBehaviour
{
	//Character inherited from UtilityEntityFacade
    private Character character;

    private int health = 100;

    private bool isDied;

    private void Awake()
    {
        character = GetComponent<Character>();
    }
    
    public int Health
    {
        get => health;
        set
        {
            int newHealth = value;

            if (newHealth < 0)
                newHealth = 0;

            if (this.health == newHealth)
                return;

            this.health = newHealth;

            if (this.health == 0)
                Die();
        }
    }

    private void Die()
    {
        if (isDied)
            return;

        isDied = true;
        character.Destroy();
    }
}
```