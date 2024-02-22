---
share: true
comments: false
hidden: true
category: Utility Intelligence
title: Utility Intelligence
---

![[../Attachments/UtilityIntelligence/Card_420-280.png|center]]

# Documentation

<!--
## What is Utility AI

Decision-making is the core of every AI system. Various methods exist for decision-making, such as behavior trees and finite state machines, etc. Among these, Utility AI is one of the most robust and powerful systems for decision-making in game programming. The core concept of Utility AI is that every possible action of an Agent is assigned a **score** (also called **utility**). And the action with the **highest utility** will be chosen.

**Here's how it works step by step:**
1. Evaluating Actions:
- The game world state is analyzed, considering factors like the NPC's health, enemy positions, available resources, and goals.
- Each possible action the NPC can take (attack, heal, move, etc.) is assessed based on its impact on the game state.
2. Assigning Utilities:
- Based on the analysis, each action is assigned a numerical score representing its **utility**.
- This score reflects how "good" the action is for achieving the NPC's goals in the current context.
- Factors like potential damage dealt, health recovered, or distance moved closer to the objective can contribute to the score.
3. Making Decisions:
- The action with the **highest utility score** is chosen for the NPC to perform.
- This ensures the NPC prioritizes actions that are most beneficial for its current situation and goals.


## Infinite Axis Utility System

## Why you should use Utility AI instead of Behavior Tree and Finite State Machine

-->


## Quick Start
1. Firstly, you need to create a [[#Utility Agent Asset|Utility Agent Asset]] by right-clicking in **Project Window** and choosing **Create/CarlosLab/Utility Agent Asset**.
1. Then double-click on the new Utility Agent Asset to open the **Editor Window**.
2. Add new Decision Makers, Decisions, Considerations *as many as you want*.
![[../Attachments/UtilityIntelligence/Documenntation/utility-intelligence-editor.png|../Attachments/UtilityIntelligence/Documenntation/utility-intelligence-editor.png]]

1. Add [[#Utility Agent Owner|Utility Agent Owner]] component to all of your Agents.
2. Drag & Drop the new Utility Agent Asset to the **Agent Asset** field of **Utility Agent Asset Owner**.
![[../Attachments/UtilityIntelligence/Documenntation/utility-agent-owner.png|center|400]]

1. Add [[#Utility Entity Owner|Utility Entity Owner]] to all the entities that your agents want to interact with.
![[../Attachments/UtilityIntelligence/Documenntation/utility-entity-owner.png|center|400]]

1. Create a [[#Utility World Owner|Utility World Owner]] GameObject by right-clicking in **Hierarchy Window** then choose **CarlosLab/Utility World Owner**
1. Register all of the entities and agents in your games with the **Utility World**
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

<!--

## Framework Components

### Hierarchy Window

#### Utility World Owner
**Utility World Owner** is used to manage the Utility World

#### Utility Entity Owner
#### Utility Agent Owner

### Utility Agent Asset
#### Decision Makers
#### Decisions
#### Considerations

-->

# Video Resources

1. [Architecture Tricks: Managing Behaviors in Time, Space, and Depth](https://www.gdcvault.com/play/1018040/Architecture-Tricks-Managing-Behaviors-in) (From 33:30)
2. [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI)


# FAQs

## How to run the demos in URP and HDRP
The demos are created using Built-In Render Pipeline, so if you are using URP or HDRP, please convert all materials to the target pipeline first.
### URP
1. Open **Render Pipeline Converter** (Window -> Rendering -> Render Pipeline Converter)
2. Tick **Material Upgrade**
3. Click **Initialize and Converter** button.

### HDRP
1. Open **HDRP Wizard** (Window -> Rendering -> HDRP Wizard)
2. Click **Convert All Built-In Materials to HDRP**

## How to update Utility Intelligence
To update **Utility Intelligence** you just need to do the following:
- Backup your project.
- Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/AI
	- CarlosLab/UtilityIntelligence
- Re-import **Utility Intelligence** package

---
<p align="center">
If you like this plugin, please support me by leaving a 5-star review on <a href="https://assetstore.unity.com/packages/slug/276632">the Unity Asset Store</a>. Thank you!😁
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Unity Asset Store"></img></a>
</p>