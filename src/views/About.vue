<template id="home">
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">About</div>
        </v-ons-toolbar>
        <v-ons-row>
            <v-ons-col>
                <img class="landing-page-logo" src="../assets/img/logo_white.png"/>
                <p class="slogan">Social Dinner Club</p>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col>
                <div class="about-container">
                    <v-ons-row>
                        <p>DinnerMob is a monthly social-dinner club etc. etc. etc.</p>
                    </v-ons-row>
                    <v-ons-row>
                        <v-ons-col>
                            <i class="fa fa-calendar-check-o"></i>
                        </v-ons-col>
                        <v-ons-col>
                            <i class="fa fa-cutlery"></i>
                        </v-ons-col>
                        <v-ons-col>
                            <i class="fa fa-money"></i>
                        </v-ons-col>
                    </v-ons-row>
                </div>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>


<script>
export default {
  name: 'About',
  components: {
  },
  data() {
    return {
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
        margin-top: 30px;
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
    .about-container {
        background: #212121;
        margin: 30px;
        padding: 10px 15px;
    }
</style>
