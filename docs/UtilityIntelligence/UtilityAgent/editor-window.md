---
share: true
title: Editor Window
category: Utility Intelligence
---

# Toolbar

## File Menu
- `Import Data`: Import the AgentModel data from a JSON file.
- `Export Data`: Export the AgentModel data to a JSON file.
- `Show Data`: Show the AgentModel data in JSON format.
- `Clear Data`: Clear all the Agent Model data.

With the File Menu Toolbar, you can edit the Agent Model data directly in JSON format using your Text Editor, then import it into the Agent Asset:

![[UtilityIntelligence/Attachments/Animations/JSONEditing.gif|Attachments/UtilityIntelligence/Animations/JSONEditing.gif]]

# Utility Agent Editor

## Agent Tab

In **Agent Tab**, you can add new Decision Makers, Decisions, Considerations *as many as you want*:

![[UtilityIntelligence/UtilityAgent/Attachments/UtilityAgentEditor/agent-tab.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/UtilityAgentEditor/agent-tab.png]]

### Status Preview

Besides that, you can preview the status of multiple components for any changes, such as inputs, and response curves, **right in the Editor without needing to play** the game. For example:
- The score and status of each consideration, indicating which considerations are executed and discarded.
- The score and status of each decision, indicating which decision is chosen based on the current inputs, normalizations, and response curves.

I believe this feature will save a lot of your time while designing AIs for your games. 

![[UtilityIntelligence/Attachments/Animations/StatusPreview.gif|Attachments/UtilityIntelligence/Animations/StatusPreview.gif]]

### Runtime Status

Additionally, you can view the current status of multiple components during runtime. It is similar to Status Preview but includes additional runtime information, such as the **best target** for each decision, and the **current status** of each task.

![[UtilityIntelligence/Attachments/Animations/RuntimeStatus.gif|Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif]]

### Runtime Editing

Moreover, you can modify AI behavior during runtime for testing purposes without needing to replay the game.

![[UtilityIntelligence/Attachments/Animations/RuntimeEditing.gif|Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif]]


## Target Filter Tab

In **Target Filter Tab**, you can add new target filters to filter targets for each decision:

![[UtilityIntelligence/UtilityAgent/Attachments/UtilityAgentEditor/target-filter-tab.png|center|400]]

## Consideration Tab

In **Consideration Tab**, you can add new considerations and select the input, the normalization and the response curve for your considerations. Besides that, you can check how they affect the consideration score by changing them:

![[UtilityIntelligence/Attachments/Animations/ConsiderationEditor.gif|Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif]]

## Input Tab

In **Input Tab**, you can add as many Inputs as you want to the current agent:

![[UtilityIntelligence/UtilityAgent/Attachments/UtilityAgentEditor/input-tab.png|center|400]]

## Blackboard Tab

In **Blackboard Tab**, you can add any type of Variable you want to share information between multiple components in your Agent:

![[UtilityIntelligence/Attachments/Animations/BlackboardVariables.gif|Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif]]