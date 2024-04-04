---
title: Optimization
category: Utility Intelligence
---

## Understanding how the score-calculation process works

Before starting optimization, you need to understand how the score-calculation process works first. In Utility Intelligence, the score-calculation process is executed sequentially from top to bottom, and the lower ones are discarded if they cannot possibly win the higher one.
For example:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/ones-below-discarded.png|center|550]]

In this case, firstly, **Decision 1** is scored, and its final score is `0.61`. This score will be passed into the score-calculation process of **Decision 2** as `minToBeat`. 

When calculating the score of **Decision 2**, since its first consideration is scored as `0.54` and the decision weight is `1`, the maximum score of **Decision 2** is `0.54`. As it is lower than `minToBeat`,  **Decision 2** realizes that it cannot win **Decision 1**. Consequently, all lower considerations are discarded and the final score of **Decision 2** is `0.00`.

For decision makers, they are similar to decisions, if the lower ones realize that they cannot possibly win the higher one, then they will be discarded, and their final score will be `0.00`.

## Optimization

Now that you understand how the score-calculation process works, and to optimize this process, you need to do the following:
- Put the ones with the highest chances of winning at the top. For example:
	- Decisions with highest weight
	- Considerations that are boolean (50% winning rate)
- Put expensive ones at the bottom
	- Considerations with raycasts

To reorder decision makers, decisions, and considerations, you need to enable the **Reorderable** option in the Editor. This option adds drag handles before every item, allowing you to change the order of each item by dragging it.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Optimization/reorderable.png]]




