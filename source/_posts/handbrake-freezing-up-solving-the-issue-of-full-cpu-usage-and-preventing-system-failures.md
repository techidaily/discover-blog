---
title: "Handbrake Freezing Up: Solving the Issue of Full CPU Usage and Preventing System Failures"
date: 2024-08-24 23:57:22
updated: 2024-08-27 11:39:40
categories:
  - macxdvd
thumbnail: https://thmb.techidaily.com/0e72a3a0b1e0fbcb9ebe861989e8ef2804120ce5c4aff1602144d59f4707b3ef.jpg
---

## Handbrake Freezing Up: Solving the Issue of Full CPU Usage and Preventing System Failures

[![macx video converter pro icon](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/icon11.png)](https://tools.techidaily.com/macxdvd/products/)

* [MacX Video Converter Pro](https://tools.techidaily.com/macxdvd/products/)
* [Guide](https://tools.techidaily.com/macxdvd/products/)
* [Support](https://tools.techidaily.com/macxdvd/products/)
* [Free Download](https://tools.techidaily.com/macxdvd/products/)



![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/icon7.png) [Home](https://tools.techidaily.com/macxdvd/products/) \> [Video](https://tools.techidaily.com/macxdvd/products/) \> [software review](https://tools.techidaily.com/macxdvd/products/) \> Handbrake 100% CPU Usage

## \[Fixed\] Handbrake is Using 100% CPU and System Overheats/Crashes



_Handbrake is using 100% CPU and overheats the computer? You can limit the Handbrake CPU usage to free more CPU for other tasks and reduce the system temperature._ 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/icon6.png) By [Candice Liu](https://tools.techidaily.com/macxdvd/products/) ｜Last updated on January 25, 2022 

* [![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/share-fa.jpg)](https://www.facebook.com/sharer/sharer.php?u=https://www.macxdvd.com/mac-dvd-video-converter-how-to/handbrake-high-cpu-usage.htm)
* [![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/share-tw.jpg)](https://twitter.com/intent/tweet?url=https://www.macxdvd.com/mac-dvd-video-converter-how-to/handbrake-high-cpu-usage.htm)
* [![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/share-email.jpg)](https://www.macxdvd.com/mac-dvd-video-converter-how-to/mailto:info@example.com?&subject=&body=https://www.macxdvd.com/mac-dvd-video-converter-how-to/handbrake-high-cpu-usage.htm)
* [![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/share-in.jpg)](https://www.linkedin.com/shareArticle?mini=true&url=https://www.macxdvd.com/mac-dvd-video-converter-how-to/handbrake-high-cpu-usage.htm&title=&summary=https://www.macxdvd.com/mac-dvd-video-converter-how-to/handbrake-high-cpu-usage.htm&source=)

_I’m using Handbrake to convert some 4K videos to H.265 files but Handbrake is overheating my CPU and causing the computer to freeze and crash. I want to limit the Handbrake CPU usage when using x265 so I can use my device while encoding and for temp reasons. How can I do that?_

Handbrake is using too much CPU, like 100% CPU during the video encoding. This is good as Handbrake will run all cores of a CPU at 100% usage at full throttle for faster video encoding. However, this is not always good. In some cases, the high Handbrake CPU usage leads to high temperature and crashes on Mac or PC. This problem happens more frequently when using x265 encoders. How to fix Handbrake high CPU temp/usage? How to limit Handbrake CPU usage on Mac and Windows for other work? 

![Handbrake is using too much CPU on Mac](https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/hb-high-cpu.jpg) 

Handbrake high CPU usage/temp on Mac

## Table of Contents

* [1\. Limit Handbrake CPU Usage](https://tools.techidaily.com/macxdvd/products/)
* [2\. Change HandBrake CPU Priority](https://tools.techidaily.com/macxdvd/products/)
* [3\. Enable GPU Hardware Acceleration](https://tools.techidaily.com/macxdvd/products/)

## 1\. Limit Handbrake CPU Usage 

While Handbrake video encoding is very CPU intensive, there are several settings to tell Handbrake to use fewer CPU cores. Here is how to limit the CPU usage in Handbrake:

1. Open Handbrake, add the source video or DVD to convert. Select all the settings for the convert and then click the Video tab and find the Advanced Options (Windows) or Additional Options (macOS).
2. Then add the following text to the end of the entry in the box at bottom of advance settings: _\-x threads=1_ to let Handbrake use one CPU thread during the encoding.
3. You can also use the _\--encoder-preset=veryslow_ to help improve the Handbrake high CPU usage and reduce the CPU heat while keeping good output quality.
4. If the threads settings won't work, also try to add "pools=x" to "Advanced Options" under the "Video" tab.

![Limit Handbrake CPU Usage](https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/handbrake-cpu-limit.jpg) 

Limit Handbrake CPU Usage

On Windows PC, you can also force Handbrake to use one or more specific CPU cores by changing the affinity in the Task Manager. Below are the simple steps: 

1. When Handbrake is running, right-click on the Windows taskbar and open Task Manager.
2. When the Task Manager opens, click on the Details tab and scroll down to Handbrake.exe.
3. Right-click on the Handbrake application and select Set Affinity.
 You will then see all the CPU cores you can use for Handbrake. Check or disable any CPU cores you'd like. 

![why does handbrake use so much cpu](https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/handbrake-cpu-pc.jpg) 

Change Handbrake CPU Affinity 

## 2\. Change HandBrake CPU Priority 

On Windows, Handbrake allows you to set the CPU priority to avoid Handbrake high CPU usage and computer freezes/crashes when you need to handle other tasks. Here is how: 

1. Open Handbrake and click the Preferences and choose Tools.
2. Go to the Advanced tab under the Preference Tools window and find the Priority Level.
3. Open the dropdown menu and set the Priority Level to Below Normal or Low. Then Handbrake video encoding will be given less CPU when there are other tasks in progress.

![Handbrake is using too much CPU](https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/hb-cpu-priority.jpg) 

Change HandBrake CPU Priority 

## 3\. Enable GPU Hardware Acceleration 

If you select a profile that is using hardware encoding with a supported hardware encoder, the video conversion will be handled by the GPU and the CPU will be released. Thus there will be no Handbrake high CPU usage, overheating, or system crashes. GPU hardware encoding is especially important for H.265 encoding. However, your computer must have the supported hardware. If your Mac or PC comes with no compatible hardware, the video decoding, encoding, metadata processing, remuxing, commercial removal, etc. are purely CPU-intensive tasks. 

But take into account that CPU encoding is always better in quality and smaller in size. Check[Handbrake GPU acceleration >>](https://tools.techidaily.com/macxdvd/products/)

1. Open Handbrake, add the source video or DVD to convert.
2. Click Video and open the Video Encoder dropdown menu. If there is hardware acceleration support on your Mac or PC, you will see GPU H.264/H.265 encoders available.
3. Select a GPU encoder for the conversion and Start.

![Handbrake using 100% CPU](https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/hb-gpu.jpg) 

Choose GPU encoders

**Your computer is inadequate for the GPU conversion? Try [MacX Video Converter Pro](https://tools.techidaily.com/macxdvd/products/), a more powerful video converter than Handbrake.** 

It supports Intel® QSV, Nvidia® (CUDA/NVENC) and AMD to offer 5X faster converting speed; If GPU hardware acceleration is not available, it will apply Hyper-Threading and Multi-Core to speed up the 4K/HD video encoding process. No CPU overheating or crashes. 

[Download for Mac](https://tools.techidaily.com/macxdvd/products/) [Download for PC](https://tools.techidaily.com/macxdvd/products/) 



Related Articles

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic7.jpg)

[How does Hardware Encoding Affect on Video Processing Speed?](https://tools.techidaily.com/macxdvd/products/) 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic6.jpg)

[Does Handbrake Support NVENC? How to Use NVENC Encoder?](https://tools.techidaily.com/macxdvd/products/) 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic5.jpg)

[Fastest Hardware Accelerated Video Converter Free Download](https://tools.techidaily.com/macxdvd/products/) 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic4.jpg)

[Install HandBrake Libdvdcss on PC/Mac to Rip Protected DVDs](https://tools.techidaily.com/macxdvd/products/) 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic3.jpg)

[Does Handbrake Run on M1 Mac? Fixes Handbrake Errors on M1 Macs](https://tools.techidaily.com/macxdvd/products/) 

![](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../image-style/new-seo/pic2.jpg)

[Does Handbrake Support GPU Acceleration?](https://tools.techidaily.com/macxdvd/products/) 



![Digiarty Software](https://www.macxdvd.com/mac-dvd-video-converter-how-to/../icon/logo.png) 

Digiarty Software, Inc. (MacXDVD) is a leader in delivering stable multimedia software applications for worldwide users since its establishment in 2006.

### Hot Products

* [MacX DVD Ripper Pro](https://tools.techidaily.com/macxdvd/products/)
* [MacX Video Converter Pro](https://tools.techidaily.com/macxdvd/products/)
* [MacX MediaTrans](https://tools.techidaily.com/macxdvd/products/)

### Tips and Tricks

* [DVD Topics >>](https://tools.techidaily.com/macxdvd/products/)
* [Video Solutions >>](https://tools.techidaily.com/macxdvd/products/)
* [Data Transfer >>](https://tools.techidaily.com/macxdvd/products/)
* [Online Video >>](https://tools.techidaily.com/macxdvd/products/)
* [Hot Topics >>](https://tools.techidaily.com/macxdvd/products/)

### Company

* [About Us >>](https://tools.techidaily.com/macxdvd/products/)
* [Tech & Sales FAQ >>](https://tools.techidaily.com/macxdvd/products/)
* [User Guides >>](https://tools.techidaily.com/macxdvd/products/)
* [Contact Us >>](https://tools.techidaily.com/macxdvd/products/)
* [Partner >>](https://tools.techidaily.com/macxdvd/products/)



[Home](https://tools.techidaily.com/macxdvd/products/) | [About](https://tools.techidaily.com/macxdvd/products/) | [Privacy Policy](https://tools.techidaily.com/macxdvd/products/) | [Terms and Conditions](https://tools.techidaily.com/macxdvd/products/) | [License Agreement](https://tools.techidaily.com/macxdvd/products/) | [Resource](https://tools.techidaily.com/macxdvd/products/) | [News](https://tools.techidaily.com/macxdvd/products/) | [Contact Us](https://tools.techidaily.com/macxdvd/products/)

Copyright © 2024 Digiarty Software, Inc (MacXDVD). All rights reserved

Apple, the Apple logo, Mac, iPhone, iPad, iPod and iTunes are trademarks of Apple Inc, registered in the U.S. and other countries.  
Digiarty Software is not developed by or affiliated with Apple Inc.

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>



<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
