---
layout: default
title: News
permalink: /news/
nav_exclude: true
---

<ul class="post-list">
  {% assign sorted_posts = site.posts | sort: "date" | reverse %}

  {%- for post in sorted_posts -%}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>

      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>

      {%- if site.show_excerpts -%}
        {{ post.excerpt }}
      {%- endif -%}
    </li>
  {%- endfor -%}
</ul>