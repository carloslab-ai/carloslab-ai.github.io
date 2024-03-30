---
share: true
title: Utility Agent
---

A Utility Agent is a special [Utility Entity](../UtilityWorld/utility-entity.md) that helps your AI make the right decision based on the current situation and controls it to perform the [Action Tasks](action-tasks.md) attached to the chosen decision.

[Action Tasks](action-tasks.md)
[target-filters](target-filters.md)
[Utility Entity](../UtilityWorld/utility-entity.md)
[index](../UtilityWorld/index.md)
[what-is-utility-ai](../what-is-utility-ai.md)

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
	- It will automatically create a Utility Agent when the game starts and manage it to make the right decisions based on the attached [ > Utility Agent Asset](.md#Utility%20Agent%20Asset)
![center|400](../../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-agent.png)


# Utility Agent Asset

A **Utility Agent Asset** is a data container used to save **AI Behavior Data** of Utility Agents. 

It includes [Decision Makers](decision-makers.md), [Decisions](decisions.md), [Target Filters](target-filters.md), [Action Tasks](action-tasks.md), [Considerations](considerations.md) and is stored in JSON format. So you can edit it manually using your Text Editor then import it into **Utility Agent Asset** by using [File Toolbar Menu](utility-agent-editor.md#File%20Menu).

But the recommended way to change **AI Behavior Data** is to use [Utility Agent Editor](utility-agent-editor.md).

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>