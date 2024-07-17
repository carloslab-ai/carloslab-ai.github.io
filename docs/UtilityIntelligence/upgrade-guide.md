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
If your action scripts inherit from `NavMeshActionTask`, you need to do the following:
1. Create a `NavMeshAgentVariable` in the Blackboard Tab of the Intelligence Editor
2. Select the `NavMeshAgentVariable` in the Action Task Editor.
![[Attachments/UtilityIntelligence/Documentation/UpgradeGuide/NavMeshAgentVariable.png]]
4. Change `NavMeshAgent` to `navMeshAgent` in your action scripts.
5. Inject your `NavMeshAgent` into the blackboard through the `NavMeshAgentVariable`:
	```cs
	private void Start()
	{
	    var blackboard = Entity.Intelligence.Blackboard;
	    if(blackboard.TryGetVariable(BlackboardVariableNames.NavMeshAgent, out NavMeshAgentVariable navMeshAgentVariable))
	        navMeshAgentVariable.Value = navMeshAgent;
	}
	```
