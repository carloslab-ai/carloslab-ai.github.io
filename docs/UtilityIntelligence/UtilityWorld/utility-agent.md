---
share: true
title: Utility Agent
category: Utility Intelligence
---

A Utility Agent is a special [[UtilityIntelligence/UtilityWorld/utility-entity|Utility Entity]] that helps your AI make the right decision based on the current situation, and controls it to perform the [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]] attached to the chosen decision.


## Transforming GameObjects into Utility Agents

To transform a Game Object into a Utility Agent, you need to attach these two components to it:
1. **Utility Agent Facade**
	- It is similar to **Utility Entity Facade** but instead of interact with the GameObject of the **Utility Entity**, it is used to interact with the Game Object of the **Utility Agent**.
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
1. **Utility Agent Controller**
	- It is similar to **Utility Entity Controller**, but instead of create and manage the lifecycle of the **Utility Entity**, it creates and manage the lifecycle of the **Utility Agent**.
	- It injects **Intelligence Data** from the [[#Utility Intelligence Asset]] into Utility Agent, granting the agent intelligence.
![[Attachments/UtilityIntelligence/Documentation/UtilityWorld/utility-agent.png|center|400]]


## Utility Intelligence Asset

A **Utility Intelligence Asset** is a data container used to save **Intelligence Data** of Utility Agents. 

It includes [[UtilityIntelligence/UtilityIntelligence/decision-makers|Decision Makers]], [[UtilityIntelligence/UtilityIntelligence/decisions|Decisions]], [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]], [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]], [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]] and is stored in JSON format. So you can edit it manually using your Text Editor then import it into **Utility Intelligence Asset** by using [[UtilityIntelligence/UtilityIntelligence/editor-window#File Menu|File Toolbar Menu]].

But the recommended way to change **Intelligence Data** is to use [[UtilityIntelligence/UtilityIntelligence/editor-window|Utility Intelligence Editor]].