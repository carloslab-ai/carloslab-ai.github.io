---
share: true
title: Editor Window
---

# Toolbar

## File Menu
- `Import Data`: Import the AgentModel data from a JSON file.
- `Export Data`: Export the AgentModel data to a JSON file.
- `Show Data`: Show the AgentModel data in JSON format.
- `Clear Data`: Clear all the Agent Model data.

With the File Menu Toolbar, you can directly edit the Agent Model data in JSON using your Text Editor, then Import it into the Agent Asset:

![[../Attachments/UtilityIntelligence/Animations/JSONEditing.gif|../Attachments/UtilityIntelligence/Animations/JSONEditing.gif]]

# Tabs

## Agent Tab

In **Agent Tab**, you can add new Decision Makers, Decisions, Considerations *as many as you want*:

![[../Attachments/UtilityIntelligence/Documenntation/EditorWindow/agent-tab.png|../Attachments/UtilityIntelligence/Documenntation/EditorWindow/agent-tab.png]]

### Score Preview

Besides that, you can preview the scores of all decisions, considerations and which decision will be chosen if there are any changes (health, energy, distance to the enemy) **right in the Editor without having to play your game** like with other AI solutions. I believe this feature will save a lot of your time while designing AIs for your games. 

![[../Attachments/UtilityIntelligence/Animations/ScorePreview.gif|../Attachments/UtilityIntelligence/Animations/ScorePreview.gif]]

### Runtime Status

At runtime, you can view the best decision, the best target, decision scores, consideration scores, input values, which decision is running and whether it is successful or not.

![[../Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif|../Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif]]

### Runtime Editing

Moreover, you can modify your AI behavior during runtime for testing without having to replay your game.

![[../Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif|../Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif]]

## Consideration Tab

In **Consideration Tab**, you can add new considerations and select the input, the normalization and the response curve for your considerations. Besides that, you can check how they affect the consideration score by changing them:

![[../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif|../Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif]]

## Input Tab

In **Input Tab**, you can add as many Inputs as you want to the current Agent:

![[../Attachments/UtilityIntelligence/Documenntation/Considerations/add-input.png|center|400]]

## Blackboard Tab

In **Blackboard Tab**, you can add any type of Variable you want to share information between multiple components in your Agent:

![[../Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif|../Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif]]

---
<p align="center">
	If you find this plugin <b>helpful</b>, please consider supporting it by leaving a <b>5-star review</b> on the Asset Store. Your <b>positive feedback</b> allows me to <b>dedicate more time</b> to its development. 
	<br>Thank you so much! 🥰
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Leave it a 5-star review"></img></a>
</p>