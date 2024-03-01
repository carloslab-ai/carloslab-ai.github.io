---
share: true
title: Decisions
---

### Decision weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the decision's weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decision-weight.png|center|550]]

To change the decision's weight, you need to use the Editor:

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png]]

### Decision score per target

Every decision has at least 1 target and they will be **scored per target**.  **Utility Intelligence** will compare all of the decision-target pairs with each other then choose the pair with the highest score.

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png]]

### Decision's structure

In **Utility Intelligence**, each decision has:
- A list of target filters
- A list of considerations
- A list of actions

Because decisions are scored based on their targets. And any entity in the **Utility World** (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached)  could be a target. Therefore, we need a way to filter targets, ensuring that the **Decision Score Evaluator** only evaluates appropriate targets. And that is the job of `TargetFilter`.

After finding appropriate targets, all considerations of that decision will be evaluated for each target to calculate the final score of each decision-target pair. Subsequently, the best decision-target pair with the highest score will be chosen. 

Finally, all actions attached to it will be executed either in **sequence** or in **parallel**.

### Target Filters

#### How to create a new target filter

To create a new Target Filter, you need to create a new class inherited from `TargetFilter` and override `OnFilterTarget` method:
```cs
public class ChargeStationFilter : TargetFilter
{
    public ChargeStationType Type;

    protected override bool OnFilterTarget(DecisionContext context)
    {
        return context.TargetFacade is ChargeStation station && station.Type == Type;
    }
}
```

Note that you can add multiple target filters to a decision. To add target filters, you need to choose the target filter type, and then click the **Create** button:
![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/add-target-filter.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/add-target-filter.png]]

#### Built-in target filters

Currently, **Utility Intelligence** provides some built-in target filters as follows:
- SelfFilter: The filtered target is the current agent.
- OtherFilter: The filtered targets are any entities in the utility world, except the current agent.
- AgentFilter. The filtered targets are any agents in the utility world.

And more built-in target filters will be added soon based on user needs.

### Actions

After the agent finds out the best decision, it will execute the attached actions either in sequence or in parallel depending on your choice. Currently, there are two execution modes for actions:
- ActionsRunInSequence
	- The actions will be run sequentially. 
	- If an action returns success, then the agent will run the next action in order.
	- If an action returns failure, then the actions will be restarted and the agent will run them from the beginning.
- ActionsRunInParallel
	- The actions will be run simultaneously. 
	- If any action returns success or failure, then the actions will be restarted, and the agent will run them from the beginning.

You can choose the execution mode you prefer by selecting it from this drop down menu:
![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/actions-sequence-parallel.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/actions-sequence-parallel.png]]

#### How to create a new action

#### Built-in actions
- Idle
- Log
- Wait
- RandomWait
- MoveTowards
- NavmeshMoveTowards
- DestroySelf
---
<p align="center">
If you find anything that seems incorrect, please let me know so that I can fix it! 😆
	<br>
	<a href="https://discord.gg/vRFEK5uE3f"><img width = '50' height='50' src="/Attachments/discord.png"></img></a>
	<a href="mailto: carlos.truong.dev@gmail.com"><img width = '50' height='50' src="/Attachments/gmail.png"></img></a>
</p>
<p align="center">
And if you like this plugin, please support me by leaving a 5-star review on <a href="https://assetstore.unity.com/packages/slug/276632">the Unity Asset Store</a>. Thank you! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Review this plugin"></img></a>
</p>