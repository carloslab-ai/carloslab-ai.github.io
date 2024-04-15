---
share: true
title: Considerations
category: Utility Intelligence
---

In **Utility Intelligence,** a **consideration (also called axis)** represents an aspect of the game world that influences the utility of a decision. It indicates **how appealing** the decision is at the moment and is always normalized in the range `[0, 1]`. 

For instance, suppose our agent has a decision called `AttackEnemy`, and this decision has an axis like this: **How high is my health right now?**. If the agent's health currently is `100`, then the utility of this axis will be `1.0`. It's very appealing, isn't it? However if the agent's health is just `50`, then the utility is only `0.5`. It's not as appealing anymore, right?

In addition, you can add **as many axes as you want** to a decision. That's why *Dave Mark* calls it the **Infinite Axis Utility System**. 

## Understanding how considerations work

A consideration is made up of:
- An [[#Inputs|Input]]
- An [[#Input Normalizations|Input Normalization]]
- A [[#Response Curves|Response Curve]]

**Input** is some knowledge about the game world that used to calculate the score of a consideration. For example, my health, target health, distance to target, etc. And it is normalized to `[0, 1]` by an [[#Input Normalizations|Input Normalization]].

Then the normalized input is processed through a [[#Response Curves|Response Curve]], which remaps the normalized input to a consideration score. These consideration scores are then multiplied together to get the final score of the decision. Therefore, if the score of any consideration is `0`, then the score of the decision will also be `0`.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/infinite-axis.png|center]]

## Compensation Factor
The more considerations a decision has, the lower the score it will be due to the multiplication. For example, if a decision has 9 considerations and the score of each consideration is `0.9`, then the final score of it will be **0.9<sup>9</sup> = 0.387**.

Therefore, theoretically, if a decision has an infinite number of axes, even if the consideration scores are high, the final score of the decision will be close to `0`.

To address this issue, *Dave Mark* introduced the **Compensation Factor** calculation, which takes into account the number of considerations to balance it. He presented this calculation in [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI) (9:10).

Here's how the compensation factor calculation is implemented in code:
```cs
public static float CompensateScore(float considerationScore, float considerationCount)  
{  
    float modificationFactor = 1.0f - 1.0f / considerationCount;  
    float makeUpValue = (1.0f - considerationScore) * modificationFactor;  
    return considerationScore + makeUpValue * considerationScore;  
}
```

To enable/disable Compensation Factor, you need to check/uncheck the Compensation Factor option in the **Intelligence Editor**.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/enable-disable-compensation-factor.png|center|300]]

## Creating Considerations

To create a new consideration, you need to go to the **Consideration Tab**, fill in the
**Name** field, and then click the **Create** button:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/create-consideration.png|center|600]]

After creating a consideration, you can select an [[#Inputs|Input]], an [[#Input Normalizations|Input Normalization]], and update the [[#Response Curves| Response Curve]] of the consideration, change their values and observe how these changes affect the consideration score.

## Consideration's Statuses

Considerations only have two statuses at both runtime and editor time:
<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(0, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Executed</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 165, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Discarded</p>
</div>

## Inputs

### Creating Inputs

There are two ways to create a new input:
1. Create a class inherited from `Input<Value>` and override `OnGetRawInput` method. For example:
	```cs
	public class MyDistanceToTargetInput : Input<float>
	{
	    protected override float OnGetRawInput(InputContext context)
	    {
	        var myPosition = AgentFacade.Position;
	        var targetPosition = context.TargetFacade.Position;
	        myPosition.Y = 0;
	        targetPosition.Y = 0;
	
	        return Vector3.Distance(myPosition, targetPosition);
	    }
	}
	```

2. Because each consideration is considered per target, so if the input factor exists in both **Self** and **Target** entities, then the input class should inherit from `InputFromSource<Value>`:
	```cs
	public class HealthInput : InputFromSource<int>
	{
	    protected override int OnGetRawInput(InputContext context)
	    {
	        UtilityEntity inputSource = GetInputSource(context);
	        if (inputSource.EntityFacade is Character character)
	        {
	            return character.Health.Health;
	        }
	
	        return 0;
	    }
	}
	```
- Using `InputFromSource<Value>`, you can choose the source of the input: either **Self** or **Target**:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/Inputs/input-source.png]]

To add inputs to the agent, you need to go to the **Input Tab**, give it a name, select the input type and then click to the **Create** button: 

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/input-tab.png|center|400]]

To select the input for a consideration, you need to select the input name from this drop down in **Consideration Editor**:  

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/Inputs/select-input.png|center|600]]


### Built-in Inputs

Currently, **Utility Intelligence** provides these buit-in inputs:
- **BasicInputFloat(Int/Bool)**: It returns the default value of the type at runtime and is mainly used for testing considerations
- **MyDistanceToTargetInput**: It returns the distance from the current agent to the target.

## Input Normalizations

### Creating Input Normalizations

- To create a Input Normalization, you need to create a new inherited from `InputNormalization<Value>` and override `OnCalculateNormalizedInput` method. For example:
	```cs
	public class IsInChargeRadiusNormalization : InputNormalization<float>
	{
	    public float ChargeRadius = 2;
	
	    protected override float OnCalculateNormalizedInput(float rawInput, InputContext context)
	    {
	        return rawInput >= 0 && rawInput <= GetChargeRadius(context) ? 1.0f : 0.0f;
	    }
	
	    private float GetChargeRadius(InputContext context)
	    {
	        if (context is { TargetFacade: ChargeStation chargeStation })
	            return chargeStation.ChargeRadius;
	        return ChargeRadius;
	    }
	}
	```

- To select the input normalization for a consideration, you need to select the normalization type from this drop down in **Consideration Editor**:  
	![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/Inputs/select-normalization.png|center|600]]

### Built-in Input Normalizations

We provides a lot of built-in input normalizations to help you normalize your inputs **without having to write a single line of code**:
- Float
	- **BasicNormalizationFloat**: It clamps the input value to `[0, 1]`
	- **DivideByMaxValueFloat**: It divides the input by `MaxValue`.
	- **GreaterThanOrEqualValueFloat**: It returns `1` if the input value is greater than `Value`; otherwise, it returns `0`.
	- **LessThanOrEqualValueFloat**: It returns `1` if the input value is less than the `Value`; otherwise, it returns `0`.
	- **InRangeFloat**: It maps the input value from `[MinValue, MaxValue]` to `[0, 1]`.  Note that if the input value is above `MaxValue`, then the normalized value is `1`, and if the input value is below `MaxValue`, then the normalized value is `0`.
	- **IsInRangeFloat**: It returns `1` if the input value is in the range `[MinValue, MaValue]`; otherwise, it returns `0`.
- Int 
	- The integer input normalizations are similarly to the floats
- Bool
	- **BasicNormalizationBool**: It returns `1` if the input value is `true`; otherwise, it returns `0`.

## Response Curves

In **Utility Intelligence**, response curves are used to remap the normalized input to the consideration score. And it has 5 parameters:
- Curve Type
- Slope
- Exponent
- XShift
- YShift

You can change these parameters to adjust the shape of the response curve based on your needs. 

**Utility Intelligence** also provides a list of useful presets for response curves. If you want to use our presets, you just need to select one and click to the **Apply** button.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Considerations/response-curves.png|center|600]]