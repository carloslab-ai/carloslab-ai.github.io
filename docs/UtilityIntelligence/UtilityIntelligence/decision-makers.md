---
share: true
title: Decision Makers
category: Utility Intelligence
---

In **Utility Intelligence**, a Decision Maker contains a list of decisions, and the responsibility of each Decision Maker is to select the best decision from them based on the current situation. Additionally, each Utility Agent can contain multiple Decision Makers.

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/DecisionMakers/decision-maker.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/DecisionMakers/decision-maker.png]]

## Understanding how Decision-Making Process work?

Here's how the **Decision-Making Process** of a Utility Agent works:
1. For each Decision Maker, the Utility Agent calculates the scores of all attached decisions and selects the best decision. 
2. Afterwards, the Utility Agent compares the scores of the best decisions from each Decision Maker with each other, and the winner is the decision with the highest score.

## Creating Decision Makers

To create a Decision Maker, you need to go to the [[UtilityIntelligence/UtilityIntelligence/editor-window#Intelligence Tab|Intelligence Tab]], fill in the **Name** Field, and then click the **Create** button:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/DecisionMakers/create-decision-maker.png|center|400]]

After creating a decision maker, you can add [[UtilityIntelligence/UtilityIntelligence/decisions|decisions]] to it and monitor which decision will be chosen as the best one based on the current situation.


## Decision Maker's Statuses

At runtime, decision makers have 4 statuses:
<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Running</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(0, 255, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Success</p>
</div>

<div>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 0, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Failed</p>
	<br>
	<div style="width: 200px; height: 20px; margin-top:3px; vertical-align: middle; background-color: rgb(255, 165, 0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Aborted</p>
</div>

At editor time, decision makers only have 2 statuses:
<div>
	<div style="width: 200px; height: 20px; vertical-align: middle; background-color: rgb(0, 255, 255); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Selected</p>
	<br>
	<div style="width: 200px; height: 20px; vertical-align: middle; border: 2px solid white; background-color: rgba(0, 0, 0,0); display: inline-block"></div>
	<p style="display: inline-block">&nbsp;: Unselected</p>
</div>