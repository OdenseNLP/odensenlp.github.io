---
layout: page
title: Publications
permalink: /publications/
container: wide
wide: true
---

{% assign publications = site.data.publications | sort: "year" | reverse %}
{% assign publication_tags = "" | split: "" %}
{% for pub in publications %}
  {% if pub.tags %}
    {% assign publication_tags = publication_tags | concat: pub.tags %}
  {% endif %}
{% endfor %}
{% assign publication_tags = publication_tags | uniq | sort %}

<section class="publication-browser" data-publication-browser>
  <div class="publication-filters" aria-labelledby="publication-filter-heading" data-publication-filters hidden>
    <div class="publication-filter-heading">
      <div>
        <h2 id="publication-filter-heading">Filter by topic</h2>
        <p>Select one or more tags. Papers must match every selected tag.</p>
      </div>
      <button class="publication-clear" type="button" data-clear-tags hidden>Clear filters</button>
    </div>
    <div class="publication-filter-tags" aria-label="Publication topic filters">
      {% for tag in publication_tags %}
        <button class="publication-filter-tag" type="button" data-filter-tag="{{ tag | downcase | escape }}" aria-pressed="false">
          {{ tag }}
        </button>
      {% endfor %}
    </div>
    <p class="publication-count" data-publication-count aria-live="polite">
      Showing {{ publications.size }} of {{ publications.size }} papers
    </p>
  </div>

  <div class="publication-grid" aria-label="Publication list">
  {% for pub in publications %}
    <article class="publication-card" data-publication data-tags="{% if pub.tags %}{{ pub.tags | join: '|' | downcase | escape }}{% endif %}">
      <a class="publication-card-link" href="{{ pub.link }}" target="_blank" rel="noopener">
        <div class="publication-card-data">
          <div class="publication-card-data-header">
            <span class="publication-year">{{ pub.year }}</span>
            {% if pub.note %}<span class="publication-source">{{ pub.note }}</span>{% endif %}
          </div>
          <p class="publication-venue">{{ pub.venue }}</p>
          {% if pub.tags %}
            <div class="publication-tags" aria-label="Topics">
              {% for tag in pub.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <div class="publication-card-body">
          <h3>{{ pub.title }}</h3>
          <p class="publication-authors">{{ pub.authors }}</p>
          <span class="publication-read">Read paper <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  {% endfor %}
  </div>
  <p class="publication-empty" data-publication-empty hidden>No papers match all selected tags.</p>
</section>

<script>
  (() => {
    const browser = document.querySelector("[data-publication-browser]");
    if (!browser) return;

    const filters = browser.querySelector("[data-publication-filters]");
    const filterButtons = [...browser.querySelectorAll("[data-filter-tag]")];
    const papers = [...browser.querySelectorAll("[data-publication]")];
    const clearButton = browser.querySelector("[data-clear-tags]");
    const count = browser.querySelector("[data-publication-count]");
    const emptyState = browser.querySelector("[data-publication-empty]");
    const selectedTags = new Set();

    filters.hidden = false;

    const updatePapers = () => {
      let visiblePapers = 0;

      papers.forEach((paper) => {
        const paperTags = new Set((paper.dataset.tags || "").split("|").filter(Boolean));
        const matches = [...selectedTags].every((tag) => paperTags.has(tag));
        paper.hidden = !matches;
        if (matches) visiblePapers += 1;
      });

      clearButton.hidden = selectedTags.size === 0;
      emptyState.hidden = visiblePapers !== 0;
      count.textContent = `Showing ${visiblePapers} of ${papers.length} ${papers.length === 1 ? "paper" : "papers"}`;
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tag = button.dataset.filterTag;
        const isSelected = selectedTags.has(tag);

        if (isSelected) selectedTags.delete(tag);
        else selectedTags.add(tag);

        button.setAttribute("aria-pressed", String(!isSelected));
        updatePapers();
      });
    });

    clearButton.addEventListener("click", () => {
      selectedTags.clear();
      filterButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
      updatePapers();
    });
  })();
</script>
