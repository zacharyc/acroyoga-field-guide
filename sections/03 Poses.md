---
tags: sections
---

# Poses

Poses are the cool things you see on instagram that are static.

{%- for pose in collections.sortedPoses -%}
<seciton class="section"> {{ pose.templateContent }} </seciton>
{%- endfor -%}