---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'מאיר לוי'
  text: 'הבלוג של מאיר לוי'
  tagline: 'פוסטים טיפים ועוד בנושאי תכנות'
  # actions:
  #   - theme: brand
  #     text: Markdown Examples
  #     link: /markdown-examples
  #   - theme: alt
  #     text: API Examples
  #     link: /api-examples
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lng="ts">
import { withBase} from 'vitepress'
import BlogCard from './components/BlogCard.vue';
import { data as posts } from './blog.data.ts'
</script>

### הפוסטים האחרונים שלי..

<div class="posts">
 <BlogCard v-for="p in posts" :title="p.frontmatter.title" :url="withBase(p.url)"/>
</div>

<style>
  .posts{
   margin-top: 10px;
   display: flex;
   gap: 20px
  }
</style>
