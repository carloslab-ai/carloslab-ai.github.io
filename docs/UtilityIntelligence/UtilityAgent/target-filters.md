---
share: true
title: Target Filters
---

# Creating Target Filters

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
![[../../Attachments/UtilityIntelligence/Documenntation/EditorWindow/target-filter-tab.png|center|400]]

1. To attach the Target Filter to a decision, you need to go the the **Decision Editor** in the **Agent Tab**, select the Target Filter name, then click the **Add** button:
![[../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/attach-target-filter.png|../../Attachments/UtilityIntelligence/Documenntation/UtilityAgent/Decisions/attach-target-filter.png]]

> [!NOTE]
> - You can attach multiple Target Filters to a decision.
> - If the Target Filter list is empty, all entities in the world will be the targets for the decision.

# Built-in Target Filters

Currently, we provides these built-in Target Filters:
- **OtherFilter**: The filtered targets are any entities in the utility world, except the current agent.
- **AgentFilter**: The filtered targets are any agents in the utility world.

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave it a 5-star review"></img></a>
</p>