---
layout: page
title: Projects
permalink: /projects/
---

<section class="news-list-minimal project-list" aria-label="Research projects">
  {% for project in site.data.projects %}
    <article class="news-item-minimal project-item">
      <a class="project-item-link" href="{{ project.link }}" target="_blank" rel="noopener">
        <p class="meta">{{ project.short_name }}</p>
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <span class="project-read">Visit project <span aria-hidden="true">↗</span></span>
      </a>
    </article>
  {% endfor %}
</section>
