---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects">
  {% for category in site.data.proj_categories %}
    {% assign projects = site.data.projects[category] %}
    {% case category %}
      {% when "ongoing" %}
        <h1>Ongoing Projects</h1>
      {% when "completed" %}
        <h1>Completed Projects</h1>
    {% endcase %}
    <div class="project-list">
      {% for project in projects %}
      <div class="project-card">
        {% if project.teaser %}
          <div class="project-thumbnail">
            <img src="{{ project.teaser | relative_url }}"
                alt="{{ project.title_en }}">
          </div>
        {% endif %}
        <div class="project-content">
          <div class="project-header">
            <span class="project-status project-status--{{ category }}">
              {% if category == "ongoing" %}
                Ongoing
              {% else %}
                Completed
              {% endif %}
            </span>
            <span class="project-period">
              {{ project.period }}
            </span>
          </div>
          <div class="project-title">
            {{ project.title_en }}
          </div>
          <div class="project-title-ko">
            {{ project.title_ko }}
          </div>
          <div class="project-funding">
            {{ project.program }}
            <span class="project-separator">|</span>
            {{ project.funding }}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>