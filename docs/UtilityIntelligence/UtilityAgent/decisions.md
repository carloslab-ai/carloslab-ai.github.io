---
share: true
title: Decisions
---

In **Utility Intelligence**, each decision has:
- A list of [[UtilityIntelligence/UtilityAgent/target-filters|Target Filters]]: They are used to filter targets for the decision.
- A list of [[UtilityIntelligence/UtilityAgent/considerations|Considerations]]: They are used to calculate the score of the decision.
- A list of [[UtilityIntelligence/UtilityAgent/action-tasks|Action Tasks]]: They will be executed by the egent if the decision is chosen.

[Decisions are scored per target](#Decisions%20are%20scored%20per%20target)  
[[#Decisions are scored per target|Decisions are scored per target]]

# How Decisions work?

Since a decision [[#Decisions are scored per target|is scored per target]], and any [[UtilityIntelligence/UtilityWorld/utility-entity|Utility Entity]] (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached) in the [[UtilityIntelligence/UtilityWorld/utility-world|Utility World]] could be a target of the decision, we need a way to filter targets to ensure that only appropriate targets are considered. This is the job of [[UtilityIntelligence/UtilityAgent/target-filters|Target Filters]].

After finding appropriate targets, all [[UtilityIntelligence/UtilityAgent/considerations|Considerations]] of the decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [[#Decision Weight|Decision Weight]] to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all [[UtilityIntelligence/UtilityAgent/action-tasks|Action Tasks]] attached to the decision, either in **Sequence** or in **Parallel**.

## Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the Decision Weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0



You can change the weight of a decision in the **Decision Editor**:



## Decisions are scored per target

A decision may or may not have targets. However:
1. If it has targets, it will be **scored per target**. Afterward, **Utility Intelligence** will compare the scores of all the decision-target pairs with each other and select the pair with the highest score.
2. If it does not have targets, it will be scored only once, and that score is the final score of the decision.




# Creating Decisions

To create a new decision, you need to go to the **Agent Tab**, fill in the **Name** field, and then click the **Create** button:



After create a decision, you can attach [[UtilityIntelligence/UtilityAgent/target-filters|Target Filters]], [[UtilityIntelligence/UtilityAgent/considerations|Considerations]] and assign [[UtilityIntelligence/UtilityAgent/action-tasks|Action Tasks]] to the decision using **Decision Editor**.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>
