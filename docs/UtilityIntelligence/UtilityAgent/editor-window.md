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

![Attachments/UtilityIntelligence/Animations/JSONEditing.gif](../Attachments/Animations/JSONEditing.gif)

# Utility Agent Editor

## Agent Tab

In **Agent Tab**, you can add new Decision Makers, Decisions, Considerations *as many as you want*:

![Attachments/UtilityIntelligence/Documentation/UtilityAgent/UtilityAgentEditor/agent-tab.png](Attachments/UtilityAgentEditor/agent-tab.png)

### Status Preview

Besides that, you can preview the status of multiple components for any changes, such as inputs, and response curves, **right in the Editor without needing to play** the game. For example:
- The score and status of each consideration, indicating which considerations are executed and discarded.
- The score and status of each decision, indicating which decision is chosen based on the current inputs, normalizations, and response curves.

I believe this feature will save a lot of your time while designing AIs for your games. 

![Attachments/UtilityIntelligence/Animations/StatusPreview.gif](../Attachments/Animations/StatusPreview.gif)

### Runtime Status

Additionally, you can view the current status of multiple components during runtime. It is similar to Status Preview but includes additional runtime information, such as the **best target** for each decision, and the **current status** of each task.

![Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif](../Attachments/Animations/RuntimeStatus.gif)

### Runtime Editing

Moreover, you can modify AI behavior during runtime for testing purposes without needing to replay the game.

![Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif](../Attachments/Animations/RuntimeEditing.gif)


## Target Filter Tab

In **Target Filter Tab**, you can add new target filters to filter targets for each decision:

![center|400](Attachments/UtilityAgentEditor/target-filter-tab.png)

## Consideration Tab

In **Consideration Tab**, you can add new considerations and select the input, the normalization and the response curve for your considerations. Besides that, you can check how they affect the consideration score by changing them:

![Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif](../Attachments/Animations/ConsiderationEditor.gif)

## Input Tab

In **Input Tab**, you can add as many Inputs as you want to the current agent:

![center|400](Attachments/UtilityAgentEditor/input-tab.png)

## Blackboard Tab

In **Blackboard Tab**, you can add any type of Variable you want to share information between multiple components in your Agent:

![Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif](../Attachments/Animations/BlackboardVariables.gif)