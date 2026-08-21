---
layout: page
title: Projects
permalink: /projects/
---

<section class="news-list-minimal project-list" aria-label="Research projects">
  {% for project in site.data.projects %}
    <article class="news-item-minimal project-item">
      {% if project.link %}
        <a class="project-item-link" href="{{ project.link }}" target="_blank" rel="noopener">
      {% else %}
        <div class="project-item-link project-item-pending">
      {% endif %}
        <p class="meta">{{ project.short_name }}</p>
        <h2>{{ project.name }}</h2>
        {% if project.description %}<p>{{ project.description }}</p>{% endif %}
        {% if project.link %}
          <span class="project-read">Visit project <span aria-hidden="true">↗</span></span>
        {% else %}
          <span class="project-read project-pending-label">{{ project.status | default: "Coming soon" }}</span>
        {% endif %}
      {% if project.link %}
        </a>
      {% else %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</section>
