--- 
layout: post
title: I think I'm sold
created: 1229547976
tags: 
- Drupal
- fields in core
---
Until now I was a bit concerned about [this](http://groups.drupal.org/node/17576), but I think I'm completely convinced that it is the way to go.

Here are a few brief excerpts from drupal-dev

<span style="color: rgb(255, 153, 0);">**Person 1**</span> With variable schema, you either &lt;3 Views or &lt;3 complex PHP code to build queries. *(Editors note: Current CCK)*

<span style="color: rgb(255, 153, 0)">**Person 1**</span> With full normalization, you either &lt;3 Views/MVs, or &lt;3 huge static SQL queries. *(Editors node: proposed normalized storage with [MV](http://en.wikipedia.org/wiki/Materialized_view) support)*

<span style="color: rgb(255, 153, 0);">**Person 1**</span> Both lead you to &quot;without Views, you're screwed&quot;.

<span style="color: rgb(255, 153, 0);">**Person 2**</span> so once again. the system&nbsp;davidstrauss&nbsp;builds lets you to add the per-bundle tables you loved.

<span style="color: rgb(255, 153, 0);">**Person 2**</span> so in this regard, MV is cleanly superset of existing functionality

