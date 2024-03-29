---
share: true
title: Decisions
---

In **Utility Intelligence**, each decision has:
- A list of **Target Filters**: They are used to filter the Targets for this Decision.
- A list of **Considerations**: They are used to calculate the score of this Decision.
- A list of **Actions**: These Actions will be executed by the Agent if this Decision is chosen.

# How do Decisions work?

Because decisions [[#Decision are scored per Target|are scored per Target]]. And any entity in the **Utility World** (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached)  could be a Target. Therefore, we need a way to filter Targets, ensuring that the **Decision Score Evaluator** only evaluates appropriate Targets. And that is the job of `TargetFilter`.

After finding appropriate targets, all considerations of that decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [[#Decision Weight|Decision Weight]] to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all actions attached to the decision, either in **Sequence** or in **Parallel**.

## Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the Decision Weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decision-weight.png|center|550]]

You can change the weight of a decision in the **Decision Editor**:

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png]]

## Decisions are scored per Target

Every decision has at least 1 target and they will be **scored per target**.  **Utility Intelligence** will compare all of the decision-target pairs with each other then choose the pair with the highest score.

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png]]

# Creating Decisions

To create a new decision, you need to go to the **Agent Tab**, fill in the **Name** field, and then click the **Create** button:

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/create-decision.png|center]]

After create a decision, you can attach target filters, considerations and assign action tasks for the decision using **Decision Editor**.
