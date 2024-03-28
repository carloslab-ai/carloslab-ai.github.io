---
share: true
title: Utility World
---

# Utility World

A Utility World is a collection of Utility Entities. and the ID of each Utility Entity is only unique within its own world. 

To create a Utility World, right-click in the **Hierarchy Window**, then select **CarlosLab/Utility World Owner**. Alternatively, you can create it manually by creating a new Game Object and adding a **Utility World Owner** component to it:

![[../Attachments/UtilityIntelligence/Documenntation/UtilityWorld/utility-world.png|center|400]]

The Utility World Owner will automatically create a Utility World when your game starts and manage it throughout its lifetime. And you can change **Make Decision Interval** inside a Utility World by adjusting it in the Utility World Owner's Inspector, the default value for it is `0.1`.