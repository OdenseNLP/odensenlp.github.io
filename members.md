---
layout: page
title: People
lead: People in the OdenseNLP research group.
permalink: /members/
wide: true
---

{% assign people_order = site.data.people_order %}
{% assign ordered_member_names = "" | split: "" %}
{% for people_section in people_order.sections %}
  {% assign ordered_member_names = ordered_member_names | concat: people_section.members %}
{% endfor %}

{% for people_section in people_order.sections %}
  {% assign section_id = people_section.title | slugify %}
  <section class="member-section" aria-labelledby="{{ section_id }}-heading">
    <h2 id="{{ section_id }}-heading">{{ people_section.title }}</h2>
    <div class="member-grid">
      {% for member_name in people_section.members %}
        {% assign member = site.members | where: "name", member_name | first %}
        {% if member %}
          {% include member-card.html member=member %}
        {% endif %}
      {% endfor %}
    </div>
  </section>
{% endfor %}

{% assign unlisted_member_count = 0 %}
{% for member in site.members %}
  {% unless ordered_member_names contains member.name %}
    {% assign unlisted_member_count = unlisted_member_count | plus: 1 %}
  {% endunless %}
{% endfor %}

{% if unlisted_member_count > 0 %}
  {% assign fallback_title = people_order.fallback_section | default: "Other members" %}
  {% assign fallback_id = fallback_title | slugify %}
  <section class="member-section" aria-labelledby="{{ fallback_id }}-heading">
    <h2 id="{{ fallback_id }}-heading">{{ fallback_title }}</h2>
    <div class="member-grid">
      {% assign members_by_name = site.members | sort: "name" %}
      {% for member in members_by_name %}
        {% unless ordered_member_names contains member.name %}
          {% include member-card.html member=member %}
        {% endunless %}
      {% endfor %}
    </div>
  </section>
{% endif %}
