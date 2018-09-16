<template id="home">
    <v-ons-page>

        <v-ons-row vertical-align="center" :class="['header-container gradient-background', {'expanded': expanded}]">
            <v-ons-col>
                <div class="logo-and-slogan-container">
                    <transition name="fade">
                        <div v-show="showLogo">
                            <img class="landing-page-logo" src="../assets/img/logo_white.png"/>
                        </div>
                    </transition>
                    <transition name="slide-fade">
                        <p v-show="showSlogan" class="slogan">Social Dinner Club</p>
                    </transition>
                    <v-ons-row class="feed-links-row">
                        <v-ons-col>
                            <transition name="fade">
                                <v-ons-button v-show="showLinks" class="link-button" @click="toAbout()" modifier="quiet"
                                              style="margin: 6px 0">About
                                </v-ons-button>
                            </transition>
                        </v-ons-col>
                        <v-ons-col>
                            <transition name="fade">
                                <v-ons-button v-show="showLinks" class="link-button" @click="toJoin()" modifier="quiet" style="margin: 6px 0">
                                    Join
                                </v-ons-button>
                            </transition>
                        </v-ons-col>
                    </v-ons-row>
                </div>
            </v-ons-col>
        </v-ons-row>

        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/1.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/2.jpg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/3.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/4.jpeg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/5.jpeg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/1.jpg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/3.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/5.jpeg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/1.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/2.jpg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/3.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/4.jpeg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/5.jpeg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/1.jpg" width="100%"></v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col><img src="../assets/img/fillers/3.jpg" width="100%"></v-ons-col>
            <v-ons-col><img src="../assets/img/fillers/5.jpeg" width="100%"></v-ons-col>
        </v-ons-row>

    </v-ons-page>
</template>


<script>
import About from '@/views/About.vue'
import Join from '@/views/Join.vue'

export default {
  name: 'Feed',
  components: {
  },
  data() {
    return {
      showLogo: false,
      showLinks: false,
      showSlogan: false,
      expanded: true
    }
  },
  methods: {
    toAbout() {
      this.$emit('push-page', About);
    },
    toJoin() {
      this.$emit('push-page', Join);
    },
    loadHeader() {
      this.showLogo = true
      setTimeout(() => this.showSlogan = true, 500);
      setTimeout(() => this.expanded = false, 1900);
      setTimeout(() => {this.showLinks = true;}, 3200);
    }
  },
  computed: {
  },
  mounted() {
    this.loadHeader()
  }
}

</script>

<style scoped>
    .landing-page-logo {
        height: 65px;
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
    .logo-and-slogan-container {
        height: 130px;
    }
    .link-button {
        background: none !important;
    }
    .feed-links-row {
        height: 40px;
    }
    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(30px);
        opacity: 0;
    }
    .header-container {
        background: #0d0d0d;
        height: 180px;
        -webkit-transition: height 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        transition:         height 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .header-container.expanded {
        height: 100vh;
    }
</style>
