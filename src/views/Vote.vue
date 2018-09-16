<template id="main">
    <v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)"   :options="{animation: 'lift',animationOptions: {duration: 0.2, timing: 'ease-in'}}"></v-ons-navigator>
</template>


<script>
import RestaurantList from '@/views/RestaurantList.vue'

export default {
  name: 'Vote',
  components: {
  },
  data() {
    return {
      test: true,
      pageStack: [RestaurantList]
    }
  },
  computed: {
  }
}

</script>