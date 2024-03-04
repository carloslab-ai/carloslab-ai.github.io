---
share: true
title: Decisions
---

In **Utility Intelligence**, each decision has:
- A list of target filters
- A list of considerations
- A list of actions

Because decisions [[#Decision are scored per Target|are scored per Target]]. And any entity in the **Utility World** (all GameObjects with `UtilityEntityOwner` or `UtilityAgentOwner` attached)  could be a target. Therefore, we need a way to filter targets, ensuring that the **Decision Score Evaluator** only evaluates appropriate targets. And that is the job of `TargetFilter`.

After finding appropriate targets, all considerations of that decision will be evaluated for each target to calculate the final score of each decision-target pair. 

Finally, the best decision-target pair with the highest score will be chosen and the agent will execute all actions attached to the decision, either in **sequence** or in **parallel**.

**Creating Decisions**

To create a new Decision, you need to go to the **Agent Tab**, give the new Decision a name, and then click the **Create** button:

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/add-decision.png|center|500]]

## Decision Weight

In **Utility Intelligence**, you can control the prioritization of each decision by adjusting the decision's weight. For example, you can organize your decisions into multiple layers like the following:
- Normal Layer's Weight: 1.0
- Combat Layer's Weight: 2.0
- Urgent Layer's Weight: 3.0

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decision-weight.png|center|550]]

To change the decision's weight, you need to use the Editor:

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/adjust-decision-weight.png]]

## Decision are scored per Target

Every decision has at least 1 target and they will be **scored per target**.  **Utility Intelligence** will compare all of the decision-target pairs with each other then choose the pair with the highest score.

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/decisions-per-target.png]]

## Target Filters

### Creating Target Filters

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

### Built-in Target Filters

Currently, **Utility Intelligence** provides some built-in target filters as follows:
- **SelfFilter**: The filtered target is the current agent.
- **OtherFilter**: The filtered targets are any entities in the utility world, except the current agent.
- **AgentFilter**: The filtered targets are any agents in the utility world.

And more built-in target filters will be added soon.

## Actions

### Execution Modes

After the agent finds out the best decision, it will execute the action list either in **sequence** or in **parallel**, depending on your choice. Currently, there are two execution modes for the action list:
- **ActionsRunInSequence**
	- The actions will be run sequentially. 
	- If an action returns success, the agent will run the next action, and the action list will finish in success when the last action returns success.
	- If an action returns failure, the action list will finish in failure.
- **ActionsRunInParallel**
	- The actions will be run simultaneously. 
	- If any action returns success, the action list will finish in success.
	- If any action returns failure, the action list will finish in failure.

You can choose the execution mode you prefer by selecting it from this drop down menu:
![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/actions-sequence-parallel.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/actions-sequence-parallel.png]]


### Wait Until Finished
In case you want to wait until the action list of the current decision is finished before the agent makes a new decision, you can check the option: **Wait Until Action List Finished**. For example, it can be used with the attack action because the agent needs to finish the attack before starting the next action, such as run away from the enemy. 

![[../../Attachments/UtilityIntelligence/Documenntation/Decisions/wait-action-list-finished.png|../../Attachments/UtilityIntelligence/Documenntation/Decisions/wait-action-list-finished.png]]

### Restarted After Finished

> [!NOTE] Note
> The action list will be restarted from the beginning after it is finished.

### Creating Actions

To create a new action, you need to create a new class inherited from `ActionTask`:
```cs
public class Wait : ActionTask
{
    private float elapsedTime;
    public VariableReference<float> WaitTime = 1.0f;

    protected override void OnStart()
    {
        elapsedTime = 0;
    }

    protected override Status OnUpdate(float deltaTime)
    {
        elapsedTime += deltaTime;

        if (elapsedTime > WaitTime) return Status.Success;
        return Status.Running;
    }
}
```


### Overridable Functions
Here is the list of functions you could override to make your actions works as you want:

**Lifecycle Functions**:
```cs
void OnAwake();

void OnStart();

Status OnUpdate();

void OnLateUpdate();

void OnFixedUpdate();

//OnAbort is called when the action's target changes or when the agent makes a new decision
void OnAbort();

//OnEnd is called after the action returns a success or failure
void OnEnd();
```

**Collision/Trigger 3D**:
```cs
void OnCollisionEnter(Collision collision);

void OnCollisionStay(Collision collision);

void OnCollisionExit(Collision collision);

void OnTriggerEnter(Collider other);

void OnTriggerStay(Collider other);

void OnTriggerExit(Collider other);

void OnControllerColliderHit(ControllerColliderHit hit);
```

**Collision/Trigger 2D**:
```cs
void OnCollisionEnter2D(Collision2D collision);

void OnCollisionStay2D(Collision2D collision);

void OnCollisionExit2D(Collision2D collision);

void OnTriggerEnter2D(Collider2D other);

void OnTriggerStay2D(Collider2D other);

void OnTriggerExit2D(Collider2D other);
```

**Animation:**
```cs
void OnAnimatorMove();

void OnAnimatorIK(int layerIndex);
```

### Coroutine functions

We provides these functions to help you start/stop coroutines from your actions:

```cs
void StartCoroutine(string methodName);

Coroutine StartCoroutine(IEnumerator routine);

Coroutine StartCoroutine(string methodName, object value);

void StopCoroutine(string methodName);

void StopCoroutine(IEnumerator routine);

void StopAllCoroutines();
```


### Built-in Actions

Here is the list of built-in actions and there will be more soon:
- Idle
- Log
- Wait
- RandomWait
- MoveTowards
- NavmeshMoveTowards
- DestroySelf

---
<p align="center">
If you like this plugin, please support it by leaving a <b>5-star</b> review on the <b>Asset Store</b>, so I will have more time to develop it. Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Review this plugin"></img></a>
</p>