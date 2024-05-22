---
share: true
title: Release Notes
description: The full release notes of Utility Intelligence
---

## Upgrade Guide

To upgrade **Utility Intelligence** you need to do the following:
1. Backup your project
2. Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/UtilityIntelligence
3. Re-import **Utility Intelligence** package

## 1.0.10
**Added**
- Added `GetVariable<TValue>()` function for the Blackboard. You can use this function to retrieve Blackboard variables from other places.
	```cs
	public void TestBlackboard()
	{
		var blackboard = characterFacade.Entity.Intelligence.Blackboard;
	    var sightRadiusVariable = blackboard.GetVariable<float>("SightRadius");
	    sightRadiusVariable.Value = 30;
	}
	```

**Fixed**
- Fixed an issue that caused MomentumBonus to not work at runtime.

## 1.0.9
**Changed**
- In Unity 6, Unity has fixed the bug that prevented DropdownField choices from being nested. Therefore, we've updated our DropdownFields to include nested choices. If you use Unity 6, you will see some DropdownFields that have nested choices like this:
- ![[Attachments/UtilityIntelligence/Documentation/nested-dropdown.png]]

## 1.0.8
**Changed**
- Refactored `Input` and `TargetFilter`.
- [Breaking] Renamed `IsLessThanOrEqualValueNormalization`s to `IsLessThanOrEqualToValueNormalization`s
- [Breaking] Renamed `IsGreaterThanOrEqualValueNormalization`s to `IsGreaterThanOrEqualToValueNormalization`s
> [!CAUTION] Breaking Changes
> Sorry, if you are using `IsGreaterThanOrEqualValueNormalization`s or `IsLessThanOrEqualValueNormalization`s, after upgrading to 1.0.8, you need to edit **Intelligence Data** to update these class names by using [[UtilityIntelligence/UtilityIntelligence/editor-window#File Menu|File Toolbar Menu]].


**Fixed**
- Fixed an issue where the consideration editor did not update properly when removing an input from InputTab.

## 1.0.7

**Fixed**
- Fixed an issue where adding multiple target filters did not work

## 1.0.6
**Added**
- Added Ids for Views

**Fixed**
- Fixed an issue where list items could be renamed to an empty string.
- Fixed an issue where only the selected consideration would update the new input name when renaming an input.
- Fixed issues where only the selected decision would update the new consideration name when renaming a consideration, and the new target filter name when renaming a target filter.

## 1.0.5
**Changed**
- Group these classes under the menu: **AddComponent/CarlosLab**.
	- UtilityWorldController
	- UtilityAgentController
	- UtilityAgentFacade
	- UtilityEntityController
	- UtilityEntityFacade
- Separate the ChargeStations from Environment prefab in demos.

## 1.0.4
**Added**
- Added variable classes to store GameObject and Transform.

**Fixed**
- Fixed an issue where custom variables could not be referenced in the Editor.

## 1.0.3
**Added**
- Added [[UtilityIntelligence/UtilityIntelligence/decisions#Momentum Bonus|Momentum Bonus]] to reduce [[UtilityIntelligence/UtilityIntelligence/decisions#Oscillation between decision-target pairs|the oscillation between nearly equal decision-target pairs]].

## 1.0.2
**Added**
- A toggle to enable/disable [[UtilityIntelligence/UtilityIntelligence/considerations#Compensation Factor|Compensation Factor]].

**Changed**
- Removed Consideration Benchmarks.

## 1.0.1
**Added**
- Consideration Benchmarks.
- InfluenceCurve Benchmarks.

**Changed**
- Select the first decision maker if all decision makers return a score of 0.

**Fixed**
- Fixed the issue where the state of a decision maker was incorrect when exiting/entering.
- Fixed the issue where the Editor did not select the correct decision when adding or removing decision makers, decisions and considerations.

## 1.0.0
First release