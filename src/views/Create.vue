<template>
  <div class="create">
    <h1>Tilføj varer</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Indsæt tekst her"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="Indsæt billede her"
        required
      />

      <button type="button" v-on:click="createPost">Create post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
    name: 'Create',
  data() {
    return {
      post: {
          description: '',
          image: ''
      }
    }
  },
  methods: {
      createPost (){
          postRef.add(this.post)
          this.$router.push('/')
      }
  }
  
};

</script>

