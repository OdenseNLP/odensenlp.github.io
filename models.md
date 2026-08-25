---
layout: page
title: Models
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
            <span class="catalog-primary">{{ model.languages }}</span>
            {% if model.collection or model.dfm %}
              <span class="catalog-status">
                {% if model.collection %}Collection{% endif %}{% if model.collection and model.dfm %} · {% endif %}{% if model.dfm %}DFM{% endif %}
              </span>
            {% endif %}
          </div>
        </div>
        <div class="catalog-card-body">
          <h3>{{ model.name }}</h3>
          <p class="catalog-description">{{ model.description }}</p>
          <span class="catalog-read">{{ model.link_label | default: "View model" }} <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
