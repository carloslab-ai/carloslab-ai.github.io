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


## 1.0.3
**Added**
- Add [[UtilityIntelligence/UtilityIntelligence/decisions#Momentum Bonus|Momentum Bonus]] to reduce the oscillation between the decision-target pairs

## 1.0.2
**Added**
- A toggle to enable/disable [[UtilityIntelligence/UtilityIntelligence/considerations#Compensation Factor|Compensation Factor]]

## 1.0.1
**Added**
- Consideration Benchmarks
- InfluenceCurve Benchmarks

**Changed**
- Select the first decision maker if all decision makers return a score of 0.

**Fixed**
- Fixed the issue where the state of a decision maker was incorrect when exiting/entering.
- Fixed the issue where the Editor did not select the correct decision when adding or removing decision makers, decisions and considerations.

## 1.0.0
First release