<script setup>
defineProps(['frontmatter'])
</script>

<template>
  <div>
    <div>{{ frontmatter.date }}</div>
    <h1>{{ frontmatter.title }}</h1>
    <div class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">
        <a href="">{{ tag }}</a>  
      </span>
    </div>
  </div>
</template>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  margin-top: 10px;
}

.tag {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 4px;
}

.dark .tag {
  background-color: #333;
  color: #f0f0f0;
}

</style>