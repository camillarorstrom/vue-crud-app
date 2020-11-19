<template>
  <div>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img v-bind:src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button>Opdater</button>
        </router-link>
        <button type="button" v-on:click="deletePost(post.id)">Fjern</button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods:{
    deletePost(id) {
      postRef.doc(id).delete();
    }
  },
  firestore: {
    posts: postRef,
  },
};
</script>

<style>
.grid-container {
  display: flex;
  flex-wrap: wrap;
}
.grid-container img {
  width: 100%;
}
</style>

