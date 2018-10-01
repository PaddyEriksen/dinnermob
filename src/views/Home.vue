<template id="home">
    <v-ons-navigator :page-stack="pageStack" @push-page="pageStack.push($event)"  :options="{animation: 'lift',animationOptions: {duration: 0.2, timing: 'ease-in'}}"></v-ons-navigator>
</template>


<script>
import Feed from '@/views/Feed.vue'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      pageStack: [Feed]
    }
  },
  methods: {
  },
  computed: {
  }
}

</script>

<style scoped>
    .landing-page-logo {
        height: 50px;
        width: auto;
        margin-top: 15px;
    }
    .welcome-message {
        padding: 0;
        margin-bottom: 0;
    }
    .slogan {
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        font-size: small;
        color: #dcdcdc;
    }
</style>
