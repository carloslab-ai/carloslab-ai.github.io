---
share: true
title: Decision Makers
category: Utility Intelligence
---

In **Utility Intelligence**, a decision maker contains a list of decisions, and the responsibility of each decision maker is to select the best decision from them based on the current situation. Additionally, each utility agent can contain multiple decision makers.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/DecisionMakers/decision-maker.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/DecisionMakers/decision-maker.png]]

## Understanding how the decision-making process works

Here's how the **decision-making process** of a utility agent works:
1. For each decision maker, the utility agent calculates the scores of all attached decisions and selects the best decision. 
2. Afterwards, the utiltiy agent compares the scores of the best decisions from each decision maker with each other, and the winner is the decision with the highest score.

## Creating Decision Makers

To create a decision maker, you need to go to the [[UtilityIntelligence/UtilityIntelligence/editor-window#Intelligence Tab|Intelligence Tab]], fill in the **Name** Field, and then click the **Create** button:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/DecisionMakers/create-decision-maker.png|center|400]]

After creating a decision maker, you can add [[UtilityIntelligence/UtilityIntelligence/decisions|decisions]] to it and monitor which decision will be chosen as the best one based on the current situation.


## Decision Maker's Statuses

At runtime, decision makers have 2 statuses:
<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Running</p>
	<br>
	<div class="cl-rect-border" style="width: 200px; height: 20px; vertical-align: middle; background-color: rgba(0, 0, 0,0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Inactive</p>
</div>

At editor time, decision makers have 2 statuses:
<div>
	<div style="width: 200px; height: 20px; vertical-align: middle; background-color: rgb(0, 255, 255); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Selected</p>
	<br>
	<div class="cl-rect-border" style="width: 200px; height: 20px; vertical-align: middle; background-color: rgba(0, 0, 0,0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Unselected</p>
</div>