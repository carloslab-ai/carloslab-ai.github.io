---
share: true
title: Blackboard
---

Blackboard is used to share information between multiple components in an Agent. 
- It can be access from many places, such as Inputs, Input Normalizations, Target Filters, Actions. 
- It contains a list of Variables and you can Read/Write to these Variables for any purpose.

# Creating Variables
- To create a new Variable, you need to create a new class inherited from `Variable<TValue>`. For example:
	```cs
	public class FloatVariable : Variable<float>
	{
	    public FloatVariable()
	    {
	    }
	
	    public FloatVariable(float value) : base(value)
	    {
	    }
	
	    public static implicit operator FloatVariable(float value)
	    {
	        return new FloatVariable { Value = value };
	    }
	}
	```
- Then you can add this Variable to your Agent's Blackboard by going to the **Blackboard Tab**, select the Variable type, give it a name and then click the **Create** button:
	![[Attachments/UtilityIntelligence/Documentation/UtilityAgent/Blackboard/add-variable.png|center|400]]


# Referencing Variables

And to reference a Variable from your classes, you need to declare a `VariableReference<Type>`. For example:
- Action:
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
- Input Normalization:
	```cs
	public class DivideByMaxValueFloat : InputNormalization<float>
	{
	    public VariableReference<float> MaxValue;
	
	    protected override float OnCalculateNormalizedInput(float rawInput, ConsiderationContext context)
	    {
	        if (MaxValue == 0.0f) return 0.0f;
	        return rawInput / MaxValue;
	    }
	}
	```


Finally, you need to select the Variable you just created from the dropdown menu:

![[Attachments/UtilityIntelligence/Documentation/UtilityAgent/Blackboard/reference-variable.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Blackboard/reference-variable.png]]



# Built-in Variables
Currently, we provides these built-in variables:

- Float
- Double
- Int
- Long
- Bool
- String
- Vector2
- Vector2Int
- Vector3
- Vector3Int
- Color

---
<p align="center">
	If you <b>find</b> this plugin <b>helpful</b>, please consider <b>supporting</b> it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave a 5-star review"></img></a>
</p>