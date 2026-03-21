---
layout: page
title: Contacts
lead: Get in touch with the OdenseNLP group at SDU.
permalink: /contacts/
---

<div class="contact-grid">
  <section class="contact-card">
    <h3>{{ site.data.contacts.group_name }}</h3>
    <p>{{ site.data.contacts.department }}</p>
    <p>{{ site.data.contacts.university }}</p>
    {% for line in site.data.contacts.address_lines %}
      <p>{{ line }}</p>
    {% endfor %}
  </section>

  <section class="contact-card">
    <h3>Direct contact</h3>
    <p><strong>Email:</strong> <a href="mailto:{{ site.data.contacts.email }}">{{ site.data.contacts.email }}</a></p>
    <p><strong>Phone:</strong> {{ site.data.contacts.phone }}</p>
  </section>
</div>

<section class="section" style="padding: 1.1rem 0 0;">
  <h2>Online</h2>
  <div class="resource-list">
    {% for item in site.data.contacts.social %}
      <article class="resource-card">
        <h3>{{ item.name }}</h3>
        <p><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.url }}</a></p>
      </article>
    {% endfor %}
  </div>
</section>
