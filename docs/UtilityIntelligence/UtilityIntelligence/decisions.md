---
share: true
title: Decisions
category: Utility Intelligence
---

In **Utility Intelligence**, each decision has:
- A list of [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]]: They are used to filter targets for the decision.
- A list of [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]]: They are used to calculate the score of the decision.
- A list of [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]]: They will be executed by the egent if the decision is chosen.

## Understanding how decisions work?

Since a decision [[#Decisions are scored per target|is scored per target]], and any [[UtilityIntelligence/UtilityWorld/utility-entity|Utility Entity]] (all GameObjects with `UtilityEntityController` or `UtilityAgentController` attached) in the [[UtilityIntelligence/UtilityWorld/utility-world|Utility World]] could be a target of the decision, we need a way to filter targets to ensure that only appropriate targets are considered. This is the job of [[UtilityIntelligence/UtilityIntelligence/target-filters|Target Filters]].

After finding appropriate targets, all [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]] of the decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [[#Decision weight|Decision weight]] to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all [[UtilityIntelligence/UtilityIntelligence/action-tasks|Action Tasks]] attached to the decision, either in **Sequence** or in **Parallel**.

## Decisions are scored per target

A decision may or may not have targets. However:
1. If it has targets, it will be **scored per target**. Afterward, **Utility Intelligence** will compare the scores of all the decision-target pairs with each other and select the pair with the highest score.
2. If it does not have targets, it will be scored only once, and that score is the final score of the decision.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/decisions-per-target.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Decisions/decisions-per-target.png]]

## Oscillation between decision-target pairs

When using Utility AI, there may be a scenario where decision-target pairs with similar scores oscillate back and forth as their scores rise and fall. There are three ways to address this issue:
1. Enable the [[#Momentum Bonus]] option  to add a **bonus** to the last chosen decision-target pair in the next decision-making round.
	- This will prioritize the last decision-target pair over the others, thereby eliminating the oscillation.
2. Increase the [[#Decision Weight|weight]] of the decision that you want to prioritize. For example, let's say 2 or 3 instead of just 1.
	- This will prioritize one decision over the others, eliminating the oscillation.
3. Add more considerations to each decision. 
	- This will introduce more variation to the score-calculation process, increasing the chances that the competing decision will consistently win (or lose) and thereby reducing the oscillation.

## Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the Decision Weight. 

For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/decision-weight.png|center|550]]

You can change the weight of a decision in the **Decision Editor**:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/adjust-decision-weight.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Decisions/adjust-decision-weight.png]]


> [!TIP]
> Decision Weight is a good tool to reduce [[#Oscillation between decision-target pairs|the oscillation between nearly equal decision-target pairs]].

## Momentum Bonus

When you enable the **Momentum Bonus** option, **Utility Intelligence** will add a **bonus** to the score of the last decision-target pair in the **next** decision-making round. This prioritizes the last chosen decision-target pair, increasing its chances of winning and thereby reducing [[#Oscillation between decision-target pairs|the oscillation between nearly equal decision-target pairs]].

> [!INFO]
> Currently, the **Momentum Bonus** in Utility Intelligence is **25%**.

To enable/disable Momentum Bonus, you need to check/uncheck the Momentum Bonus option in the **Intelligence Editor**.
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/momentum-bonus.png|center|300]]

## Creating Decisions

To create a new decision, you need to go to the [[UtilityIntelligence/UtilityIntelligence/editor-window#Intelligence Tab|Intelligence Tab]], fill in the **Name** field, and then click the **Create** button:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/create-decision.png|center]]

After creating a decision, you can add [[UtilityIntelligence/UtilityIntelligence/considerations|considerations]] to the decision and observe how they affect the decision score. Additionally, you can add [[UtilityIntelligence/UtilityIntelligence/target-filters|target filters]] and [[UtilityIntelligence/UtilityIntelligence/action-tasks|action tasks]] to the decision to determine which actions will be executed with the target if this decision is selected at runtime.

## Decision Statuses
At runtime, decisions have 5 statuses:
<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Running</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(0, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Success</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 0, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Failed</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 165, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Aborted</p>
	<br>
	<div class="cl-rect-border" style="width: 200px; height: 20px; vertical-align: middle; background-color: rgba(0, 0, 0,0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Inactive</p>
</div>

At editor time, decision only have 2 statuses:
<div>
	<div style="width: 200px; height: 20px; vertical-align: middle; background-color: rgb(0, 255, 255); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Selected</p>
	<br>
	<div class="cl-rect-border" style="width: 200px; height: 20px; vertical-align: middle; background-color: rgba(0, 0, 0,0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Unselected</p>
</div>
