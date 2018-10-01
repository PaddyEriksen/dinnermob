<template id="home">
    <v-ons-page>

        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">Join</div>
        </v-ons-toolbar>

        <transition enter-active-class="animated fadeIn" mode="out-in">
            <v-ons-row v-show="this.mailSignup">
                <v-ons-col>
                    <div class="input-container ta-l">
                        <v-ons-input class="w-100p" type="text" placeholder="Name & Surname" float v-model="name"></v-ons-input>
                    </div>
                    <div class="input-container ta-l">
                        <ons-if platform="android">
                            <label style="color:#5f5f5f">Region(s)</label>
                        </ons-if>
                        <ons-if platform="ios other">
                            <label style="font-size: 16px;color:#999">Region(s)</label>
                            <hr style="border-color: #999;">
                        </ons-if>
                        <v-ons-list-item v-for="(region, $index) in regions" :key="region" tappable>
                            <label class="left">
                                <v-ons-checkbox :input-id="'checkbox-' + $index" :value="region" v-model="checkedRegions"></v-ons-checkbox>
                            </label>
                            <label class="center" :for="'checkbox-' + $index">
                                {{ region }}
                            </label>
                        </v-ons-list-item>
                    </div>
                    <div class="input-container ta-l">
                        <v-ons-input class="w-100p" type="email" placeholder="Email" float v-model="email"></v-ons-input>
                    </div>
                    <div class="input-container ta-l">
                        <v-ons-input class="w-100p" type="password" placeholder="Password" float v-model="password"></v-ons-input>
                    </div>
                    <v-ons-button class="gradient-btn" @click="" style="margin: 6px 0">Submit</v-ons-button>
                    <br>
                    <v-ons-button class="gradient-btn" @click="toggleMailSignup" modifier="quiet" style="margin: 6px 0">Back</v-ons-button>
                </v-ons-col>
            </v-ons-row>
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
            <v-ons-row v-show="!this.mailSignup" class="signin-container gradient-background" vertical-align="center">
                <v-ons-col>
                    <img class="landing-page-logo" src="../assets/img/logo_white.png"/>
                    <p class="slogan">Social Dinner Club</p>
                </v-ons-col>
                <v-ons-row>
                    <v-ons-col>
                        <v-ons-row>
                            <v-ons-col class="mB-20">
                                <v-ons-button class="ta-l facebook-signin fw-500" @click="" style="margin: 6px 0"><i class="va-m fa fa-facebook-official mR-5"></i> Sign in with Facebook</v-ons-button>
                            </v-ons-col>
                        </v-ons-row>
                        <v-ons-row>
                            <v-ons-col class="mB-20">
                                <a href="#"><img class="google-signin" width="100%" src="../assets/img/signin/google_signin.png"/></a>
                            </v-ons-col>
                        </v-ons-row>
                        <v-ons-row>
                            <v-ons-col class="mB-20">
                                <ons-if platform="android">
                                    <v-ons-button modifier="light" class="ta-c mail-signup" @click="toggleMailSignup()"><i class="va-m fa fa-envelope mR-5"></i> Sign up with Email</v-ons-button>
                                </ons-if>
                                <ons-if platform="ios other">
                                    <v-ons-button modifier="quiet" class="ta-c mail-signup" @click="toggleMailSignup()"><i class="va-m fa fa-envelope mR-5"></i> Sign up with Email</v-ons-button>
                                </ons-if>
                            </v-ons-col>
                        </v-ons-row>
                    </v-ons-col>
                </v-ons-row>
            </v-ons-row>
        </transition>
    </v-ons-page>
</template>


<script>
export default {
  name: 'Join',
  components: {
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      regions: ['Joburg', 'Pretoria', 'Cape Town'],
      checkedRegions: [],
      mailSignup: false
    }
  },
  methods: {
    toggleMailSignup() {
      this.mailSignup = !this.mailSignup
    }
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
    .facebook-signin {
        background-color: #4267B2;
        padding: 11px;
        width: 247px;
        color: white
    }

    .facebook-signin  i {
        font-size: 27px;
        margin-right: 16px !important;
    }

    .google-signin {
        width: 254px
    }

    .mail-signup {
        width: 247px;
        padding: 11px;
        color: white
    }

    .mail-signup  i {
        font-size: 23px;
        margin-right: 16px !important;
    }

    .signin-container {
        height: 100%;
        padding-top: 5vh;
        padding-bottom: 20vh;
    }
</style>
