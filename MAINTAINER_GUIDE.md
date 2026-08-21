# OdenseNLP Maintainer Guide

## 1. Daily editing workflow

Most updates only require editing Markdown (`.md`) or YAML (`.yml`) files.

Common tasks:

- Add a news post: create a file in `_posts/`
- Add/edit a member: add/edit a file in `_members/`
- Add publications, models, benchmarks, datasets, or repositories: edit files in `_data/`
- Update static page text: edit `index.md` or one of the page files (`members.md`, `contacts.md`, etc.)

## 2. Add a news item

Create a new file in `_posts/` named:

```text
YYYY-MM-DD-short-title.md
```

Example:

```text
_posts/2026-04-07-new-paper-accepted.md
```

Template:

```markdown
---
title: New paper accepted at ACL
image: /assets/images/news/news-photo.jpg
image_alt: Short alt text
image_caption: Optional caption text
---

Short update text here.
```

Notes:

- Posts are shown automatically on `/blog/`.
- The latest 3 posts are shown on the front page.
- Newest date appears first.
- `image`, `image_alt`, and `image_caption` are optional. If `image` is omitted, `/assets/images/news/news-placeholder.svg` is used automatically. Set `image` to show a specific image on the post page and in news lists.

## 3. Add or edit a member

Members are stored in `_members/`.

Create a new file, e.g.:

```text
_members/first-last.md
```

Template:

```markdown
---
name: First Last
role: PhD Fellow
affiliation: University of Southern Denmark (SDU)
email: person@sdu.dk
github: https://github.com/username
linkedin: https://www.linkedin.com/in/username
scholar: https://scholar.google.com/citations?user=...
image: /assets/images/members/first-last.jpg
research_areas:
  - Topic A
  - Topic B
---

Short bio paragraph.
```

Then add the image file to:

```text
assets/images/members/first-last.jpg
```

The `image` field is optional. If it is omitted, `/assets/images/members/member-placeholder.svg` is used automatically.

Tips:

- `_data/people_order.yml` defines the People page sections and their display order.
- Add the member's exact `name` under a section's `members` list to control both their section and position.
- Move a name between section lists to reassign that person without editing their profile.
- Members omitted from all section lists are shown alphabetically in the final fallback section configured by `fallback_section`.
- Each member gets an automatic profile page at `/members/<filename>/`.
- Member cards/profile pages show icons for mail, GitHub, LinkedIn, and Scholar; add/remove those fields to control active links.

## 4. Add a publication

Edit `_data/publications.yml` and append an entry:

```yaml
- year: 2026
  authors: "Author, A.; Author, B."
  title: "Paper title"
  venue: "Conference or Journal"
  link: "https://..."
  note: "Optional note"
  tags:
    - Topic A
    - Topic B
```

Publications are listed automatically on `/publications/`. Tags are optional; every tag used in the publication data automatically becomes a filter on the page. Reuse existing tag names when possible to avoid near-duplicate filters.

## 5. Add a model

Edit `_data/models.yml` and append:

```yaml
- name: Model name
  type: Model
  primary: "Model family or architecture"
  secondary: "License or format"
  status: "Active"
  description: "One-line summary"
  link: "https://..."
  link_label: "View model"
```

Models and model collections are listed automatically on `/models/`.

## 6. Add a benchmark

Edit `_data/benchmarks.yml` and append:

```yaml
- name: Benchmark name
  languages: "Danish, English"
  license: "CC BY 4.0"
  description: "One-line summary"
  link: "https://..."
  link_label: "Optional custom link label"
  status: "Active"
```

Benchmarks are listed automatically in the Benchmarks section of `/data/` and summarized under Data on the front page.

## 7. Add a dataset

Edit `_data/datasets.yml` and append:

```yaml
- name: Dataset name
  type: Dataset
  languages: "Danish, English"
  license: "CC BY 4.0"
  description: "One-line summary"
  link: "https://..."
  status: "Active"
```

Datasets are listed automatically in the Datasets section of `/data/` and summarized under Data on the front page.

## 8. Add a project

Edit `_data/projects.yml` and append:

```yaml
- short_name: PROJECT
  name: Full project name
  description: "Brief project description"
  link: "https://project.example/"
```

Projects are listed automatically on `/projects/`. Each project row links to its external website in a new tab.

## 9. Add a repository

Edit `_data/repositories.yml` and append:

```yaml
- name: repo-name
  description: "What this repo does"
  stack: "Python, PyTorch"
  link: "https://github.com/org/repo"
```

Repositories are listed automatically on `/repositories/`.

## 10. Update contact details

Edit `_data/contacts.yml`:

- group/university/department text
- address lines
- email and phone
- social links
- project contacts, including project description, contact person, email, and website

Changes appear automatically on `/contacts/` and footer email text.

## 11. Update menu items

Edit `_data/navigation.yml`.

Each item needs:

```yaml
- title: Menu label
  url: /page-path/
```

If adding a new page, also create corresponding `*.md` file with front matter.

## 12. Replace logo and member images

- Replace `assets/images/logo-odensenlp.svg` (menu logo) and `assets/images/logo-odensenlp-title.svg` (front-page centered logo/title) with official assets.
- To change the image behind the front-page logo block, edit `_data/frontpage.yml` (`hero_image`) and point it to your image path.
- Add member photos in `assets/images/members/` and update each member file `image:` value.

## 13. Local preview (optional)

If Ruby/Jekyll is installed locally:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

If `bundle` is not set up in your environment, you can still edit content and rely on GitHub Pages build on push.
