---
layout: page
title: Thesis Projects
permalink: /students/thesis-projects/
container: wide
wide: true
---

<p class="page-intro">Current thesis proposals from OdenseNLP. Select a project to read its full description and practical details.</p>

{% assign thesis_projects = site.thesis_projects | sort: "published" | reverse %}
<div class="thesis-table-wrap">
  <table class="thesis-table">
    <caption class="visually-hidden">Current OdenseNLP thesis project proposals</caption>
    <thead>
      <tr>
        <th scope="col">Project title</th>
        <th scope="col">Published</th>
        <th scope="col">Supervisor(s)</th>
        <th scope="col">Suggested level</th>
      </tr>
    </thead>
    <tbody>
      {% if thesis_projects and thesis_projects != empty %}
        {% for project in thesis_projects %}
          <tr>
            <th scope="row"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></th>
            <td><time datetime="{{ project.published | date: '%Y-%m-%d' }}">{{ project.published | date: "%-d %B %Y" }}</time></td>
            <td>{% include supervisor-list.html supervisors=project.supervisors %}</td>
            <td>{{ project.suggested_level }}</td>
          </tr>
        {% endfor %}
      {% else %}
        <tr>
          <td class="thesis-table-empty" colspan="4">Current thesis opportunities will appear here as they are published.</td>
        </tr>
      {% endif %}
    </tbody>
  </table>
</div>
