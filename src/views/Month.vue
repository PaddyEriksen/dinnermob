<template id="month">
    <v-ons-page>
        <div class="this-month gradient-background">
            <v-ons-row>
                <v-ons-col>
                    <ons-if platform="ios other">
                        <h1 style="text-align: center">This Month</h1>
                        <h4 style="text-align: center">Tuesday, 16 October</h4>
                    </ons-if>
                    <ons-if platform="android">
                        <h4 style="text-align: center;margin-top: 20px">Tuesday, 16 October</h4>
                    </ons-if>
                    <img class="restaurant-image" src="../assets/img/restaurants/brian_lara/logo.png" width="90%"/>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                    <h1 style="text-align: center" class="m-0">Brian Lara</h1>
                    <h4 style="text-align: center" class="subheader">Linden, Johannesburg</h4>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                    <div class="about-container">
                        <v-ons-button class="gradient-btn" @click="showBookingPrompt" modifier="large" style="margin: 6px 0">RSVP</v-ons-button>
                    </div>

                    <div :class="['ta-jl more-info', {'expanded': infoExpanded}]">
                        <hr class="divider">
                        <v-ons-row>
                            <v-ons-col><img src="../assets/img/fillers/3.jpg" width="100%"></v-ons-col>
                            <v-ons-col><img src="../assets/img/fillers/4.jpeg" width="100%"></v-ons-col>
                            <v-ons-col><img src="../assets/img/fillers/5.jpeg" width="100%"></v-ons-col>
                        </v-ons-row>
                        <p>Brian Lara Rum Eatery makes for the perfect dining experience as you feel transported to a Caribbean Island as soon as you walk through the front doors. </p>
                        <h4 style="text-align: center" class="subheader ta-l">Known for</h4>
                        <ul class="known-for-list ta-l">
                            <li>
                                Extensive rum selection
                            </li>
                            <li>
                                Ribs
                            </li>
                            <li>
                                Burgers
                            </li>
                        </ul>
                    </div>

                    <v-ons-button v-if="!infoExpanded" modifier="quiet" style="margin: 0" @click="infoExpanded = !infoExpanded">More info</v-ons-button>
                    <v-ons-button v-else modifier="quiet" style="margin: 0" @click="infoExpanded = !infoExpanded">Less info</v-ons-button>
                </v-ons-col>
            </v-ons-row>
            <v-ons-alert-dialog modifier="rowfooter" :visible.sync="isVisible">
                <span slot="title">How many people?</span>
                <v-ons-input type="number" v-model="tableSize"></v-ons-input>
                <template slot="footer">
                    <v-ons-alert-dialog-button @click="isVisible = false">Cancel</v-ons-alert-dialog-button>
                    <v-ons-alert-dialog-button @click="isVisible = false">Ok</v-ons-alert-dialog-button>
                </template>
            </v-ons-alert-dialog>
            <v-ons-row>
                <v-ons-col>
                </v-ons-col>
            </v-ons-row>
        </div>
    </v-ons-page>
</template>


<script>
  export default {
    name: 'Month',
    components: {},
    data() {
      return {
        isVisible: false,
        tableSize: null,
        infoExpanded: false
      }
    },
    methods: {
      showBookingPrompt() {
        this.isVisible = true
      },
      toggleInfo() {
        this.showInfo = !this.showInfo
      }
    },
    computed: {}
  }

</script>

<style scoped>
    .about-container {
        margin: 0 30px;
        padding: 10px 15px;
    }
    .this-month {
        background: #212121;
        margin: 15px;
        padding: 10px 15px;
        width: auto;
        border-radius: 5px;
    }
    .subheader {
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        font-size: small;
        color: #dcdcdc;
    }
    .restaurant-image {
        width: auto;
        height: 200px;
    }
    .more-info {
        max-height: 0;
        overflow: hidden;
        -webkit-transition: max-height 500ms ease-in-out;
        transition:         max-height 500ms ease-in-out;
    }
    .more-info.expanded {
        max-height: 400px;
        -webkit-transition: max-height 500ms ease-in-out;
        transition:         max-height 500ms ease-in-out;
    }
    hr.divider {
        border: solid 1px #4e4e4e;
        margin: 1em 1em 2em 1em;
    }
</style>
