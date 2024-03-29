---
share: true
title: Utility World
---

A Utility World contains a collection of [[utility-entity|Utility Entities]], and 
the main jobs of a Utility World are:
1. Handling the decision-making process of all [[../UtilityAgent/index|Utility Agents]] inside the world.
3. Running the task associated with the chosen decision for all [[../UtilityAgent/index|Utility Agents]]  inside the world.

[[../what-is-utility-ai|what-is-utility-ai]]


> [!NOTE]
> - Utility Worlds manage their Utility Entities and Utility Agents independently, not related to each other. 
> - So you can create multiple utility worlds for different purposes without having to worry about they will affect each other.

To create a Utility World, right-click in the **Hierarchy Window**, then select **CarlosLab/Utility World Owner**. Alternatively, you can create it manually by creating a new Game Object and adding a **Utility World Owner** component to it:

![[../../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-world.png|center|400]]

The Utility World Owner will automatically create a Utility World when your game starts and manage it throughout its lifetime. And you can change **Make Decision Interval** inside a Utility World by adjusting it in the Utility World Owner's Inspector, the default value for it is `0.1`.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>