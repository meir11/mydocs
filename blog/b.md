---
title: מאפיינים וערכים לוגיים של CSS
tags: ['css']
---

<script setup>
  import PostHeader from './../components/PostHeader.vue'
</script>
<PostHeader :frontmatter="$frontmatter" />
במקום `top` `bottom` `right` `left` שזה המציאות הפיזית, יש מאפיינים לוגים של `blok-start` `blok-end` `inline-start` `inline-end` כך שלא צריך להגדיר css אחר לrtl, כמו"כ יש ערכים שמתייחסים ספציפית לblok ו inline

blok - זה תחילה וסוף האלמנט 

inline - זה הכיוון שממנו מתחילים את האלמנט עצמו

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values#reference)

### examples

```css
/* Before */
margin-left: auto;
margin-right: auto;

/* After */
margin-inline: auto;

margin-block: 5px;
margin-block-end: 8px;

border-block: 1rem solid;

block-size: 150px;
```
