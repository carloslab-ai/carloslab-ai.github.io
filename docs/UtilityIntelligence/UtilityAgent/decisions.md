---
share: true
title: Decisions
---

In **Utility Intelligence**, each decision has:
- A list of [[#Target Filters|Target Filters]]: They are used to filter targets for the decision.
- A list of [[considerations|Considerations]]: They are used to calculate the score of the decision.
- A list of [[action-tasks|Action Tasks]]: They will be executed by the egent if the decision is chosen.

# How do Decisions work?

Since a decision [[#Decisions are scored per target|is scored per target]], and any [[../UtilityWorld/utility-entity|Utility Entity]] (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached) in the [[../UtilityWorld/index|Utility World]] could be a target of the decision, we need a way to filter targets to ensure that only appropriate targets are considered. This is the job of [[#Target Filters| > Target Filters]].

After finding appropriate targets, all [[considerations|Considerations]] of the decision will be evaluated for each target to calculate the score of each decision-target pair. Then the score of each pair is multiplied with the [[#Decision Weight|Decision Weight]] to get the final score.

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all [[action-tasks|Action Tasks]] attached to the decision, either in **Sequence** or in **Parallel**.

## Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the Decision Weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/decision-weight.png|center|550]]

You can change the weight of a decision in the **Decision Editor**:

![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/adjust-decision-weight.png|../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/adjust-decision-weight.png]]

## Decisions are scored per target

A decision may or may not have targets, but:
1. If it has targets, it will be **scored per target**. Afterward, **Utility Intelligence** will compare the scores of all the decision-target pairs with each other and select the pair with the highest score.
2. If it doesn't have targets, it will be scored only once, and that score is the final score of the decision.

![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/decisions-per-target.png|../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/decisions-per-target.png]]


# Target Filters

**Target Filters** are used to filter targets for the current decision. 

> [!NOTE]
> - A decision may or may not have Target Filters.
> - But if the Target Filter list is empty, all utility entities in the world will be the targets for the decision.

## Creating Target Filters

1. To create a new Target Filter, you need to create a class inherited from `TargetFilter` and override `OnFilterTarget` method:
	```cs
    public class ChargeStationFilter : TargetFilter
    {
        public ChargeStationType Type;

        protected override bool OnFilterTarget(UtilityEntity target)
        {
            return target.EntityFacade is ChargeStation station && station.Type == Type;
        }
    }
	```

1.  To add the Target Filter to the agent, you need to go to **Target Filter Tab**, select a target filter type, give it a name, and then click the **Create** button:
![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgentEditor/target-filter-tab.png|center|400]]

1. To attach the Target Filter to a decision, you need to go the the **Decision Editor** in the **Agent Tab**, select the Target Filter name, then click the **Add** button:
![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/attach-target-filter.png|../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/attach-target-filter.png]]

## Built-in Target Filters

Currently, we provides these built-in Target Filters:
- **OtherFilter**: The filtered targets are any entities in the utility world, except the current agent.
- **AgentFilter**: The filtered targets are any agents in the utility world.

# Creating Decisions

To create a new decision, you need to go to the **Agent Tab**, fill in the **Name** field, and then click the **Create** button:

![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/create-decision.png|center]]

After create a decision, you can attach [[#Target Filters|Target Filters]], [[considerations|Considerations]] and assign [[action-tasks|Action Tasks]] for the decision using **Decision Editor**.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>
