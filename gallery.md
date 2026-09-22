---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="gallery-grid">
  {% for item in site.data.gallery %}
    <div class="gallery-card">
      <div class="gallery-slider">
        <div class="gallery-track">
          {% if item.cover %}
            <img
              src="/assets/images/gallery/{{ item.folder }}/{{ item.cover }}"
              alt="{{ item.title }}"
              class="gallery-slide active"
            >
          {% endif %}

          {% for image in item.images %}
            <img
              src="/assets/images/gallery/{{ item.folder }}/{{ image }}"
              alt="{{ item.title }}"
              class="gallery-slide"
            >
          {% endfor %}
        </div>

        <button class="gallery-prev" type="button">‹</button>
        <button class="gallery-next" type="button">›</button>
      </div>

      <div class="gallery-title">{{ item.title }}</div>

      {% if item.date %}
        <div class="gallery-date">{{ item.date }}</div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<script src="/assets/js/gallery.js"></script>