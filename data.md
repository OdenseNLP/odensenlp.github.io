---
layout: page
title: Data
permalink: /data/
container: wide
wide: true
---

<section class="data-section" id="datasets" aria-labelledby="datasets-heading">
  <h2 id="datasets-heading">Datasets</h2>
  {% if site.data.datasets and site.data.datasets != empty %}
    <div class="catalog-grid" aria-label="Dataset list">
      {% for dataset in site.data.datasets %}
        <article class="catalog-card">
          <a class="catalog-card-link" href="{{ dataset.link }}" target="_blank" rel="noopener">
            <div class="catalog-card-body">
              <h3>{{ dataset.name }}</h3>
              <p class="catalog-description">{{ dataset.description }}</p>
              <span class="catalog-read">{{ dataset.link_label | default: "View dataset" }} <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>Datasets will be added here soon.</p>
  {% endif %}
</section>

<section class="data-section" id="benchmarks" aria-labelledby="benchmarks-heading">
  <h2 id="benchmarks-heading">Benchmarks</h2>
  {% if site.data.benchmarks and site.data.benchmarks != empty %}
    <div class="catalog-grid" aria-label="Benchmark list">
      {% for benchmark in site.data.benchmarks %}
        <article class="catalog-card">
          <a class="catalog-card-link" href="{{ benchmark.link }}" target="_blank" rel="noopener">
            <div class="catalog-card-body">
              <h3>{{ benchmark.name }}</h3>
              <p class="catalog-description">{{ benchmark.description }}</p>
              <span class="catalog-read">View benchmark <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>Benchmarks will be added here soon.</p>
  {% endif %}
</section>
