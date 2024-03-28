---
share: true
title: Utility World
---

# Utility World

A Utility World is a collection of Utility Entities. and the ID of each Utility Entity is only unique within its own world. 

To create a Utility World, right-click in the **Hierarchy Window**, then select **CarlosLab/Utility World Owner**. Alternatively, you can create it manually by creating a new Game Object and adding a **Utility World Owner** component to it:

![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-world.png|center|400]]

The Utility World Owner will automatically create a Utility World when your game starts and manage it throughout its lifetime. And you can change **Make Decision Interval** inside a Utility World by adjusting it in the Utility World Owner's Inspector, the default value for it is `0.1`.

# Utility Entity

A Utility Entity represents an object inside a Utility World. And only Utility Entities can interact with each other within a Utility World. So you need to transform your Game Objects into Utility Entities to make them interactable by adding 2 components to it:
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

## Registering Utility Entities

Utility Entities can only interact with each other if they are in the same Utility World. 

To add your Utility Entities to a Utility World, you need to register them with the Utility World through the `Register` method. For example:
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

## Destroying Utility Entities

Since utility entities are managed by a utility world, so if you destroy a utility entity using `GameObject.Destroy()` and it is the target of some utility agents, then you will receive an exception notifying that you are trying to access an object that has been destroyed because those utility agents are attempting to access the target entity.

For safety, you should destroy utility entities by calling `UtilityEntityFacade.Destroy()` instead of `GameObject.Destroy()`. This method ensures that the utility entities are safely destroyed. For example:

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


# Utility Agent

A Utility Agent is a special Utility Entity that helps your AI make the right Decision in the current situation and controls it to perform the Actions attached to the chosen Decision.

To transform a Game Object into a Utility Agent, you need to add 2 components to it:
1. **Utility Agent Facade**
	- It is used to interact with the Game Object.
	- To create your own Utility Agent Facade, you need to create a class inherited from `UtilityAgentFacade`. For example:
		```cs
		public class Character : UtilityAgentFacade
		{
		    [SerializeField]
		    private Team team;
		    
		    private CharacterEnergy energy;
		    private CharacterHealth health;
		    private NavMeshAgent navMeshAgent;
		    private Rigidbody rigidBody;
		
		    public Team Team => team;
		    public NavMeshAgent NavMeshAgent => navMeshAgent;
		    public Rigidbody RigidBody => rigidBody;
		    public CharacterHealth Health => health;
		    public CharacterEnergy Energy => energy;
		
		    private void Awake()
		    {
		        navMeshAgent = GetComponent<NavMeshAgent>();
		        rigidBody = GetComponent<Rigidbody>();
		
		        health = GetComponent<CharacterHealth>();
		        energy = GetComponent<CharacterEnergy>();
		    }
		}
		```
1. **Utility Agent Owner**
	- It will automatically create a Utility Agent when the game starts and manage it to make the right decisions based on the attached **Agent Asset**.
![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-agent.png|center|400]]

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave it a 5-star review"></img></a>
</p>