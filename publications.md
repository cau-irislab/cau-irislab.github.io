---
layout: default
title: Publications
permalink: /publications/
---

<div class="publications">

  {% for year in site.data.pub_years %}
    {% assign year_key = year | append: "" %}
    {% assign publications = site.data.publications[year_key] %}
    {% if publications and publications.size > 0 %}
      <section class="publication-year">
        {% if year == "under_review" %}
          <h1>Under Review</h1>
        {% else %}
          <h1>{{ year }}</h1>
        {% endif %}
        <div class="publication-list">
          {% for publication in publications %}
            {% assign has_thumbnail = false %}
            {% if publication.media and publication.media.teaser and publication.media.teaser != "" %}
              {% assign has_thumbnail = true %}
            {% endif %}
            <article class="publication-item{% unless has_thumbnail %} publication-item--no-thumbnail{% endunless %}">
              {% if has_thumbnail %}
                <div class="publication-thumbnail">
                  <img
                    src="{{ publication.media.teaser | relative_url }}"
                    alt="{{ publication.media.alt | default: publication.title }}">
                </div>
              {% endif %}
              <div class="publication-content">
                <div class="publication-heading">
                  <!-- {% if publication.index %}
                    <span class="publication-index">[{{ publication.index }}]</span>
                  {% endif %} -->
                  <span class="publication-title">
                    {{ publication.title }}
                  </span>
                </div>
                {% if publication.authors and publication.authors.size > 0 %}
                  <div class="publication-authors">
                    {% for author in publication.authors %}
                      {{ author.name }}{% if author.equal-contribution %}<sup>*</sup>{% endif %}{% if author.corresponding %}<sup>†</sup>{% endif %}{% unless forloop.last %}, {% endunless %}
                    {% endfor %}
                  </div>
                {% endif %}
                <div class="publication-meta">
                  {% if publication.publication %}
                    <span class="publication-info">
                      {{ publication.publication.venue }}
                      {{ publication.publication.year }}
                    </span>
                  {% endif %}
                  {% if publication.links %}
                    <span class="publication-links">
                      {% if publication.links.arxiv and publication.links.arxiv != "" %}
                        <a href="{{ publication.links.arxiv }}" target="_blank" rel="noopener noreferrer">arXiv</a>
                      {% endif %}
                      {% if publication.links.pdf and publication.links.pdf != "" %}
                        <a href="{{ publication.links.pdf }}" target="_blank" rel="noopener noreferrer">PDF</a>
                      {% endif %}
                      {% if publication.links.project and publication.links.project != "" %}
                        <a href="{{ publication.links.project }}" target="_blank" rel="noopener noreferrer">Project</a>
                      {% endif %}
                      {% if publication.links.code and publication.links.code != "" %}
                        <a href="{{ publication.links.code }}" target="_blank" rel="noopener noreferrer">Code</a>
                      {% endif %}                      
                    </span>
                  {% endif %}
                </div>
                {% if publication.highlights and publication.highlights.size > 0 %}
                  <div class="publication-highlights">
                    {% for highlight in publication.highlights %}
                      {% if highlight.text and highlight.text != "" %}
                        {% if forloop.first %}
                          <span class="publication-highlight">
                            {{ highlight.text }}
                          </span>
                        {% else %}
                          <span class="publication-highlight-secondary">
                            [{{ highlight.text }}]
                          </span>
                        {% endif %}
                      {% endif %}
                    {% endfor %}
                  </div>
                {% endif %}
                {% if publication.keywords and publication.keywords.size > 0 %}
                  <div class="publication-keywords">
                    {% for keyword in publication.keywords %}
                      {% assign keyword_group = "other" %}

                      {% if keyword == "3D Vision"
                        or keyword == "Neural Rendering"
                        or keyword == "Gaussian Splatting"
                        or keyword == "Generative Modeling"
                      %}
                        {% assign keyword_group = "3d-vision-generation" %}

                      {% elsif keyword == "Face Analysis"
                        or keyword == "Speech Processing"
                        or keyword == "Motion Generation"
                        or keyword == "Digital Human"
                      %}
                        {% assign keyword_group = "human-modeling-interaction" %}

                      {% elsif keyword == "Scene Understanding"
                        or keyword == "Segmentation"
                        or keyword == "Object Detection"
                        or keyword == "Vision-Language"
                      %}
                        {% assign keyword_group = "scene-understanding" %}

                      {% elsif keyword == "Adversarial Learning"
                        or keyword == "Robust Learning"
                        or keyword == "Visual Quality Assessment"
                        or keyword == "VR/XR"
                      %}
                        {% assign keyword_group = "robust-perceptual-vision" %}
                      {% endif %}

                      <span class="publication-keyword publication-keyword--{{ keyword_group }}">
                        {{ keyword }}
                      </span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      </section>
    {% endif %}
  {% endfor %}
</div>