<template id="page2">
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button>Back</v-ons-back-button>
            </div>
            <div class="center">{{ selectedRestaurant.name }}</div>
        </v-ons-toolbar>

        <div class="restaurant-details gradient-background">
            <v-ons-row>
                <img class="ta-c m-a" :src="getImage(selectedRestaurant.key)" width="90%"/>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                    <h1 style="text-align: center" class="m-0">{{ selectedRestaurant.name }}</h1>
                    <h4 style="text-align: center" class="location">{{ selectedRestaurant.location }}</h4>
                    <p>{{ selectedRestaurant.info }}</p>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                    <div class="">
                        <v-ons-button class="gradient-btn w-100p" @click="showBookingPrompt" modifier="large">Vote for {{ selectedRestaurant.name }}</v-ons-button>
                    </div>
                    <!--<v-ons-button modifier="quiet" style="margin: 0">More info</v-ons-button>-->
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
    name: "RestaurantDetails",
    props: {
      selectedRestaurant: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        key: 'page2',
        template: '#page2'
      }
    },
    methods: {
      getImage(restaurant) {
        return require('../assets/img/restaurants/' + restaurant + '/logo.png')
      }
    }
  }
</script>

<style scoped>

    .about-container {
        margin: 0 30px;
        padding: 10px 15px;
    }
    .restaurant-details {
        background: #212121;
        margin: 15px;
        padding: 10px 15px;
        width: auto;
        border-radius: 5px;
    }
    .location {
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        font-size: small;
        color: #dcdcdc;
    }
</style>