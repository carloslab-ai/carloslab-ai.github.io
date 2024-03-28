---
share: true
title: Utility Entities
---

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

# Registering Utility Entities

- Utility Entities can only interact with each other if they are in the same Utility World. 
- To add your Utility Entities to a Utility World, you need to register them with the Utility World through the `Register` method. For example:
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

# Destroying Utility Entities

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