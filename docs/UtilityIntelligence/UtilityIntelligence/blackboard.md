---
share: true
title: Blackboard
category: Utility Intelligence
---

Blackboard is used to share information between multiple components in an Agent. 
- It can be access from many places, such as Inputs, Input Normalizations, Target Filters, Actions. 
- It contains a list of Variables and you can Read/Write to these Variables for any purpose.

## Creating Variables
To create a new variable, you need to create a new class inherited from `Variable<TValue>`. For example:
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

Then you can add this variable to your agent's blackboard by going to the **Blackboard Tab**, select the variable type, give it a name and then click the **Create** button:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Blackboard/add-variable.png|center|400]]


## Referencing Variables

And to reference the variable you just created, you need to declare a `VariableReference<Type>`. For example:
- **Action**:
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
- **Input Normalization**:
	```cs
    public class DivideByMaxValueNormalizationFloat : DivideByMaxValueNormalization<float>
    {
	    public VariableReference<TValue> MaxValue;
	    
        protected override float OnCalculateNormalizedInput(float rawInput, InputContext context)
        {
            if (MaxValue == 0.0f) return 0.0f;
            return rawInput / MaxValue;
        }
    }
	```


Then select the variable from this dropdown menu in the Editor:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/Blackboard/reference-variable.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/Blackboard/reference-variable.png]]



## Built-in Variables
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