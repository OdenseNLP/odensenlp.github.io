# OdenseNLP Website Structure Report

## 1. Architecture overview

This website is implemented as a **Jekyll GitHub Pages site**.

- Styling and visual identity are centralized in one CSS file.
- Shared HTML structure is handled through Jekyll layouts and includes.
- Repeated content (members, news, datasets, repos, publications) is stored in collections/data files for easy maintenance.

## 2. Repository structure

```text
.
├── _config.yml                    # Global Jekyll configuration
├── _layouts/                      # Page templates
│   ├── default.html               # Global shell (head, header, footer)
│   ├── member.html                # Individual member profile page
│   ├── page.html                  # Generic content page template
│   └── post.html                  # Individual news/blog post template
├── _includes/                     # Reusable shared components
│   ├── footer.html
│   ├── head.html
│   └── header.html
├── _posts/                        # News/blog entries (latest shown on front page)
├── _members/                      # Member profiles (collection)
├── _data/                         # Structured editable content
│   ├── contacts.yml
│   ├── datasets.yml
│   ├── navigation.yml
│   ├── publications.yml
│   └── repositories.yml
├── assets/
│   ├── css/main.css               # Full visual style and responsive behavior
│   └── images/                    # Logo + member placeholder image
├── index.md                       # Front page with latest news + highlights
├── members.md
├── publications.md
├── datasets.md
├── repositories.md
├── blog.md
├── contacts.md
├── MAINTAINER_GUIDE.md
└── REPORT.md
```

## 3. Navigation and pages

Top menu (always visible on desktop, collapses to menu button on mobile):

- Home
- Members
- Publications
- Datasets
- Repositories
- Blog posts/news
- Contacts

Page data source mapping:

- `index.md`: Front page; latest 3 entries from `_posts/`
- `members.md`: Cards generated from `_members/`
- `publications.md`: Entries from `_data/publications.yml`
- `datasets.md`: Entries from `_data/datasets.yml`
- `repositories.md`: Entries from `_data/repositories.yml`
- `blog.md`: Full chronological list from `_posts/`
- `contacts.md`: Uses `_data/contacts.yml`

## 4. Design system

Design goals implemented:

- Clean, minimal Scandinavian layout
- Light palette, muted tones, generous whitespace
- Subtle Denmark cue through restrained red accent
- Clear typography hierarchy with modern readable fonts
- Fully responsive behavior for desktop/mobile

All core colors, spacing, and key tokens are defined in CSS variables in `assets/css/main.css`.

## 5. Maintainability choices

To keep edits simple for non-developers:

- Most recurring content is stored in Markdown/YAML instead of HTML templates.
- Navigation can be updated in one file (`_data/navigation.yml`).
- New members/news posts are added by creating files in dedicated folders.
- Styling is centralized in a single stylesheet.

## 6. Ready-to-replace assets

Current placeholders are included so the site works immediately:

- `assets/images/logo-odensenlp.svg` (replace with official group logo)
- `assets/images/members/member-placeholder.svg` (replace member images via front matter paths)
