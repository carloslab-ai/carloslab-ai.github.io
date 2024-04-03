---
share: true
title: Decisions
category: Utility Intelligence
---

In **Utility Intelligence**, each decision has:
- A list of [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]]: They are used to filter targets for the decision.
- A list of [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]]: They are used to calculate the score of the decision.
- A list of [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]]: They will be executed by the egent if the decision is chosen.

## How Decisions work?

Since a decision [[#Decisions are scored per target|is scored per target]], and any [[UtilityIntelligence/UtilityWorld/utility-entity|Utility Entity]] (all GameObjects with `UtilityEntityController` or `UtilityAgentController` attached) in the [[UtilityIntelligence/UtilityWorld/utility-world|Utility World]] could be a target of the decision, we need a way to filter targets to ensure that only appropriate targets are considered. This is the job of [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]].

After finding appropriate targets, all [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]] of the decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [[#Decision Weight|Decision Weight]] to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]] attached to the decision, either in **Sequence** or in **Parallel**.

### Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the Decision Weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/decision-weight.png|center|550]]

You can change the weight of a decision in the **Decision Editor**:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/adjust-decision-weight.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Decisions/adjust-decision-weight.png]]

### Decisions are scored per target

A decision may or may not have targets. However:
1. If it has targets, it will be **scored per target**. Afterward, **Utility Intelligence** will compare the scores of all the decision-target pairs with each other and select the pair with the highest score.
2. If it does not have targets, it will be scored only once, and that score is the final score of the decision.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/decisions-per-target.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Decisions/decisions-per-target.png]]


## Creating Decisions

To create a new decision, you need to go to the [[UtilityIntelligence/UtilityIntelligence/editor-window#Intelligence Tab|Intelligence Tab]], fill in the **Name** field, and then click the **Create** button:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/create-decision.png|center]]

After creating a decision, you can add [[UtilityIntelligence/UtilityIntelligence/considerations|considerations]] to the decision and observe how they affect the decision score. Additionally, you can add [[UtilityIntelligence/UtilityIntelligence/target-filters|target filters]] and [[UtilityIntelligence/UtilityIntelligence/action-tasks|action tasks]] to the decision to determine which actions will be executed with the target if this decision is selected at runtime.

## Decision's Statuses
It's the same as [[UtilityIntelligence/UtilityIntelligence/decision-makers#Decision Maker's Statuses|Decision Makers]]
