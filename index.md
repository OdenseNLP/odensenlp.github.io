---
layout: default
title: OdenseNLP
permalink: /
---

<section class="hero">
  <div class="container hero-grid">
    <article class="hero-card">
      <p class="eyebrow">Natural Language Processing · Odense, Denmark</p>
      <h1>OdenseNLP at the University of Southern Denmark</h1>
      <p>
        We are a research group at SDU focused on robust, transparent, and socially useful NLP for Danish,
        Scandinavian, and multilingual settings.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="{{ '/members/' | relative_url }}">Meet the team</a>
        <a class="btn btn-secondary" href="{{ '/publications/' | relative_url }}">View publications</a>
      </div>
    </article>

    <aside class="highlight-card" aria-label="Research highlights">
      <p class="eyebrow">Current focus</p>
      <div class="highlight-list">
        <div>
          <h3>Low-resource Nordic NLP</h3>
          <p>Language technologies for Danish and neighboring Scandinavian languages.</p>
        </div>
        <div>
          <h3>Trustworthy models</h3>
          <p>Interpretability, error analysis, and fair evaluation for real-world systems.</p>
        </div>
        <div>
          <h3>Open science</h3>
          <p>Reproducible code, reusable datasets, and transparent documentation.</p>
        </div>
      </div>
    </aside>
  </div>
</section>

<section class="container section news-section">
  <div class="section-header">
    <h2>Latest news</h2>
    <a href="{{ '/blog/' | relative_url }}">See all posts</a>
  </div>

  {% assign latest_posts = site.posts | slice: 0, 3 %}
  <div class="card-grid">
    {% for post in latest_posts %}
      <article class="card news-card">
        <p class="meta">{{ post.date | date: "%d %b %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 145 }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="container section quick-section">
  <div class="section-header">
    <h2>Explore OdenseNLP</h2>
  </div>

  <div class="card-grid">
    <article class="card">
      <h3><a href="{{ '/datasets/' | relative_url }}">Datasets</a></h3>
      <p>Discover corpora and benchmark resources curated by the group.</p>
    </article>
    <article class="card">
      <h3><a href="{{ '/repositories/' | relative_url }}">Repositories</a></h3>
      <p>Find open-source tools and reproducible experimental code.</p>
    </article>
    <article class="card">
      <h3><a href="{{ '/contacts/' | relative_url }}">Contacts</a></h3>
      <p>Reach us for collaboration, student projects, and research partnerships.</p>
    </article>
  </div>
</section>
