---
layout: page
title: Models
permalink: /models/
container: wide
wide: true
---

<section class="catalog-grid" aria-label="Model list">
  {% for model in site.data.models %}
    <article class="catalog-card model-card">
      <a class="catalog-card-link" href="{{ model.link }}" target="_blank" rel="noopener">
        <div class="catalog-card-data" aria-hidden="true"></div>
        <div class="catalog-card-body">
          <h3>{{ model.name }}</h3>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
