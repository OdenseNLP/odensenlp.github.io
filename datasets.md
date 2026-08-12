---
layout: page
title: Datasets
lead: Open datasets released or maintained by OdenseNLP.
permalink: /datasets/
container: wide
wide: true
---

{% if site.data.datasets and site.data.datasets != empty %}
<section class="catalog-grid" aria-label="Dataset list">
  {% for dataset in site.data.datasets %}
    <article class="catalog-card">
      <a class="catalog-card-link" href="{{ dataset.link }}" target="_blank" rel="noopener">
        <div class="catalog-card-data">
          <div class="catalog-card-data-header">
            <span class="catalog-primary">{{ dataset.languages }}</span>
            <span class="catalog-status">{{ dataset.status }}</span>
          </div>
          <p class="catalog-license">{{ dataset.license }}</p>
        </div>
        <div class="catalog-card-body">
          <p class="catalog-kind">{{ dataset.type | default: "Dataset" }}</p>
          <h3>{{ dataset.name }}</h3>
          <p class="catalog-description">{{ dataset.description }}</p>
          <span class="catalog-read">{{ dataset.link_label | default: "View dataset" }} <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
{% else %}
<p>Datasets will be added here soon.</p>
{% endif %}
