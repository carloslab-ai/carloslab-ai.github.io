---
share: true
title: Action Tasks
category: Utility Intelligence
---

Action Tasks are tasks that the agent has to execute if the attached decision has been selected. They are executed either in sequence or in parallel, depending on the execution mode of the action list.

## Execution Modes

After the agent finds out the best decision, it will execute the action list either in **sequence** or in **parallel**, depending on your choice. Currently, there are two execution modes for the action list:
- **Sequence**
	- The actions will be run sequentially. 
	- If an action finishes in success, the agent will run the next action, and the action list will finish in success if the last action finishes in success.
	- If an action finishes in failure, the action list will finish in failure.
- **Parallel**
	- The actions will be run simultaneously. 
	- The action list will finish in success if all actions are finished in success.
	- If any action finishes in failure, other actions will be aborted and the action list will finish in failure.
- **ParallelComplete**
	- The actions will be run simultaneously. 
	- If any action finishes in success or failure, other actions will be aborted and the action list will return the child status immediately.

You can choose the execution mode you want by selecting it from this drop down menu:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/ActionTasks/actions-execution-mode.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/ActionTasks/actions-execution-mode.png]]

## MaxRepeatCount

It is the number of times to repeat the action list. 

> [!NOTE]
> - The action list only repeat if it is finished in success.
> - If `MaxRepeatCount` <= 0 it will be repeated forever

You can change `MaxRepeatCount` of the action list here:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/ActionTasks/max-repeat-count.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/ActionTasks/max-repeat-count.png]]

## Keep Running Until Finished
In case you want to prevent the current agent from making a new decision while the action list is running, you can check the option: **Keep Running Until Finished** in the **Action List Editor**. 


> [!TIP]
> - By enabling this option for important decisions, such as **AttackEnemy**, **ChargeHealth**, and **ReloadAmmunition**, it stops the agent from getting distracted by other non-important decisions. This helps reduce [[UtilityIntelligence/UtilityIntelligence/decisions#Oscillation between decision-target pairs|the oscillation between these important decisions and other non-important ones]].
> - For example, with **AttackEnemy** decision, you should enable this option because the agent needs to finish the attack before switching to another decision, such as **RunAwayFromEnemy**. 


> [!NOTE]
> - If you enable this option, the agent can only change its decision after the action list is finished, regardless of whether the scores of other decisions are higher than the current one.
> - For example, with **AttackEnemy** decision, the agent can only switch to another decision after each attack is finished, even if the scores of other decisions such as **RunAwayFromEnemy** or **ReloadAmmunition** are higher than **AttackEnemy**.
> - Additionally, if the score of the **AttackEnemy** decision remains the highest after each attack, the agent will keep running this decision.


To enable/disable **Keep Running Until Finished** option, you need to check/uncheck it in the **Action List Editor**:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/ActionTasks/keep-running-until-finished.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/ActionTasks/keep-running-until-finished.png]]

## Creating Action Tasks

1. To create a new action task, you need to create a new class inherited from `ActionTask`:
	```cs
    public class Wait : ActionTask
    {
        private float elapsedTime;
        public VariableReference<float> WaitTime = 1.0f;

        protected override void OnStart()
        {
            elapsedTime = 0;
        }

        protected override UpdateStatus OnUpdate(float deltaTime)
        {
            elapsedTime += deltaTime;

            if (elapsedTime > WaitTime) return UpdateStatus.Success;
            return UpdateStatus.Running;
        }
    }
	```
1. To assign the action task to a decision, you need to go the the **Action List Editor** in [[UtilityIntelligence/UtilityIntelligence/editor-window#Intelligence Tab|Intelligence Tab]], select the action type, then click the **Create** button:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Decisions/assign-action-task.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Decisions/assign-action-task.png]]


## Action Task Statuses
At runtime, action tasks have 4 statuses:
<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Running</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(0, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Success</p>
</div>

<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 0, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Failed</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 165, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Aborted</p>
</div>

## Built-in Action Tasks

Currently, **Utility Intelligence** provides these built-in action tasks:
- Idle
- Log
- Wait
- RandomWait
- MoveTowards
- NavmeshMoveTowards
- DestroySelf


## Properties and Functions

### Properties

Here are some useful properties that you can use in your custom tasks:
```cs
Transform Transform { get; private set; }  
  
GameObject GameObject { get; private set; }  
  
UtilityAgentController AgentController { get; private set; }
```

### Functions

#### GetComponent Functions
You can get any component attached to the GameObject by calling these functions:

```cs
T GetComponent<T>()
T GetComponentInChildren<T>()
```

#### Coroutine functions

We provides these functions to help you start/stop coroutines from action tasks:
```cs
void StartCoroutine(string methodName);

Coroutine StartCoroutine(IEnumerator routine);

Coroutine StartCoroutine(string methodName, object value);

void StopCoroutine(string methodName);

void StopCoroutine(IEnumerator routine);

void StopAllCoroutines();
```

#### Overridable Functions
Here is the list of functions you could override to make your actions works as you want:
- **Lifecycle Functions**:
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
- **Collision/Trigger 3D**:
	```cs
	void OnCollisionEnter(Collision collision);
	
	void OnCollisionStay(Collision collision);
	
	void OnCollisionExit(Collision collision);
	
	void OnTriggerEnter(Collider other);
	
	void OnTriggerStay(Collider other);
	
	void OnTriggerExit(Collider other);
	
	void OnControllerColliderHit(ControllerColliderHit hit);
	```
- **Collision/Trigger 2D**:
	```cs
	void OnCollisionEnter2D(Collision2D collision);
	
	void OnCollisionStay2D(Collision2D collision);
	
	void OnCollisionExit2D(Collision2D collision);
	
	void OnTriggerEnter2D(Collider2D other);
	
	void OnTriggerStay2D(Collider2D other);
	
	void OnTriggerExit2D(Collider2D other);
	```
- **Animation**:
	```cs
	void OnAnimatorMove();
	
	void OnAnimatorIK(int layerIndex);
	```




