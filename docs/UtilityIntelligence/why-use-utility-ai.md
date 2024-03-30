---
share: true
title: Why use Utility AI?
---

With traditional AI systems like **Behavior Trees** and **Finite State Machines**, an agent makes decisions by answering **one Yes-No Question at a time** and in **a fixed order**:
- Should I move towards the enemy? 
- Should I attack the enemy? 
- Should I flee from the enemy?
```cs
if(ShouldMoveTowardsEnemy())
	MoveToEnemy();
else if(ShouldAttackEnemy())
	AttackEnemy();
else if(ShouldFleeFromEnemy())
	FleeFromEnemy();
else
	Idle();

bool ShouldMoveTowardsEnemy()
{
	return DistanceToEnemy > 10 && MyHealth > 50;
}

bool ShouldAttackEnemy()
{
	return DistanceToEnemy < 10;
}

bool ShouldFleeFromEnemy()
{
	return DistanceToEnemy < 20 && MyHealth < 20;
}
```

For each decision, we must define the conditions that determine whether the agent will make this decision or not. And if we want to prioritize one decision over another, we have to change the order of these decisions. In the example above, if `DistanceToEnemy = 5` and `MyHealth = 10`, the player will decide to **attack the enemy** rather than **flee from the enemy**. But if we change the position of these two decisions, the player will choose to **flee from the enemy**:

```cs
if(ShouldFleeFromEnemy())
	FleeFromEnemy()
else if(ShouldAttackEnemy())
	AttackEnemy()

bool ShouldAttackEnemy()
{
	return DistanceToEnemy < 10;
}

bool ShouldFleeFromEnemy()
{
	return DistanceToEnemy < 20 && MyHealth < 20;
}
```

For simple AIs, everything is okay, there aren't any problems. However, as your AIs become more complex, they will have more decisions and their conditions will be related to a lot of factors like health, energy, distance to enemy, distance to cover, distance to a health station, etc. Therefore, if your game design changes, it will be very time-consuming to apply these changes to your game because you have to adjust the conditions and the order of all affected decisions. Additionally, testers will have to recheck every behavior of these AIs from the beginning to ensure that they behave as intended.

This is the behavior tree of an agent in one of my previous games:

![[Attachments/UtilityIntelligence/Documentation/behavior-tree-virus.png|Attachments/UtilityIntelligence/Documentation/behavior-tree-virus.png]]

As you can see, it's quite complex, isn't it? I still remember that once it becomes complex like this, it's very time-consuming to apply changes whenever designers alter the game design. I have to redesign my behavior tree again and again, and it takes a lot of my time. It's a nightmare, and that's one of the reasons why I created this plugin.

Unlike **Behavior Trees** and **Finite State Machines**, the question a **Utility-Based Agent** has to answer is **What do I want to do the most right now?**. So for each decision, the agent needs to ask itself: **How much do I want to take this decision at the moment?**. And depending on the answers, it assigns a score to each decision, compares all of those decisions to each other and select the best one with the highest score.

As a result, you no longer need to worry about the conditions and order of all decisions. What matters to you is simply: **What is the most important thing to do at the moment?**.  For example, if the player health is `30`, the energy is `50`, the distance to the enemy is `40`, what does the player want to do the most?
- Move towards the enemy?
- Flee from the enemy?
- Attack the enemy?

One drawback of other AI systems is that the decision-making conditions are based on **a threshold**. Consider this decision-making logic for an Enemy AI:
```cs
if(ShouldAttackPlayer())
	AttackPlayer()
else
	Idle()

bool ShouldAttackPlayer()
{
	return DistanceToPlayer < 10;
}
```

With this decision-making logic, the enemy will suddenly attack the player when the player enters its attack range (`10` m). And if the player is outside of `10` m, it won't do anything, even though the distance from it to the player is `11` m. So if players know the attack range of each enemy, they can kill any enemy easily without losing a drop of health.

In **Utility AI**, this situation is very unlikely to happen unless you intentionally do so because **Utility AI** measures **How much do I want to take this decision at the moment**. So the distance to the player is `11` m just means the desire to attack the player is lower than when it is `10` m. 

For example, if the players is inside `10` m, the score of `AttackPlayer` is `1.0`, then if the distance to player is `11` m, the score of `AttackPlayer` will be `0.9`. Therefore, whether the distance is `11` m or `10` m, if the score of `AttackPlayer` is greater than `Idle`, then `AttackPlayer` is still chosen. 

This is the reason why agents made by **Utility-Based AI** are far more natural than the predictably robotic **If/Else-Based AI** such as **Behavior Trees** and **Finite State Machines**.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>