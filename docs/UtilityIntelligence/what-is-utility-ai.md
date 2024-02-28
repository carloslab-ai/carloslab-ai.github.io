---
share: true
title: What is Utility AI
---

Decision-making is the core of every AI system. Various methods exist for decision-making, such as **Behavior Trees**, **Finite State Machines**, etc. Among these, **Utility AI** is one of the most robust and powerful systems for decision-making in game programming. The core concept of **Utility AI** is that every decision of an agent is assigned a **score** (also known as **utility**). And the winner is the decision with the **highest utility**.

![[../Attachments/UtilityIntelligence/Documenntation/utility-based-ai.png|center|550]]

Here's how a Utility-Based AI works step by step:
1. Evaluating Decisions:
- The AI character evaluates all of its decisions based on multiple factors like the enemy health, distance to target, available resources, etc.
2. Assigning Utilities:
- Based on the evaluation, each decision is assigned a score representing its **utility**.
- This score reflects how "good" the decision is in the current context.
3. Making Decisions:
- The decision with the **highest utility score** is chosen for the AI character to perform.
- This ensures the NPC prioritizes decisions that are most beneficial for the current situation.