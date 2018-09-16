<template id="home">
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">Join</div>
        </v-ons-toolbar>
        <v-ons-row>
            <v-ons-col>
                <img class="landing-page-logo" src="../assets/img/logo_white.png"/>
                <p class="slogan">Social Dinner Club</p>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row>
            <v-ons-col>
                <div class="input-container ta-l">
                    <v-ons-input class="w-100p" type="text" placeholder="Name & Surname" float v-model="name"></v-ons-input>
                </div>
                <div class="input-container ta-l">
                    <v-ons-input class="w-100p" type="email" placeholder="Email" float v-model="email"></v-ons-input>
                </div>
                <div class="input-container ta-l">
                    <v-ons-input class="w-100p" type="password" placeholder="Password" float v-model="password"></v-ons-input>
                </div>
                <v-ons-button class="gradient-btn" @click="showBookingPrompt" modifier="medium" style="margin: 6px 0">Submit</v-ons-button>
                    <!--<v-ons-list>-->
                        <!--<v-ons-list-item class="">-->
                            <!--<div class="center">-->
                                <!--<v-ons-input type="email" placeholder="Name & Surname" float v-model="name"></v-ons-input>-->
                            <!--</div>-->
                        <!--</v-ons-list-item>-->
                        <!--<v-ons-list-item class="">-->
                            <!--<div class="center">-->
                                <!--<v-ons-input type="text" placeholder="Email" float v-model="email"></v-ons-input>-->
                            <!--</div>-->
                        <!--</v-ons-list-item>-->
                        <!--<v-ons-list-item class="">-->
                            <!--<div class="center">-->
                                <!--<v-ons-input type="password" placeholder="Email" float v-model="password"></v-ons-input>-->
                            <!--</div>-->
                        <!--</v-ons-list-item>-->
                    <!--</v-ons-list>-->

                    <!--<v-ons-row>-->
                        <!--<v-ons-col>-->
                            <!--<i class="fa fa-calendar-check-o"></i>-->
                        <!--</v-ons-col>-->
                        <!--<v-ons-col>-->
                            <!--<i class="fa fa-cutlery"></i>-->
                        <!--</v-ons-col>-->
                        <!--<v-ons-col>-->
                        <!--</v-ons-col>-->
                    <!--</v-ons-row>-->
                    <!--<p>DinnerMob is a monthly social-dinner club. Once a month, a new restaurant is decided on</p>-->
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
      name: '',
      email: '',
      password: ''
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
    .input-container {
        background: #212121;
        margin: 15px;
        padding: 10px 15px;
    }
</style>
