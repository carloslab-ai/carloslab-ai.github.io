---
title: Optimization
category: Utility Intelligence
---

## The score-calculation process

### Understanding how the process works

Before starting optimization, you need to understand how the **score-calculation process** works first. In Utility Intelligence, the score-calculation process is executed sequentially from top to bottom, and the lower ones are discarded if they cannot possibly beat the higher one.
For example:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/ones-below-discarded.png|center|500]]

In this case, firstly, **Decision 1** is scored, and its final score is `0.61`. This score will be passed into the score-calculation process of **Decision 2** as `minToBeat`. 

When calculating the score of **Decision 2**, since its first consideration is scored as `0.54` and the decision weight is `1`, the maximum score of **Decision 2** is `0.54`. As it is lower than `minToBeat`,  **Decision 2** realizes that it cannot beat **Decision 1**. Consequently, all lower considerations are discarded and the final score of **Decision 2** is `0.00`.

For decision makers, they are similar to decisions, if the lower ones realize that they cannot possibly beat the higher one, then they will be discarded, and their final score will be `0.00`.

### Optimizing the process

Now that you understand how the score-calculation process works, and to optimize this process, follow these guidelines:

- **Considerations**
	- Put considerations that have a high probability of returning a low score at the top. This ensures that lower considerations will be discarded because the decision is difficult to beat the higher one if its first consideration returns a low score. For example:
		- Considerations that are boolean (return `0.0` or `1.0`)
	- Put considerations that are expensive at the bottom. For example:
		- Considerations using raycasts
- **Decisions**
	- Put decisions that have a high probability of returning a high score at the top. For example:
		- Decisions with high weights
- **Decision Makers**
	- Put decision makers that have a high probability of returning a high score at the top.


To reorder decision makers, decisions, and considerations, you need to enable the **Reorderable** option in the Editor. This option adds drag handles before every item, allowing you to change the order of each item by dragging it.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/reorderable.png]]

## Enable Burst Compilation
Some places in **Utility Intelligence** use Unity.Burst, so to achieve higher performance, you should **Enable Burst Compilation**:
1. Install these two packages:
	- com.unity.burst
	- com.unity.mathematics
1. Enable Burst Compilation:
	- In the Editor, select **Jobs -> Burst -> Enable Compilation**
	![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/enable-burst-compilation-editor.png|400]]
	- In player builds, select **Edit -> Player Settings -> Burst AOT Settings -> Enable Burst Compilation**
	![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/enable-burst-compilation-build.png]]







