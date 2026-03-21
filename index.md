---
layout: default
title: OdenseNLP
permalink: /
---

<div class="front-minimal">
  <section class="front-top">
    <div class="container">
      <img
        class="front-logo"
        src="{{ '/assets/images/logo-odensenlp-title.svg' | relative_url }}"
        alt="OdenseNLP"
      />
      <h1 class="visually-hidden">OdenseNLP</h1>
      <p class="front-subtitle">
        Safe, Efficient and Open Natural Language Processing @ University of Southern Denmark
      </p>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Latest news</h2>
        <a href="{{ '/blog/' | relative_url }}">See all posts</a>
      </div>

      {% assign latest_posts = site.posts | slice: 0, 4 %}
      <div class="news-list-minimal" aria-label="Latest news">
        {% for post in latest_posts %}
          <article class="news-item-minimal">
            <p class="meta">{{ post.date | date: "%d %B %Y" }}</p>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.excerpt | strip_html | truncate: 185 }}</p>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <h2>Current focuses</h2>
      <div class="focus-cards">
        <article class="focus-card">
          <h3>Low-resource Nordic NLP</h3>
          <p>Language technologies for Danish and neighboring Scandinavian languages.</p>
        </article>
        <article class="focus-card">
          <h3>Trustworthy models</h3>
          <p>Interpretability, error analysis, and fair evaluation for real-world systems.</p>
        </article>
        <article class="focus-card">
          <h3>Open science</h3>
          <p>Reproducible code, reusable datasets, and transparent documentation.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Repositories summary</h2>
        <a href="{{ '/repositories/' | relative_url }}">See all repositories</a>
      </div>
      {% assign summary_repos = site.data.repositories | slice: 0, 3 %}
      <div class="summary-cards">
        {% for repo in summary_repos %}
          <article class="summary-card">
            <h3><a href="{{ repo.link }}" target="_blank" rel="noopener">{{ repo.name }}</a></h3>
            <p>{{ repo.description | truncate: 150 }}</p>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Datasets summary</h2>
        <a href="{{ '/datasets/' | relative_url }}">See all datasets</a>
      </div>
      {% assign summary_datasets = site.data.datasets | slice: 0, 3 %}
      <div class="summary-cards">
        {% for dataset in summary_datasets %}
          <article class="summary-card">
            <h3><a href="{{ dataset.link }}" target="_blank" rel="noopener">{{ dataset.name }}</a></h3>
            <p>{{ dataset.description | truncate: 150 }}</p>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
</div>
