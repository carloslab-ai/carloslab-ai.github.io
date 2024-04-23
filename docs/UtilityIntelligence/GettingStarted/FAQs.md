---
title: FAQs
---

## Which Unity version is supported?
Currently, the supported Unity version is 2023.2.3f1 or higher. You can check the supported Unity version here in the Asset Store:
![[Attachments/UtilityIntelligence/Documentation/GettingStarted/supported-version.png|350]]

## What are the advantages of Utility Intelligence compared to other Utility AI solutions?
Basically, I believe that **Utility Intelligence** is more user-friendly than other Utility AI solutions. And if you are not familiar with Utility AI yet, then **Utility Intelligence** is a good choice. Here are some features that make it different from other solutions:
1. Utility Intelligence has its own **ResponseCurveView** for representing the **Response Curve**, while other solutions usually use Unity's **AnimationCurveView**, which is **primarily designed for animations**, so it will not be a good fit to represent response curves.
	- For example, if the value of `[input, score]` is `[0.43, 0.70]`, we will need some time to visualize its position in the **AnimationCurveView**. 
	![[Attachments/UtilityIntelligence/Documentation/GettingStarted/animation-curve-view.png]]
	- I hate it so I created my own **ResponseCurveView** to represent response curves. In my **ResponseCurveView**, you can see the position of `[input, score]` immediately without needing to visualize it in your head. It's very intuitive, right? 
	![[Attachments/UtilityIntelligence/Documentation/GettingStarted/response-curve-view.png|200]]
	- Another thing I don't like about **AnimationCurve** is that my hands aren't as flexible as those of artists, so it's quite difficult for me to adjust the keyframes to generate the curve I want. Therefore, in my **ResponseCurveEditor**, I just need to change its parameters to generate the curve:
	![[Attachments/UtilityIntelligence/Animations/ResponseCurveEditor.gif|300]]
2. **Utility Intelligence** offers a robust feature to preview which decision will be selected, which considerations are executed and discarded when any changes occur **in the Editor**, such as inputs and response curves **without needing to play your game**. 
	![[Attachments/UtilityIntelligence/Animations/StatusPreview.gif]] 
	You can read more about it here:
	- [[UtilityIntelligence/UtilityIntelligence/editor-window#Status Preview|Status Preview]]
	- [[UtilityIntelligence/UtilityIntelligence/editor-window#Input Tab|Input Tab]]
3. The **Intelligence Data** is stored in **JSON** format, making it easy to read and allowing you to edit it using your Text Editor.
	![[Attachments/UtilityIntelligence/Animations/JSONEditing.gif]]

## How to get support?
Currently, there are three ways to get support:

1. Join my community and post your questions there: [Join us on Discord](https://discord.gg/vRFEK5uE3f).
2. Post your questions on the Unity forum thread: [Utility Intelligence - A user-friendly Utility AI Framework](https://forum.unity.com/threads/utility-intelligence-a-user-friendly-utility-ai-framework.1547540/).
3. Send an email to carloslab.customer@gmail.com, and don't forget to include your **Invoice Number**.

## How to support me?
In case you **find** this plugin more **useful** than its **price**, especially when it's **on sale** and you want to **support** me, currently, there are two ways to do so:
1. Leave a **5-star review** on the [Unity Asset Store](https://assetstore.unity.com/packages/slug/276632).
2. Buy me **a coffee** at [Ko-fi](https://ko-fi.com/carlos_ai).

Thank you so much for your support! 🥰 
It **allows** me to **dedicate more time** to developing my plugins.






