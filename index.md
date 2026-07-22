---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# title: Immersive Reality & Integrated Systems Lab
layout: default
---

# **Immersive Reality & Integrated Systems Lab**

Welcome to the **Immersive Reality** and **Integrated Systems (IRIS)** Lab at **Chung-Ang University !**

We bridge **Generative AI and Reality** by developing human-centered intelligent systems that **understand humans and the physical world**, and seamlessly **connect the physical and digital worlds**.
Our research spans reality modeling and simulation, computational cognition, and physical AI to enable intelligent systems that can perceive, reason, and interact with the real world.

<!-- --- -->

<div class="hero-image">
  <img src="/assets/images/main-irislab.png" alt="IRIS Lab">
</div>

<!-- --- -->
<div class="section-gap"></div>

## Research Areas

<!-- ![](/assets/images/principles.png) -->

1. **Reality Modeling & World Simulation** : Perceiving, reconstructing, and simulating the physical world in digital space to build high-fidelity world models and digital twins, enabling intelligent systems to understand and interact with complex real-world environments.

2. **Human Understanding & Computational Cognition** : Understanding human language, speech, behavior, and social context through multimodal AI while computationally modeling human perception, understanding, and reasoning to enable human-centered intelligence.

3. **Physical AI & Embodied Intelligence** : Developing embodied AI and intelligent agents that integrate perception, reasoning, and action to transfer digital intelligence into the physical world and enable natural interaction with people and their environments.

---

## Latest News

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

<ul class="post-list">
  {%- for post in sorted_posts limit: 5 -%}
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

{% if sorted_posts.size > 5 %}
  <p class="view-all-news">
    <a href="{{ '/news/' | relative_url }}">View all news →</a>
  </p>
{% endif %}

---

## Contact

- **Address:**
  - (En) [06974] Room 818, 305 Building, 84 Heukseok-ro, Dongjak-gu, Seoul, 06974, Republic of Korea
  - (Ko) [06974] 서울 동작구 흑석로 84 중앙대학교 교수연구동 305관 818호
- **Office Phone**: +82-2-820-5972
- **Email:** hakgukim@cau.ac.kr


<div class="section-gap"></div>

## Location

<iframe src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357ca1d896e73025%3A0xf6614ef31c11e9c1!2z7KSR7JWZ64yA7ZWZ6rWQIOq1kOyImOyXsOq1rOuPmSDrsI8g7LK07Jyh6rSAKDMwNeq0gCk!5e0!3m2!1sko!2skr!4v1784140519634!5m2!1sko!2skr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

