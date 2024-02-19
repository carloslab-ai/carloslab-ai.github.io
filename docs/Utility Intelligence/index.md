---
share: true
comments: false
hidden: true
category: Utility Intelligence
title: Utility Intelligence
---

<p align="center">
	<img src="/Attachments/Card_420-280.png"></img>
</p>

# Documentation
It will be coming soon. Currently, I'm writing the documentation for it. In the meantime, please check the demos and watch the videos below first. If you don't understand anything, you can ask me directly on Discord.

# Video Resources

1. [Architecture Tricks: Managing Behaviors in Time, Space, and Depth](https://www.gdcvault.com/play/1018040/Architecture-Tricks-Managing-Behaviors-in) (From 33:30)
2. [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI)


# FAQ

## How to run the demos in URP and HDRP
The demos are created using Built-In Render Pipeline, so if you are using URP or HDRP, please convert all materials to the target pipeline first.
### URP
1. Open **Render Pipeline Converter** (Window -> Rendering -> Render Pipeline Converter)
2. Tick **Material Upgrade**
3. Click **Initialize and Converter** button.

### HDRP
1. Open **HDRP Wizard** (Window -> Rendering -> HDRP Wizard)
2. Click **Convert All Built-In Materials to HDRP**

## How to update Utility Intelligence
To update **Utility Intelligence** you just need to do the following:
- Backup your project.
- Remove the following folders:
	- CarlosLab/Common
	- CarlosLab/AI
	- CarlosLab/UtilityIntelligence
- Re-import **Utility Intelligence** package

---
<p align="center">
If you like this plugin, please support me by leaving a 5-star review on <a href="https://assetstore.unity.com/packages/slug/276632">the Unity Asset Store</a>. Thank you!😁
	<br><a href="https://assetstore.unity.com/packages/slug/276632"><img width= '30%' height='30%'  src="/Attachments/unity-asset-store.png" title="Unity Asset Store"></img></a>
</p>