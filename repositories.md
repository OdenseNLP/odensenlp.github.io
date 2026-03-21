---
layout: page
title: Repositories
lead: Open-source code maintained by OdenseNLP. Edit entries in `_data/repositories.yml`.
permalink: /repositories/
---

<section class="resource-list" aria-label="Repository list">
  {% for repo in site.data.repositories %}
    <article class="resource-card">
      <h3>{{ repo.name }}</h3>
      <p class="meta">{{ repo.stack }}</p>
      <p>{{ repo.description }}</p>
      <p><a href="{{ repo.link }}" target="_blank" rel="noopener">Repository</a></p>
    </article>
  {% endfor %}
</section>
