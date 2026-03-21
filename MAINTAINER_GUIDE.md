# OdenseNLP Maintainer Guide

## 1. Daily editing workflow

Most updates only require editing Markdown (`.md`) or YAML (`.yml`) files.

Common tasks:

- Add a news post: create a file in `_posts/`
- Add/edit a member: add/edit a file in `_members/`
- Add publications/datasets/repos: edit files in `_data/`
- Update static page text: edit `index.md` or one of the page files (`members.md`, `contacts.md`, etc.)

## 2. Add a new blog post/news item

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
---

Short update text here.
```

Notes:

- Posts are shown automatically on `/blog/`.
- The latest 3 posts are shown on the front page.
- Newest date appears first.

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
image: /assets/images/members/first-last.jpg
order: 5
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

Tips:

- `order` controls sorting on the Members page.
- Each member gets an automatic profile page at `/members/<filename>/`.

## 4. Add a publication

Edit `_data/publications.yml` and append an entry:

```yaml
- year: 2026
  authors: "Author, A.; Author, B."
  title: "Paper title"
  venue: "Conference or Journal"
  link: "https://..."
  note: "Optional note"
```

Publications are listed automatically on `/publications/`.

## 5. Add a dataset

Edit `_data/datasets.yml` and append:

```yaml
- name: Dataset name
  languages: "Danish, English"
  license: "CC BY 4.0"
  description: "One-line summary"
  link: "https://..."
  status: "Active"
```

Datasets are listed automatically on `/datasets/`.

## 6. Add a repository

Edit `_data/repositories.yml` and append:

```yaml
- name: repo-name
  description: "What this repo does"
  stack: "Python, PyTorch"
  link: "https://github.com/org/repo"
```

Repositories are listed automatically on `/repositories/`.

## 7. Update contact details

Edit `_data/contacts.yml`:

- group/university/department text
- address lines
- email and phone
- social links

Changes appear automatically on `/contacts/` and footer email text.

## 8. Update menu items

Edit `_data/navigation.yml`.

Each item needs:

```yaml
- title: Menu label
  url: /page-path/
```

If adding a new page, also create corresponding `*.md` file with front matter.

## 9. Replace logo and member images

- Replace `assets/images/logo-odensenlp.svg` with the official logo (same path keeps templates unchanged).
- Add member photos in `assets/images/members/` and update each member file `image:` value.

## 10. Local preview (optional)

If Ruby/Jekyll is installed locally:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

If `bundle` is not set up in your environment, you can still edit content and rely on GitHub Pages build on push.
