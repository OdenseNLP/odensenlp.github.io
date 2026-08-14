---
layout: page
title: People
lead: People in the OdenseNLP research group.
permalink: /members/
wide: true
---

<section class="member-grid" aria-label="Research group members">
  {% for member_name in site.data.people_order %}
    {% assign member = site.members | where: "name", member_name | first %}
    {% if member %}
      {% include member-card.html member=member %}
    {% endif %}
  {% endfor %}

  {% assign members_by_name = site.members | sort: "name" %}
  {% for member in members_by_name %}
    {% unless site.data.people_order contains member.name %}
      {% include member-card.html member=member %}
    {% endunless %}
  {% endfor %}
</section>
