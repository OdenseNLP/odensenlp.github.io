---
layout: page
title: Models
lead: Language models and model collections released by OdenseNLP and collaborators.
permalink: /models/
container: wide
wide: true
---

<section class="catalog-grid" aria-label="Model list">
  {% for model in site.data.models %}
    <article class="catalog-card">
      <a class="catalog-card-link" href="{{ model.link }}" target="_blank" rel="noopener">
        <div class="catalog-card-data">
          <div class="catalog-card-data-header">
            <span class="catalog-primary">{{ model.primary }}</span>
            <span class="catalog-status">{{ model.status }}</span>
          </div>
          <p class="catalog-license">{{ model.secondary }}</p>
        </div>
        <div class="catalog-card-body">
          <p class="catalog-kind">{{ model.type | default: "Model" }}</p>
          <h3>{{ model.name }}</h3>
          <p class="catalog-description">{{ model.description }}</p>
          <span class="catalog-read">{{ model.link_label | default: "View model" }} <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
