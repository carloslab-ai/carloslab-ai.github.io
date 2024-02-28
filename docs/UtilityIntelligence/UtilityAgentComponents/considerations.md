---
share: true
title: Considerations (Axes)
---

In **Utility Intelligence,** a **consideration (also called axis)** represents an aspect of the game world that influences the utility of a decision. It indicates **how appealing** the decision is at the moment and is always normalized in the range `[0, 1]`. 

For instance, suppose our agent has a decision called `AttackEnemy`, and this decision has an axis like this: **How high is my health right now?**. If the agent's health currently is `100`, then the utility of this axis will be `1.0`. It's very appealing, isn't it? However if the agent's health is just `50`, then the utility is only `0.5`. It's not as appealing anymore, right?

In addition, you can add **as many axes as you want** to a decision. That's why *Dave Mark* called it the **Infinite Axis Utility System**. 


### The structure of a consideration

A consideration is made up of:
- An input
- An input normalization
- A response curve

**Input** is some knowledge about the game world that used to calculate the score of a consideration. For example, my health, target health, distance to target, etc. And it is normalized to `[0, 1]` by an **input normalization**. Then the normalized input is processed through a **reponse curve**, which remaps the normalized input to a consideration score. These consideration scores are then multiplied together to get the final score of the decision. Therefore, if the score of any consideration is `0`, then the score of the decision will also be `0`.

![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/infinite-axis.png|center]]


You can add new considerations by using the **Consideration Editor**. With this powerful Editor, you can select the input, the normalization and the response curve you want. Besides that, you could check how they affect the consideration score by changing them.
![[../../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif|../../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif]]

### Inputs

And you can add inputs to the agent by going to the **Input Tab**:
![[../../Attachments/UtilityIntelligence/Documenntation/input-tab.png|../../Attachments/UtilityIntelligence/Documenntation/input-tab.png]]

There are two ways to create a new input:

1. Inherit from `Input<Value>`
	```cs
	public class MyDistanceToTargetInput : Input<float>  
	{  
	    protected override float OnGetRawInput(ConsiderationContext context)  
	    {        Vector3 myPosition = GetComponent<Transform>().position;  
	        Vector3 targetPosition = context.Target.GetComponent<Transform>().position;  
	        myPosition.y = 0;  
	        targetPosition.y = 0;  
	  
	        return Vector3.Distance(myPosition, targetPosition);  
	    }}
	```

2. Inherit from `InputFromSource<Value>`
	```cs
	public class HealthInput : InputFromSource<float>  
	{  
	    protected override float OnGetRawInput(ConsiderationContext context)  
	    {        UtilityEntity inputSource = GetInputSource(context);  
	        if (inputSource is UtilityAgent agent)  
	        {            CharacterHealth characterHealth = agent.GetComponent<CharacterHealth>();  
	            return characterHealth.Health;  
	        }  
	        return 0;  
	    }}
	```

### Input Normalizations

To create new input normalizations, you need to create a new class inheriting from `InputNormalization<Value>`

```cs
public class ChargeRadiusNormalization : InputNormalization<float>  
{  
    public float ChargeRadius = 2;  
  
    protected override float OnCalculateNormalizedInput(float rawInput, ConsiderationContext context)  
    {        return rawInput >= 0 && rawInput <= GetChargeRadius(context) ? 1.0f : 0.0f;  
    }  
    private float GetChargeRadius(ConsiderationContext context)  
    {        if (context is { TargetFacade: ChargeStation chargeStation })  
            return chargeStation.ChargeRadius;  
        return ChargeRadius;  
    }}
```

### Response Curves



### Built-in Inputs, Normalizations and Response Curves
**Utility Intelligence** provides a set of built-in inputs, normalizations and response curves which help you create new considerations **without having to write a single line of code!**

1. Inputs
	- BasicInputBool
	- BasicInputInt
	- BasicInputFloat
	- MyDistanceToTarget
1. Input Normalizations
	- Float
		- BasicNormalizationFloat
		- DivideByMaxValueFloat
		- GreaterThanOrEqualValueFloat
		- LessThanOrEqualValueFloat
		- InRangeFloat
		- IsInRangeFloat
	- Int
		- BasicNormalizationInt
		- GreaterThanOrEqualValueInt
		- LessThanOrEqualValueInt
		- InRangeInt
		- IsInRangeInt
	- Bool
		- BasicNormalizationBool
1. Response Curve
	- Basic Linear
	- Inverse Linear
	- Constant
	- Basic Logistic
	- Inverse Logistic
	- Basic Logit
	- Inverse Logit
	- Basic Quadric Lower Left
	- Basic Quadric Lower Right
	- Basic Quadric Upper Left
	- Basic Quadric Upper Right
	- Basic Sine
	- Inverse Sine
	- Basic Bell Curve
	- Inverse Bell Curve


<!--
**Here's how it works step by step:**
1. Evaluating Actions:
- The game world state is analyzed, considering factors like the NPC's health, enemy positions, available resources, and goals.
- Each possible action the NPC can take (attack, heal, move, etc.) is assessed based on its impact on the game state.
2. Assigning Utilities:
- Based on the analysis, each action is assigned a numerical score representing its **utility**.
- This score reflects how "good" the action is for achieving the NPC's goals in the current context.
- Factors like potential damage dealt, health recovered, or distance moved closer to the objective can contribute to the score.
3. Making Decisions:
- The action with the **highest utility score** is chosen for the NPC to perform.
- This ensures the NPC prioritizes actions that are most beneficial for its current situation and goals.


## Infinite Axis Utility System

## Why you should use Utility AI instead of Behavior Tree and Finite State Machine

-->