---
layout: page
title: Publications
lead: Selected OdenseNLP publications. Edit entries in `_data/publications.yml`.
permalink: /publications/
---

{% assign publications = site.data.publications | sort: "year" | reverse %}

<section class="resource-list" aria-label="Publication list">
  {% for pub in publications %}
    <article class="resource-card">
      <h3>{{ pub.title }}</h3>
      <p class="meta">{{ pub.year }} · {{ pub.venue }}</p>
      <p>{{ pub.authors }}</p>
      <p>
        <a href="{{ pub.link }}" target="_blank" rel="noopener">Publication link</a>
        {% if pub.note %} · {{ pub.note }}{% endif %}
      </p>
    </article>
  {% endfor %}
</section>
