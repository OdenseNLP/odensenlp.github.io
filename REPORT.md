# OdenseNLP Website Structure Report

## 1. Architecture overview

This website is implemented as a **Jekyll GitHub Pages site**.

- Styling and visual identity are centralized in one CSS file.
- Shared HTML structure is handled through Jekyll layouts and includes.
- Repeated content (members, news, thesis proposals, models, benchmarks, datasets, repositories, and publications) is stored in collections/data files for easy maintenance.

## 2. Repository structure

```text
.
├── _config.yml                    # Global Jekyll configuration
├── _layouts/                      # Page templates
│   ├── default.html               # Global shell (head, header, footer)
│   ├── member.html                # Individual member profile page
│   ├── page.html                  # Generic content page template
│   ├── post.html                  # Individual news/blog post template
│   └── thesis-project.html        # Individual thesis proposal template
├── _includes/                     # Reusable shared components
│   ├── footer.html
│   ├── head.html
│   └── header.html
├── _posts/                        # News/blog entries (latest shown on front page)
├── _members/                      # Member profiles (collection)
├── _thesis_projects/              # Thesis proposals (collection)
├── _templates/                    # Copyable content templates
├── _data/                         # Structured editable content
│   ├── contacts.yml
│   ├── benchmarks.yml
│   ├── datasets.yml
│   ├── models.yml
│   ├── navigation.yml
│   ├── publications.yml
│   └── repositories.yml
├── assets/
│   ├── css/main.css               # Full visual style and responsive behavior
│   ├── js/theme.js                # Persistent light/dark theme toggle
│   └── images/                    # Logos + member/news placeholder images
├── index.md                       # Front page with latest news + highlights
├── members.md
├── publications.md
├── models.md
├── data.md
├── benchmarks.md                  # Compatibility link to /data/#benchmarks
├── datasets.md                    # Compatibility link to /data/#datasets
├── projects.md
├── repositories.md
├── news.md
├── contacts.md
├── students.md
├── thesis-projects.md
├── MAINTAINER_GUIDE.md
└── REPORT.md
```

## 3. Navigation and pages

Top menu (always visible on desktop, collapses to a menu button on mobile):

- Home
- Members
- Publications
- Models
- Data
- Projects
- Repositories
- News
- Contacts
- Students

Page data source mapping:

- `index.md`: Front page; latest 3 entries from `_posts/`
- `members.md`: Cards generated from `_members/`
- `publications.md`: Entries from `_data/publications.yml`
- `models.md`: Entries from `_data/models.yml`
- `data.md`: Separate Datasets and Benchmarks sections from `_data/datasets.yml` and `_data/benchmarks.yml`
- `projects.md`: Text-only project rows from `_data/projects.yml`
- `repositories.md`: Entries from `_data/repositories.yml`
- `news.md`: Full chronological list from `_posts/`
- `contacts.md`: Uses `_data/contacts.yml`
- `students.md`: Student-facing sections and opportunities
- `thesis-projects.md`: Date-sorted proposal table generated from `_thesis_projects/`
- `_layouts/thesis-project.html`: Proposal detail pages with descriptions, supervisors, and ECTS

## 4. Design system

Design goals implemented:

- Clean, minimal Scandinavian layout
- Light palette, muted tones, generous whitespace
- Subtle Denmark cue through restrained red accent
- Clear typography hierarchy with modern readable fonts
- Fully responsive behavior for desktop/mobile
- Light and dark color themes with a persistent header toggle and system-theme fallback

All core colors, spacing, and key tokens are defined in CSS variables in `assets/css/main.css`.

## 5. Maintainability choices

To keep edits simple for non-developers:

- Most recurring content is stored in Markdown/YAML instead of HTML templates.
- Navigation can be updated in one file (`_data/navigation.yml`).
- New members, news posts, and thesis proposals are added by creating files in dedicated folders.
- Styling is centralized in a single stylesheet.

## 6. Ready-to-replace assets

Current placeholders are included so the site works immediately:

- `assets/images/logo-odensenlp.svg` (replace with official group logo)
- `assets/images/members/member-placeholder.svg` (replace member images via front matter paths)
- `assets/images/news/news-placeholder.svg` (used automatically when a post has no image)
