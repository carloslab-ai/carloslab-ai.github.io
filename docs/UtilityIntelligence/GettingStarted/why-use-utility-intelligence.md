---
share: true
title: Why use Utility Intelligence?
description: Why should you choose Utility Intelligence over other Utility AI solutions?
category: Utility Intelligence
---

Basically, I believe that **Utility Intelligence** is more user-friendly and has more robust features than other Utility AI solutions. If you are not familiar with Utility AI yet, or you need a robust Utility AI Framework, then **Utility Intelligence** is a good choice. Here are some unique features that make it different from other Utility AI solutions:
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
3. Besides that, you can view additional runtime information such as the **best target** for each decision, and the **current status** of each task at runtime. 
![[Attachments/UtilityIntelligence/Animations/RuntimeStatus.gif]]
4. The **Intelligence Data** is stored in **JSON** format, making it easy to read and allowing you to edit it using your Text Editor.
	![[Attachments/UtilityIntelligence/Animations/JSONEditing.gif]]
5. **Utility Intelligence** provides many tools to reduce [[UtilityIntelligence/UtilityIntelligence/decisions#Oscillation between decision-target pairs|the oscillation between nearly equal decision-target pairs]] that other Utility AI solutions may not have.
	- [[UtilityIntelligence/UtilityIntelligence/decisions#Momentum Bonus|Momentum Bonus]]
	- [[UtilityIntelligence/UtilityIntelligence/decisions#Decision Weight|Decision Weight]]
	- [[UtilityIntelligence/UtilityIntelligence/action-tasks#Keep Running Until Finished|Keep Running The Decision Until The Action List Finished]] 