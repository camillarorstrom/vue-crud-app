<template>
  <div class="home">
    <h1>Indkøbsliste</h1>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
  name: "Indkøbsliste",
  components: {PostList}
};
</script>
