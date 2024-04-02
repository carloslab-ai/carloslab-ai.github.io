---
share: true
title: Utility World
category: Utility Intelligence
---

A **Utility World** contains a collection of [[UtilityIntelligence/UtilityWorld/utility-entity|Utility Entities]], and 
the main roles of a Utility World are:
1. Handling the decision-making process of all [[UtilityIntelligence/UtilityWorld/utility-agent|Utility Agents]] inside the world.
3. Running the task associated with the chosen decision for all [[UtilityIntelligence/UtilityWorld/utility-agent|Utility Agents]]  inside the world.

> [!NOTE]
> - Utility Worlds manage their Utility Entities and Utility Agents independently, not related to each other. 
> - So you can create multiple utility worlds for different purposes without having to worry about they will affect each other.

To create a Utility World, right-click in the **Hierarchy Window**, then select **CarlosLab/Utility World Controller**. Alternatively, you can create it manually by creating a new Game Object and adding a **Utility World Controller** component to it:

![[Attachments/UtilityIntelligence/Documentation/UtilityWorld/utility-world.png|center|400]]

The **Utility World Controller** will automatically create a **Utility World** when your game starts and manage it throughout its lifetime. And you can change **Make Decision Interval** inside a Utility World by adjusting it in the Utility World Controller's Inspector, the default value for it is `0.1`.