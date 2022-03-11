---
tags: sections
---

# Poses

Poses are the cool things you see on instagram that are static.

{%- for post in collections.pose -%}
<seciton class="section"> {{ post.templateContent }} </seciton>
{%- endfor -%}
