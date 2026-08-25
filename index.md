---
layout: default
title: OdenseNLP
permalink: /
---

<div class="front-minimal">
  <section class="front-top">
    <div class="container">
      {% assign front_hero = site.data.frontpage.hero_image | default: '/assets/images/odense.jpg' %}
      <div class="front-hero-media" style="--front-hero-image: url('{{ front_hero | relative_url }}');">
        <div class="front-brand">
          <img
            class="front-brand-logo"
            src="{{ '/assets/images/onlp_logo_transparent.png' | relative_url }}"
            alt="OdenseNLP logo"
          />
          <span class="front-brand-text">OdenseNLP</span>
        </div>
      </div>
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
        <a href="{{ '/news/' | relative_url }}">See all posts</a>
      </div>

      {% assign latest_posts = site.posts | slice: 0, 4 %}
      <div class="news-list-minimal" aria-label="Latest news">
        {% for post in latest_posts %}
          <article class="news-item-minimal {% if post.image %}with-image{% endif %}">
            {% if post.image %}
              {% assign news_image = post.image %}
              {% if news_image contains '://' %}
                <img class="news-item-image" src="{{ news_image }}" alt="{{ post.image_alt | default: post.title }}" />
              {% else %}
                <img class="news-item-image" src="{{ news_image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" />
              {% endif %}
            {% endif %}
            <div>
              <p class="meta">{{ post.date | date: "%d %B %Y" }}</p>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p>{{ post.excerpt | strip_html | truncate: 185 }}</p>
            </div>
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
          <h3>Low-resource NLP</h3>
          <p>Language technologies for low-resource langauges, particularly Danish and neighboring Scandinavian languages.</p>
        </article>
        <article class="focus-card">
          <h3>Efficient NLP</h3>
          <p>Fast and efficient NLP architectures and methods.</p>
        </article>
        <article class="focus-card">
          <h3>AI Safety & Interpretability</h3>
          <p>Making AI systems more safe, trustworthy, and interpretable.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Data</h2>
        <a href="{{ '/data/' | relative_url }}">Browse all data</a>
      </div>

      {% if site.data.datasets and site.data.datasets != empty %}
        <div class="front-data-group">
          <h3>Datasets</h3>
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
      {% endif %}

      {% if site.data.benchmarks and site.data.benchmarks != empty %}
        <div class="front-data-group">
          <h3>Benchmarks</h3>
          {% assign summary_benchmarks = site.data.benchmarks | slice: 0, 3 %}
          <div class="summary-cards">
            {% for benchmark in summary_benchmarks %}
              <article class="summary-card">
                <h3><a href="{{ benchmark.link }}" target="_blank" rel="noopener">{{ benchmark.name }}</a></h3>
                <p>{{ benchmark.description | truncate: 150 }}</p>
              </article>
            {% endfor %}
          </div>
        </div>
      {% endif %}
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Models</h2>
        <a href="{{ '/models/' | relative_url }}">See all models</a>
      </div>
      {% assign summary_models = site.data.models | slice: 0, 3 %}
      <div class="summary-cards">
        {% for model in summary_models %}
          <article class="summary-card">
            <h3><a href="{{ model.link }}" target="_blank" rel="noopener">{{ model.name }}</a></h3>
            <p>{{ model.description | truncate: 150 }}</p>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="front-block">
    <div class="container">
      <div class="front-block-header">
        <h2>Repositories</h2>
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
</div>
