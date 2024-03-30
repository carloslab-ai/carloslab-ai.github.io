---
share: true
title: Utility Entity
---

A Utility Entity represents an object inside a [[utility-world|Utility World]], and only Utility Entities in the same world can interact with each other. Therefore, if you want a GameObject to be the target of a [[utility-agent|Utility Agent]], you need to do the following:
1. Transform the GameObject into a Utility Entity 
2. Register the Utility Entity with the same Utility World as the Utility Agent.

# Transforming GameObjects into Utility Entities

To transform a GameObject into a Utility Entity, you need to attach these two components to it:

1. **Utility Entity Facade**
	- It is used to interact with the Game Object.
	- To create your own Utility Entity Facade, you need to create a class inherited from `UtilityEntityFacade`. For example:
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
1. **Utility Entity Owner**
	- It will automatically create a Utility Entity when the game starts to manage the Game Object within the Utility World.
	![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-entity.png|center|400]]

# Registering Utility Entities

> [!NOTE]
> - A Utility Entity can only be associated with a single Utility World. 
> - Therefore, it's not possible to register a Utility Entity with multiple Utility Worlds.

- To register a Utility Entity with a Utility World, you need to call the `Register` method of the **UtilityEntityOwner** and pass the Utility World as the parameter. For example:
	```cs
	public class AgentsPlacedInSceneDemo : MonoBehaviour
	{
	    [SerializeField]
	    private UtilityWorldOwner world;
	
	    [SerializeField]
	    private List<UtilityAgentOwner> agents;
	
	    [SerializeField]
	    private List<UtilityEntityOwner> chargeStations;
	
	    private void Start()
	    {
	        foreach (UtilityAgentOwner agent in agents)
	        {
	            agent.Register(world);
	        }
	
	        foreach (UtilityEntityOwner chargeStation in chargeStations)
	        {
	            chargeStation.Register(world);
	        }
	    }
	}
	```

# Getting Utility Entities

- After being registered with a Utility World, the Utility Entity is allocated an **Entity Id**. This Id is unique within the world, and you can get the entity from the world by calling `UtilityWorldOwner.GetEntity()` and passing the **Entity Id** as the parameter of the method. For example:
	```cs
	int entityId = entity.Id;  
	var entity = world.GetEntity(id);
	```
- It's useful in case you want to access the entity from multiple places but don't want to pass the entity object everywhere.

# Destroying Utility Entities

Since utility entities are managed by a utility world, if you destroy a utility entity using `GameObject.Destroy()` and it is the target of some utility agents, you will receive an exception notifying you that you are trying to access an object that has been destroyed. 

This occurs because the target entity has been destroyed before the decision-making process is run. Consequently when the decision-making process is executed, utility agents attemp to access the destroyed target entity, resulting in the exception.

For safety, you should destroy utility entities by calling `UtilityEntityFacade.Destroy()` instead of `GameObject.Destroy()`. This method ensures that the utility entities are safely destroyed and does not affect any utility agents. For example:
```cs
public class CharacterHealth : MonoBehaviour
{
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


---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>