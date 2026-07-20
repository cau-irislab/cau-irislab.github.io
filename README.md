# IRIS Lab Website

This repository contains the source code for the **IRIS Lab (Immersive Reality & Integrated Systems Laboratory)** website at Chung-Ang University.

The website is built with **GitHub Pages** and **Jekyll**.

---

# Getting Started

Clone the repository.

```bash
git clone https://github.com/cau-irislab/cau-irislab.github.io.git
cd cau-irislab.github.io
```

Install the required packages and start the local server.

```bash
bundle install
bundle exec jekyll serve
```

Then open

```
http://localhost:4000
```

to preview the website.

---

# Website Structure

The main files are organized as follows.

```text
.
├── index.md                         # Home page
├── join-us.md                       # Join Us
├── members.md                       # Members
├── publications.md                  # Publications
├── projects.md                      # Research Projects
├── _posts/                          # News posts
├── _data/
│   ├── publications/                # Publication data
│   ├── projects/                    # Project data
│   ├── pub_years.yml                # Publication categories/years
│   └── proj_categories.yml          # Project categories
├── assets/                          # Images, CSS, icons, etc.
└── _includes/, _layouts/, _sass/    # Jekyll layouts and styling
```

---

# Updating the Website

Most updates only require editing one of the following files.

|  Update | File |
|---------|------|
| Home page | `index.md` |
| Members | `members.md` |
| Publications | `_data/publications/` |
| Publication categories | `_data/pub_years.yml` |
| Projects | `_data/projects/` |
| Project categories | `_data/proj_categories.yml` |
| News | `_posts/` |
| Images | `assets/` |

When adding publications,
- create or edit the corresponding YAML file in `_data/publications/`
- update `_data/pub_years.yml` if a new category or year is added

When adding news,
- add the .md file in `_posts/`
- filename format: yyyy-mm-dd-news_content

---

# Commit Changes

After making your changes,

```bash
git add .
git commit -m "Update website"
git push
```

If you are not a repository maintainer, please create a Pull Request after pushing your changes.

---

# Notes

- Always check the local preview before pushing changes.
- Keep the formatting consistent with the existing pages.
- If something does not appear correctly, try rebuilding the site with `bundle exec jekyll serve`.