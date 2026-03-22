---
layout: page
title: Blog posts/news
lead: News, events, milestones, and updates from OdenseNLP.
permalink: /blog/
---

<section class="post-list" aria-label="News and blog posts">
  {% for post in site.posts %}
    <article class="resource-card">
      {% if post.image %}
        {% assign list_image = post.image %}
        {% if list_image contains '://' %}
          <img class="post-list-image" src="{{ list_image }}" alt="{{ post.image_alt | default: post.title }}" />
        {% else %}
          <img class="post-list-image" src="{{ list_image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" />
        {% endif %}
      {% endif %}
      <p class="meta">{{ post.date | date: "%d %B %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 210 }}</p>
    </article>
  {% endfor %}
</section>
