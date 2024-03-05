---
share: true
title: Getting Started
---

![[../Attachments/UtilityIntelligence/Card_420-280.png|center]]
<p align="center">
	<font size=5><b>Welcome to Utility Intelligence</b></font><br>
	<b>Thank you for choosing Utility Intelligence</b>
</p>

---

# Quick Start

1. Firstly, you need to create a **Utility Agent Asset** by right-clicking in the **Project Window** and select **Create/CarlosLab/Utility Agent Asset**.
1. Then double-click on the new **Utility Agent Asset** to open the **Editor Window**.
2. Add new [[UtilityAgent/decision-makers|Decision Makers]], [[UtilityAgent/decisions|Decisions]], [[UtilityAgent/considerations|Considerations]] *as many as you want*
![[../Attachments/UtilityIntelligence/Documenntation/EditorWindow/agent-tab.png|../Attachments/UtilityIntelligence/Documenntation/EditorWindow/agent-tab.png]]
1. Convert your AI GameObjects into [[utility-world#Utility Agent|Utility Agents]] and assign the new **Utility Agent Asset** to the **Agent Asset** field of the **Utility Agent Owner**
![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-agent.png|center|400]]
1. Convert all the Game Objects that your Agents need to interact with into [[utility-world#Utility Entity|Utility Entities]]
![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-entity.png|center|400]]
1. Create a [[utility-world|Utility World]] and [[utility-world#Registering Utility Entities with a Utility World|register all the Utility Agents and Utility Entities]] in your game with it.
![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-world.png|center|400]]
1. Play your game.

# Running Demos in URP and HDRP

The Demos are created using Built-In Render Pipeline, so if you are using URP or HDRP, please convert all materials to the target pipeline first:

## URP
1. Open **Render Pipeline Converter** (Window -> Rendering -> Render Pipeline Converter)
2. Tick **Material Upgrade**
3. Click **Initialize and Converter** button

## HDRP
1. Open **HDRP Wizard** (Window -> Rendering -> HDRP Wizard)
2. Click **Convert All Built-In Materials to HDRP**

# Upgrade Guide

To upgrade **Utility Intelligence** you just need to do the following:
1. Backup your project
2. Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/AI
	- CarlosLab/UtilityIntelligence
3. Re-import **Utility Intelligence** package

# Other Learning Resources

## Texts
1. [An Introduction to Utility Theory](https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf), David “Rez” Graham
2. [Choosing Effective Utility-Based Considerations](https://www.gameaipro.com/GameAIPro3/GameAIPro3_Chapter13_Choosing_Effective_Utility-Based_Considerations.pdf), Mike Lewis
3. [Curvature's Wiki](https://github.com/apoch/curvature/wiki), Mike Lewis


## Videos
1. [Architecture Tricks: Managing Behaviors in Time, Space, and Depth](https://www.gdcvault.com/play/1018040/Architecture-Tricks-Managing-Behaviors-in), Dave Mark (From 33:30)
2. [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI), Dave Mark and Mike Lewis

---
<p align="center">
	If you find this plugin <b>helpful</b>, please consider supporting it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>