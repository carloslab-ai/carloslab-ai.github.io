---
title: Upgrade Guide
---

## General Upgrade Guide

To upgrade **Utility Intelligence** you need to do the following:
1. Backup your project
2. Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/UtilityIntelligence
3. Re-import **Utility Intelligence** package

## Upgrading from v1.0.x to v1.1.0

There are some breaking changes that you need to fix manually when upgrading from v1.0.x to v1.1.0.

> [!CAUTION] Caution
> These changes may break your project, so please backup you project before starting.



### Intelligence Asset
v1.0.x uses data v1 and v1.1.0 uses data v2. Therefore, you need to update your intelligence assets to data version v2 so that this framework can deserialize them.

1. Update the intelligence data.
	- Select **File -> Show Data** to show the intelligence data.
	- Change `MyDistanceToTargetInput` to `DistanceToTargetInput`.
	- Change `NavMeshMoveTowards` to `MoveToTarget`.
	- Remove all InputNormalizations from all Considerations.
	- Move Decisions from DecisionMakers to the outer scope.
		**Data Structure - v1.0.x**
		```json
		{
		  "$type": "CarlosLab.UtilityIntelligence.UtilityIntelligenceModel",
		  "DecisionMakers": [
			{
		      "$type": "CarlosLab.UtilityIntelligence.DecisionMakerModel",
		      "Id": "6f5616e5-a485-4c3b-9bc4-1eb1f10530fa",
			  "Name": "Warrior",
		      "Decisions": [
				{
				  "$type": "CarlosLab.UtilityIntelligence.DecisionModel",
				  "Id": "a36b4f16-d8d0-4069-94ab-925828eb3c7d",
				  "Name": "MoveToHealthStation",
				  ...
				}
			  ],
			  ...
			}
		  ],
		  ...
		}
		```
		**Data Structure - v1.1.0**
		```json
		{
		  "$type": "CarlosLab.UtilityIntelligence.UtilityIntelligenceModel",
		  "DecisionMakers": [
			{
		      "$type": "CarlosLab.UtilityIntelligence.DecisionMakerModel",
		      "Id": "6f5616e5-a485-4c3b-9bc4-1eb1f10530fa",
			  "Name": "Warrior",
			  ...
			}
		  ],
		  "Decisions": [
			{
		      "$type": "CarlosLab.UtilityIntelligence.DecisionModel",
		      "Id": "a36b4f16-d8d0-4069-94ab-925828eb3c7d",
		      "Name": "MoveToHealthStation",
		      ...
			}
		  ],
		  ...
		}
		```
	- Select **File -> Import Data** to import the new intelligence data to the asset.
2. Create new input normalizations in the Input Normalization Tab.
3. Select the appropriate input normalization for your considerations in the Consideration Tab.
4. Add decisions to your decision makers in the Intelligence Tab.

### Source Code
#### Input
Add the `in` keyword before `InputContext` in the `OnGetRawInput` function.

**1.0.x**
```cs
protected override int OnGetRawInput(InputContext context)
```

**1.1.0**
```cs
protected override int OnGetRawInput(in InputContext context)
```

#### InputNormalization
Change `InputContext` to `in InputNormalizationContext` in the `OnCalculateNormalizedInput` function.

**1.0.x**
```cs
protected override float OnCalculateNormalizedInput(int rawInput, InputContext context)
```

**1.1.0**
```cs
protected override float OnCalculateNormalizedInput(int rawInput, in InputNormalizationContext context)
```

#### NavMeshActionTask
If your action tasks inherit from `NavMeshActionTask`, you need to do the following:
1. Create a `NavMeshAgentVariable` in the Blackboard Tab of the Intelligence Editor.
2. Select the `NavMeshAgentVariable` in the Action Task Editor.
![[Attachments/UtilityIntelligence/Documentation/UpgradeGuide/NavMeshAgentVariable.png]]
4. Change `NavMeshAgent` to `navMeshAgent` in your action tasks.
5. Inject your `NavMeshAgent` into the blackboard through the `NavMeshAgentVariable`:
	```cs
	private void Start()
	{
	    var blackboard = Entity.Intelligence.Blackboard;
	    if(blackboard.TryGetVariable(BlackboardVariableNames.NavMeshAgent, out NavMeshAgentVariable navMeshAgentVariable))
	        navMeshAgentVariable.Value = navMeshAgent;
	}
	```
