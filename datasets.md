---
layout: page
title: Datasets
lead: Open and controlled-access datasets released or maintained by OdenseNLP.
permalink: /datasets/
---

<section class="resource-list" aria-label="Dataset list">
  {% for dataset in site.data.datasets %}
    <article class="resource-card">
      <h3>{{ dataset.name }}</h3>
      <p class="meta">{{ dataset.languages }} · {{ dataset.license }} · {{ dataset.status }}</p>
      <p>{{ dataset.description }}</p>
      <p><a href="{{ dataset.link }}" target="_blank" rel="noopener">Dataset page</a></p>
    </article>
  {% endfor %}
</section>
