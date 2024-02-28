---
share: true
comments: false
hidden: true
category: Utility Intelligence
title: Utility Intelligence
---

![[../Attachments/UtilityIntelligence/Card_420-280.png|center]]


# Overview
**Utility Intelligence** is developed based on the **Infinite Axis Utility System** by *Dave Mark*. 


# Quick Start
1. Firstly, you need to create a [[#Utility Agent Asset|Utility Agent Asset]] by right-clicking in **Project Window** and choosing **Create/CarlosLab/Utility Agent Asset**.
1. Then double-click on the new Utility Agent Asset to open the **Editor Window**.
2. Add new Decision Makers, Decisions, Considerations *as many as you want*.
![[../Attachments/UtilityIntelligence/Documenntation/QuickStart/utility-intelligence-editor.png|../Attachments/UtilityIntelligence/Documenntation/QuickStart/utility-intelligence-editor.png]]

1. Add [[#Utility Agent Owner|Utility Agent Owner]] component to all of your Agents.
2. Drag & Drop the new Utility Agent Asset to the **Agent Asset** field of **Utility Agent Asset Owner**.
![[../Attachments/UtilityIntelligence/Documenntation/QuickStart/utility-agent-owner.png|center|400]]

1. Add [[#Utility Entity Owner|Utility Entity Owner]] to all the entities that your agents want to interact with.
![[../Attachments/UtilityIntelligence/Documenntation/QuickStart/utility-entity-owner.png|center|400]]

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


# Other Learning Resources

## Texts
1. [[An Introduction to Utility Theory](http://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf)](https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf), David “Rez” Graham
2. [[Choosing Effective Utility-Based Considerations](http://www.gameaipro.com/GameAIPro3/GameAIPro3_Chapter13_Choosing_Effective_Utility-Based_Considerations.pdf)](https://www.gameaipro.com/GameAIPro3/GameAIPro3_Chapter13_Choosing_Effective_Utility-Based_Considerations.pdf), Mike Lewis
3. [Curvature's Wiki](https://github.com/apoch/curvature/wiki), Mike Lewis


## Videos

1. [Architecture Tricks: Managing Behaviors in Time, Space, and Depth](https://www.gdcvault.com/play/1018040/Architecture-Tricks-Managing-Behaviors-in), Dave Mark (From 33:30)
2. [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI), Dave Mark and Mike Lewis



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
If you find anything that seems incorrect, please let me know so that I can fix it! 😆
	<br>
	<a href="https://discord.gg/vRFEK5uE3f"><img width = '50' height='50' src="/Attachments/discord.png"></img></a>
	<a href="mailto: carlos.truong.dev@gmail.com"><img width = '50' height='50' src="/Attachments/gmail.png"></img></a>
</p>
<p align="center">
If you like this plugin, please support me by leaving a 5-star review on <a href="https://assetstore.unity.com/packages/slug/276632">the Unity Asset Store</a>. Thank you! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Review this plugin"></img></a>
</p>