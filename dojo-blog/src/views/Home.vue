<template>
  <div class="home">
    <h1>Home</h1>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else class="loader">loading...</div>

    <!--
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button> -->
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  components: { PostList },
  name: "Home",
  // this function runs before any hooks
  setup() {
    // const showPosts = ref(true);
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style scoped>
button {
  background: #4848f7;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1em 2em;
  outline: none;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 2px 10px;
}
</style>