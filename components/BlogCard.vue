<script setup lang='ts'>
type blog = {
  title: string
  url: string,
  description: string
}
const props = defineProps<blog>()
</script>

<template>
  <a :href="`${url}`">
    <div class="poos-card">
    <!-- placeholder 200x100 /  -->
     <img src="https://via.placeholder.com/200" alt="">
      <div>{{ title }}</div>
      <div>{{ url }}</div>
    </div>
  </a>

</template>

<style scoped>
.poos-card {
  width: 200px;
  height: 300px;
  padding: 10px;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.poos-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

<style scoped></style>
