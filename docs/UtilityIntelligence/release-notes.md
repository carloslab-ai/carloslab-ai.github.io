---
share: true
title: Release Notes
---

## Upgrade Guide

To upgrade **Utility Intelligence** you just need to do the following:
1. Backup your project
2. Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/UtilityIntelligence
3. Re-import **Utility Intelligence** package

## 1.0.1
<b style="font-size: 30px">Added</b>
- Consideration Benchmarks
- InfluenceCurve Benchmarks

<b style="font-size: 30px">Changed</b>
- Select the first decision maker if all decision makers return a score of 0.

<b style="font-size: 30px">Fixed</b>
- Fixed the issue where the state of a decision maker was incorrect when exiting/entering.
- Fixed the issue where the Editor did not select the correct decision when adding or removing decision makers, decisions, considerations.

## 1.0.0
First release