---
layout: page
title: Benchmarks
lead: Evaluation benchmarks released or maintained by OdenseNLP.
permalink: /benchmarks/
container: wide
wide: true
---

<section class="catalog-grid" aria-label="Benchmark list">
  {% for benchmark in site.data.benchmarks %}
    <article class="catalog-card">
      <a class="catalog-card-link" href="{{ benchmark.link }}" target="_blank" rel="noopener">
        <div class="catalog-card-data">
          <div class="catalog-card-data-header">
            <span class="catalog-primary">{{ benchmark.languages }}</span>
            <span class="catalog-status">{{ benchmark.status }}</span>
          </div>
          <p class="catalog-license">{{ benchmark.license }}</p>
        </div>
        <div class="catalog-card-body">
          <p class="catalog-kind">Benchmark</p>
          <h3>{{ benchmark.name }}</h3>
          <p class="catalog-description">{{ benchmark.description }}</p>
          <span class="catalog-read">View benchmark <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
</section>
