---
title: FlexMoRE: Efficient modular language models from OdenseNLP
image: /assets/images/news/news-placeholder.svg
image_alt: "OdenseNLP FlexMoRE image"
---

The Allen Institute for AI (Ai2) recently highlighted **FlexMoRE**, a new approach to building more efficient modular language models developed by researchers at OdenseNLP and collaborators at Ordbogen A/S as part of the Danish Foundation Models initiative.

FlexMoRE builds on Ai2's **FlexOlmo** architecture, which makes it possible for different organizations to train specialized language-model experts independently and later combine them into a shared model—without having to pool the underlying training data. This is particularly relevant for settings where useful data cannot easily be shared because of privacy, governance, or proprietary constraints.

A challenge with FlexOlmo is that every expert is itself a full-sized model, making the combined system increasingly expensive as more experts are added. **FlexMoRE addresses this by allowing experts of different sizes.** Instead of representing every specialization with a full model, many experts can be replaced by much smaller low-rank adapters, with the amount of capacity allocated according to what the expert needs to do.

Across 150 model mixtures evaluated on 120 tasks, the researchers found that the optimal expert size depends strongly on the type of task. Reasoning-heavy tasks generally benefit from higher-rank experts, while knowledge-oriented tasks can often use substantially smaller ones. The best FlexMoRE configuration achieved an average score of **47.18**, compared with **45.46** for the full-sized FlexOlmo-style baseline, while using **10.75B instead of 33.27B parameters**—less than one third as many.

The work was carried out by **Annemette Brok Pirchert, Jacob Nielsen, Mogens Henrik From, Lukas Galke Poech, and Peter Schneider-Kamp** as members of OdenseNLP, with Jacob, Mogens and Peter also affiliated with Ordbogen A/S.

FlexMoRE contributes to the broader goal of the **Danish Foundation Models** initiative: developing open language AI that can draw on expertise and data distributed across different institutions while respecting constraints on data sharing. By making modular models substantially smaller, FlexMoRE also moves this approach closer to models that can be deployed on more accessible hardware.

Read more in [Ai2's feature on FlexMoRE](https://allenai.org/blog/flexmore) and in the [FlexMoRE paper: A Flexible Mixture of Rank-heterogeneous Experts for Efficient Federatedly-trained Large Language Models](https://arxiv.org/abs/2602.08818)
