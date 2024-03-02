---
share: true
title: Considerations
---

In **Utility Intelligence,** a **consideration (also called axis)** represents an aspect of the game world that influences the utility of a decision. It indicates **how appealing** the decision is at the moment and is always normalized in the range `[0, 1]`. 

For instance, suppose our agent has a decision called `AttackEnemy`, and this decision has an axis like this: **How high is my health right now?**. If the agent's health currently is `100`, then the utility of this axis will be `1.0`. It's very appealing, isn't it? However if the agent's health is just `50`, then the utility is only `0.5`. It's not as appealing anymore, right?

In addition, you can add **as many axes as you want** to a decision. That's why *Dave Mark* called it the **Infinite Axis Utility System**. 


### The structure of a consideration

A consideration is made up of:
- An input
- An input normalization
- A response curve

**Input** is some knowledge about the game world that used to calculate the score of a consideration. For example, my health, target health, distance to target, etc. And it is normalized to `[0, 1]` by an **input normalization**. 

Then the normalized input is processed through a **reponse curve**, which remaps the normalized input to a consideration score. These consideration scores are then multiplied together to get the final score of the decision. Therefore, if the score of any consideration is `0`, then the score of the decision will also be `0`.

![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/infinite-axis.png|center]]


You can add new considerations by using the **Consideration Editor**. With this powerful Editor, you can select the input, the normalization and the response curve you want. Besides that, you can check how they affect the consideration score by changing them.

![[../../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif|../../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif]]

### Inputs

#### How to create a new input
There are two ways to create a new input:
1. Create a class inherited from `Input<Value>` and override `OnGetRawInput` method. For example:
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

2. Because each consideration is considered per target, so if the input factor exists in both self and target entities, then the input class should inherit from `InputFromSource<Value>`:
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
- Using `InputFromSource<Value>`, you can choose the source of the input: either **Self** or **Target**:
![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/input-source.png|../../Attachments/UtilityIntelligence/Documenntation/Considerations/input-source.png]]

To add inputs to the agent, you need to go to the **Input Tab**, give it a name, select the input type and then click to the **Create** button:
![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/add-input.png|../../Attachments/UtilityIntelligence/Documenntation/Considerations/add-input.png]]

#### Built-in inputs

Currently, there is only one built-in input, and I will add more in the future based on user needs:
- `MyDistanceToTargetInput`: It returns the distance from the current agent to the target.

### Input normalizations

#### How to create a new input normalization

To create a new input normalization, you need to create a new class inherited from `InputNormalization<Value>` and override `OnCalculateNormalizedInput` method. For example:
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

To select the input normalization for your consideration, you need to select the normalization type from this drop down in **Consideration Editor**:
![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/select-normalization.png|../../Attachments/UtilityIntelligence/Documenntation/Considerations/select-normalization.png]]

#### Built-in input normalizations

We provides a lot of built-in input normalizations to help you normalize your inputs **without having to write a single line of code**:
- `Float`
	- `BasicNormalizationFloat`: It clamps the input value to `[0, 1]`
	- `DivideByMaxValueFloat`: It divides the input by `MaxValue`.
	- `GreaterThanOrEqualValueFloat`: It returns `1` if the input value is greater than `Value`; otherwise, it returns `0`.
	- `LessThanOrEqualValueFloat`: It returns `1` if the input value is less than the `Value`; otherwise, it returns `0`.
	- `InRangeFloat`: It maps the input value from `[MinValue, MaxValue]` to `[0, 1]`.  Note that if the input value is above `MaxValue`, then the normalized value is `1`, and if the input value is below `MaxValue`, then the normalized value is `0`.
	- `IsInRangeFloat`: It returns `1` if the input value is in the range `[MinValue, MaValue]`; otherwise, it returns `0`.
- `Int` 
	- The integer input normalizations are similarly to the floats
- `Bool`
	- `BasicNormalizationBool`: It returns `1` if the input value is `true`; otherwise, it returns `0`.

### Response curves

In **Utility Intelligence**, response curves are used to remap the normalized input to the consideration score. And it has 5 parameters:
- Curve Type
- Slope
- Exponent
- XShift
- YShift

You can change these parameters to adjust the shape of the response curve based on your needs. 

**Utility Intelligence** also provides a list of useful presets for response curves. If you want to use our presets, you just need to select one and click to the **Apply** button.

![[../../Attachments/UtilityIntelligence/Documenntation/Considerations/response-curves.png|../../Attachments/UtilityIntelligence/Documenntation/Considerations/response-curves.png]]

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