# Investigating-the-Queueing-Side-Channel-in-Modern-Web-Browsers

Project Description: "Queues are widely used to enable resource sharing in modern computer systems.  Rather than giving each user exclusive access to software or hardware resources, users are asked to submit jobs to a shared queue which then uses a scheduling policy to decide which jobs run at every moment in time. By sharing resources carefully between users, systems can achieve a much higher level of utilization without significantly impacting the performance of each user’s application.  Over the past 50 years, researchers and practitioners alike have turned to queueing theory to enable the design and analysis of efficient shared queues in computer systems. Queueing theory is the mathematical framework that allows for a rigorous, detailed prediction of the queueing performance for a wide range of systems. We observe that this queueing theoretical understanding is a double-edged sword regarding security and privacy.  While queueing theory is great at predicting queueing performance based on the workload characteristics of various system users, it can potentially be exploited by an attacker to do the opposite --- to infer the characteristics of other jobs in the system based on the queueing performance the attacker observes.  To test our observation, we will investigate an open-source web browser.  Here, the application promises the user that there is isolation between browsing tabs but uses a shared queue to process graphics rendering requests.  We aim to understand how much information is being leaked by this queueing side channel.  Specifically, if an attacker submits rendering jobs periodically and measures the latencies they experience, what can the attacker determine about the content being viewed in other browser tabs?  This exploration will require investigating the source code of the open-source Chromium browser, benchmarking the rendering performance of several different common browsing tasks, and developing a working understanding of basic ideas from queueing theory to evaluate the experimental results."

# Parts of the Repository

UNC-Intel: this file contains:

Two Distribution Histogram Code:
- Distribution Histogram of Regular Response Times Vs. Distribution Histogram of Adversary Response Times
- Distribution Histogram of Regular Services Times Vs. Distribution Histogram of Adversary Response Times



Two Folders: 
- Google Chrome Extension Code V.3.0
- Website Data Collected

One Presentation Titled:
- Investigating the Queueing Side Channel in Modern Web Browsers


