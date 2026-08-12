---
layout: page
title: Benchmarks
lead: Evaluation benchmarks released or maintained by OdenseNLP.
permalink: /benchmarks/
---

<section class="resource-list" aria-label="Benchmark list">
  {% for benchmark in site.data.benchmarks %}
    <article class="resource-card">
      <h3>{{ benchmark.name }}</h3>
      <p class="meta">{{ benchmark.languages }} · {{ benchmark.license }} · {{ benchmark.status }}</p>
      <p>{{ benchmark.description }}</p>
      <p><a href="{{ benchmark.link }}" target="_blank" rel="noopener">Benchmark page</a></p>
    </article>
  {% endfor %}
</section>
