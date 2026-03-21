---
layout: page
title: Blog posts/news
lead: News, events, milestones, and updates from OdenseNLP.
permalink: /blog/
---

<section class="post-list" aria-label="News and blog posts">
  {% for post in site.posts %}
    <article class="resource-card">
      <p class="meta">{{ post.date | date: "%d %B %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 210 }}</p>
    </article>
  {% endfor %}
</section>
