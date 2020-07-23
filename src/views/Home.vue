<template>
  <div class="home">
    <ul class="wrapped">
      <li v-for="post in posts" :key="post.id" class="item">
        <h2>{{post.title}}</h2>
        <div class="img">
          <img v-bind:src="post.url" />
        </div>
        <router-link :to="{ name: `posts`, params: { postId: post.id }}"><button>Get detail</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { RepositoryFactory } from "./../repositories/repositoryFactory";

const PostRepository = RepositoryFactory.get("posts");
export default {
  name: "Home",
  data: () => {
    return {
      posts: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await PostRepository.get();
      this.posts = data;
    }
  }
};
</script>

<style lang="scss">
.wrapped {
  display: flex;
  flex-flow: row wrap;
}
.item {
  width: 25%;
}
.img {
  overflow: hidden;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>