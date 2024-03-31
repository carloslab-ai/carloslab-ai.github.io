---
share: true
title: Utility Agent
category: Utility Intelligence
---

A Utility Agent is a special [Utility Entity](utility-entity.md) that helps your AI make the right decision based on the current situation, and controls it to perform the [Action Tasks](../UtilityAgent/action-tasks.md) attached to the chosen decision.


# Transforming GameObjects into Utility Agents

To transform a Game Object into a Utility Agent, you need to attach these two components to it:
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
	- It will automatically create a Utility Agent when the game starts and manage it to make the right decisions based on the attached [Utility Agent Asset](#Utility%20Agent%20Asset)
![center|400](Attachments/utility-agent.png)


# Utility Agent Asset

A **Utility Agent Asset** is a data container used to save **AI Behavior Data** of Utility Agents. 

It includes [Decision Makers](../UtilityAgent/decision-makers.md), [Decisions](../UtilityAgent/decisions.md), [Target Filters](../UtilityAgent/target-filters.md), [Action Tasks](../UtilityAgent/action-tasks.md), [Considerations](../UtilityAgent/considerations.md) and is stored in JSON format. So you can edit it manually using your Text Editor then import it into **Utility Agent Asset** by using [](../UtilityAgent/editor-window.md#File%20Menu|File%20Toolbar%20Menu).

But the recommended way to change **AI Behavior Data** is to use [Utility Agent Editor](../UtilityAgent/editor-window.md).