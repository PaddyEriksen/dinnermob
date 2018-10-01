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

                    <v-ons-button class="link-button" v-if="!infoExpanded" modifier="quiet" style="margin: 0" @click="infoExpanded = !infoExpanded">More info</v-ons-button>
                    <v-ons-button class="link-button" v-else modifier="quiet" style="margin: 0" @click="infoExpanded = !infoExpanded">Less info</v-ons-button>
                </v-ons-col>
            </v-ons-row>
            <v-ons-alert-dialog modifier="rowfooter" :visible.sync="isVisible">
                <span slot="title">RSVP</span>
                <v-ons-input required class="rsvp-input w-100p" type="number" v-model="partySize" placeholder="Size of table"></v-ons-input>
                <v-ons-input required class="rsvp-input w-100p" type="text" v-model="bookingName" placeholder="Booking name"></v-ons-input>
                <p><strong>Please note:</strong><br><br>This is <strong>not</strong> a table booking. You are required to book with the restaurant directly.<br><br>
                    RSVPing with DinnerMob makes you and your table eligible for members' specials on the evening</p>
                <template slot="footer">
                    <v-ons-alert-dialog-button @click="isVisible = false">Cancel</v-ons-alert-dialog-button>
                    <v-ons-alert-dialog-button @click="isVisible = false">RSVP</v-ons-alert-dialog-button>
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
        partySize: null,
        bookingName: null,
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
    .rsvp-input {
        color: #202020 !important;
        padding: 10px 0;
    }
    .rsvp-input * {
        color: #202020 !important;
    }
    .text-input {
        color: #202020 !important;
    }
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
