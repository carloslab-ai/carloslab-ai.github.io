---
share: true
title: Editor Window
category: Utility Intelligence
---

# Utility Intelligence Editor

## Opening the Editor Window

There are two ways to open the Utility Intelligence Editor:
1. Double-click on a [[UtilityIntelligence/UtilityWorld/utility-agent#Utility Intelligence Asset|Utility Intelligence Asset]] in the **Project Window**
2. Select **Tools -> Carlos Lab -> Utility Intelligence -> Editor Window**, and then click on a Utility Intelligence Asset in the **Project Window**
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/open-editor-window.png|500]]


## Toolbar

### File Menu
- `Import Data`: Import the **Intelligence Data** from a JSON file.
- `Export Data`: Export the **Intelligence Data** to a JSON file.
- `Show Data`: Show the **Intelligence Data** in JSON format.
- `Clear Data`: Clear all the **Intelligence Data**.

With the File Menu Toolbar, you can edit the **Intelligence Data** directly in JSON format using your Text Editor, then import it into the Intelligence Asset:

![[Attachments/UtilityIntelligence/Animations/JSONEditing.gif|Attachments/UtilityIntelligence/Animations/JSONEditing.gif]]

## Tabs

### Intelligence Tab

In **Intelligence Tab**, you can add new [[UtilityIntelligence/UtilityIntelligence/decision-makers|Decision Makers]], [[UtilityIntelligence/UtilityIntelligence/decisions|Decisions]], [[UtilityIntelligence/UtilityIntelligence/considerations|Considerations]] *as many as you want*

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/agent-tab.png|Attachments/UtilityIntelligence/Documentation/UtilityAgent/UtilityAgentEditor/agent-tab.png]]

#### Status Preview

Besides that, you can preview the status of multiple components for any changes, such as inputs, and response curves, **right in the Editor without needing to play** the game. For example:
- The score and status of each consideration, indicating which considerations are executed and discarded.
- The score and status of each decision, indicating which decision is chosen based on the current inputs, normalizations, and response curves.

I believe this feature will save a lot of your time while designing AIs for your games. 

![[Attachments/UtilityIntelligence/Animations/StatusPreview.gif|Attachments/UtilityIntelligence/Animations/StatusPreview.gif]]

#### Runtime Status

Additionally, you can view the current status of multiple components during runtime. It is similar to Status Preview but includes additional runtime information, such as the **best target** for each decision, and the **current status** of each task.

![[Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif|Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif]]

#### Runtime Editing

Furthermore, you can modify AI behavior during runtime for testing purposes without needing to replay the game.

![[Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif|Attachments/UtilityIntelligence/Animations/RuntimeEditing.gif]]


### Target Filter Tab

In **Target Filter Tab**, you can add new target filters to filter targets for each decision:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/target-filter-tab.png|center|400]]

### Consideration Tab

In **Consideration Tab**, you can add new considerations and select the input, the normalization and the response curve for your considerations. Besides that, you can check how they affect the consideration score by changing them:

![[Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif|Attachments/UtilityIntelligence/Animations/ConsiderationEditor.gif]]

### Input Tab

In **Input Tab**, you can add as many [[UtilityIntelligence/UtilityIntelligence/considerations#Inputs|inputs]] as you want to the current agent:

![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/input-tab.png|center|400]]

> [!TIP]
> You can modify the input values in the editor and observe how these changes affect the status of considerations and decisions. For further details, read [[#Status Preview]]

For example, in our demos, if you set the input values as follows:
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/status-preview_set-inputs.png|center|450]]

Then you will notice that the decision: **MoveToEnemy** is selected in the **Intelligence Tab**. This means you can determine which decision will be chosen based on the current input values without needing to play your game. Therefore, you will have more time to design your AIs.
![[Attachments/UtilityIntelligence/Documentation/UtilityIntelligence/EditorWindow/status-preview_decision-selection.png]]

### Blackboard Tab

In **Blackboard Tab**, you can add variables to share information between multiple components within the agent, such as target filters, tasks, and inputs.

![[Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif|Attachments/UtilityIntelligence/Animations/BlackboardVariables.gif]]