---
title: מאפיינים וערכים לוגיים של CSS
tags: ['css']
---

<script setup>
  import PostHeader from './../components/PostHeader.vue'
</script>
<PostHeader :frontmatter="$frontmatter" />
במקום `top` `bottom` `right` `left` שזה המציאות הפיזית, יש מאפיינים לוגים של `block-start` `block-end` `inline-start` `inline-end` כך שלא צריך להגדיר css אחר לrtl, כמו"כ יש ערכים שמתייחסים ספציפית לblok ו inline

block - זה תחילה וסוף האלמנט,
ברוב השפות זה למעלה ולמטה

inline - זה הכיוון שממנו מתחילים את האלמנט עצמו,
זה יכול להיות מימין או משמאל בהתאם לכיוון השפה

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values#reference)

### examples

```css
margin-inline: auto;

margin-block: 5px;
margin-block-end: 8px;

border-block: 1rem solid;

block-size: 150px;
inline-size: 150px;
```

הנה דוגמה עם html

```html
<div class="parent">
  <div dir="rtl" class="child">rtl</div>
  <div dir="ltr" class="child">ltr</div>
</div>

<style>
  .parent {
    inline-size: 150px;
    background-color: red;
    border-block: 1rem solid;
  }

  .child {
    border-inline-start: 1rem solid;
    padding-inline-start: 1rem;
    inline-size: 100px;
    block-size: 100px;
    margin-inline: auto;
    background-color: blue;
  }
</style>
```

<div class="parent">
  <div dir="rtl" class="child">rtl</div>
  <div dir="ltr" class="child">ltr</div>
</div>

<style>
  .parent {
    inline-size: 150px;
    background-color: red;
    border-block: 1rem solid;
  }

  .child {
    border-inline-start: 1rem solid;
    padding-inline-start: 1rem;
    inline-size: 100px;
    block-size: 100px;
    margin-inline: auto;
    background-color: blue;
  }
</style>
