<template id="main-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>

    <div style="height: 100%; display: flex; flex-direction: column">
      <div style="margin: 1em; display: flex; justify-content: space-around;" :class="['main-container', {'expanded': expanded}]">
          <div style="align-self: flex-start">

            <div :class="['logo-container', {'shift-logo': shiftLogo}]">
              <img src="../assets/img/logo.png" :class="['logo', {'visible': showLogo}]"/>
            </div>
            <div :class="['input', {'visible': showInput}, {'expanded': expandInput}]" style="align-self: center">
              <v-ons-list-item>
                <div class="center">
                  <v-ons-input placeholder="Input your name" float v-model="username"></v-ons-input>
                </div>
              </v-ons-list-item>
              <v-ons-list-item>
                <div class="center">
                  <v-ons-input placeholder="Input your name" float v-model="password"></v-ons-input>
                </div>
              </v-ons-list-item>
              <v-ons-row>
                <!--<v-ons-col>-->
                  <!--<button @click="authenticate('github')">auth Github</button>-->
                  <!--<button @click="authenticate('facebook')">auth Facebook</button>-->
                  <!--<button @click="authenticate('google')">auth Google</button>-->
                  <!--<button @click="authenticate('twitter')">auth Twitter</button>-->
                <!--</v-ons-col>-->
              </v-ons-row>
            </div>
            <!--<div style="align-self: flex-end">-->
              <!--<v-ons-row>-->
                <!--<v-ons-col><div style="text-align: right;margin-right: 10px"><v-ons-icon icon="fa-instagram"></v-ons-icon></div></v-ons-col>-->
                <!--<v-ons-col><div style="text-align: left;margin-left: 10px"><v-ons-icon icon="fa-facebook"></v-ons-icon></div></v-ons-col>-->
              <!--</v-ons-row>-->
            <!--</div>-->
          </div>
      </div>
    </div>

    <!--<p style="text-align: center">-->
      <!--<v-ons-button @click="$ons.notification.alert('Hello World!')">-->
        <!--Click me!-->
      <!--</v-ons-button>-->
    <!--</p>-->
  </v-ons-page>
</template>

<style>
  .visible {
    opacity: 1 !important;
  }
  .logo {
    width: 80%;
    max-width: 300px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .input {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .logo-container {
    align-self: center;
    margin-top: 25vh;
    transition: margin-top 1s ease;
  }
  .shift-logo {
    margin-top: 10vh !important;
  }
  .main-container {
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 2px 6px #a9a9a9;
    height: 0;
    transition: height 1s ease-out;
  }
  .main-container.expanded {
    height: 100%
  }
</style>

<script>

  export default {
    name: 'Landing',
    components: {

    },
    data () {
      return {
        showLogo: false,
        showInput: false,
        shiftLogo: false,
        expandInput: false,
        username: null,
        password: null,
        expanded: false
      }
    },
    mounted () {
      this.loadContiners()
    },
    methods: {
      loadContiners () {
        setTimeout(() => this.expanded = true, 500);
        setTimeout(() => this.showLogo = true, 1500);
        setTimeout(() => this.shiftLogo = true, 2300);
        setTimeout(() => this.showInput = true, 3500);
        setTimeout(() => this.expandInput = true, 3500);
      },
      authenticate: function (provider) {
        this.$auth.authenticate(provider).then(function () {
          // Execute application logic after successful social authentication
        })
      }
    }
  }
</script>