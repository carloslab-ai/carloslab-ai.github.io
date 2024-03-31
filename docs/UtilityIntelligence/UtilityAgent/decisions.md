---
share: true
title: Decisions
---

In **Utility Intelligence**, each decision has:
- A list of [Target Filters](UtilityIntelligence/UtilityAgent/target-filters.md): They are used to filter targets for the decision.
- A list of [Considerations](UtilityIntelligence/UtilityAgent/considerations.md): They are used to calculate the score of the decision.
- A list of [Action Tasks](UtilityIntelligence/UtilityAgent/action-tasks.md): They will be executed by the egent if the decision is chosen.

[is scored per target](.mddecisions-are-scored-per-target)

# How Decisions work?

Since a decision [is scored per target](.mddecisions-are-scored-per-target), and any [Utility Entity](UtilityIntelligence/UtilityWorld/utility-entity.md) (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached) in the [Utility World](UtilityIntelligence/UtilityWorld/utility-world.md) could be a target of the decision, we need a way to filter targets to ensure that only appropriate targets are considered. This is the job of [Target Filters](UtilityIntelligence/UtilityAgent/target-filters.md).

After finding appropriate targets, all [Considerations](UtilityIntelligence/UtilityAgent/considerations.md) of the decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [ > Decision Weight](.mddecision-weight) to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all [Action Tasks](UtilityIntelligence/UtilityAgent/action-tasks.md) attached to the decision, either in **Sequence** or in **Parallel**.

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



After create a decision, you can attach [Target Filters](UtilityIntelligence/UtilityAgent/target-filters.md), [Considerations](UtilityIntelligence/UtilityAgent/considerations.md) and assign [Action Tasks](UtilityIntelligence/UtilityAgent/action-tasks.md) to the decision using **Decision Editor**.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>
