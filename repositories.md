---
layout: page
title: Repositories
permalink: /repositories/
container: wide
wide: true
---

<section class="catalog-grid" aria-label="Repository list">
  {% for repo in site.data.repositories %}
    <article class="catalog-card">
      <a class="catalog-card-link" href="{{ repo.link }}" target="_blank" rel="noopener">
        <div class="catalog-card-body">
          <h3>{{ repo.name }}</h3>
          <p class="catalog-description">{{ repo.description }}</p>
          <span class="catalog-read">View repository <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
