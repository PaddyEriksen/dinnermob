<template>
  <div class="home">
    <sign-up/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Landing',
  components: {
    SignUp
  }
}
</script>
