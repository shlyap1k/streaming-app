<template>
  <v-container>
    <v-card v-for="post in posts" :key="post.id">
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        {{ post.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'PostsList',
  computed: {
    ...mapGetters('posts', {
      posts: 'allPosts',
    })
  },
  created () {
    this.$store.dispatch('posts/getAllPosts')
  }
}
</script>

