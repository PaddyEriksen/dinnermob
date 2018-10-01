<template id="page1">
    <v-ons-page>
        <div class="restaurant-list">
            <v-ons-row @click="push(restaurant)" class="restaurant-list-item" :key="restaurant.key" v-for="restaurant in restaurants">
                <v-ons-row>
                    <v-ons-col vertical-align="center" width="140px" class="restaurant-logo-container">
                        <img width="80px" :src="getImage(restaurant.key) " />
                    </v-ons-col>
                    <v-ons-col vertical-align="center">
                        <h4 class="restaurant-name mB-0">{{ restaurant.name }}</h4>
                        <p class="restaurant-location mT-5 tt-u fsz-sm">{{ restaurant.location }}</p>
                    </v-ons-col>
                </v-ons-row>
            </v-ons-row>
        </div>
    </v-ons-page>
</template>

<script>
  import RestaurantDetails from '@/views/RestaurantDetails.vue'
  export default {
    name: "RestaurantList",
    data() {
      return {
        key: 'RestaurantList',
        template: '#RestaurantList',
        image: '../assets/img/restaurants/tigers_milk/logo.png',
        restaurants: [
          {
            key: 'collection',
            name: "Bolton Road Collection",
            location: 'Rosebank',
            info: 'Visit our stunning Contemporary Restaurant and Cocktail Bar in the heart of Rosebank! Secure parking available on Newport Road.'
          },
          {
            key: 'tigers_milk',
            name: "Tiger's Milk",
            location: 'Bryanston',
            info: 'Epitomising handcrafted goodness with a menu that takes pizza, grills and burgers to the next level, pair these with our locally made Tiger’s Milk Lager and you’re sure to leave satisfied.'
          },
          {
            key: 'the_taphouse',
            name: "The Taphouse",
            location: 'Parkhurst',
            info: 'The Taphouse is an eclectic bar and kitchen situated on trendy 4th Ave in the heart of Parkhurst, JHB.'
          },
          {
            key: 'mootee',
            name: "mootee",
            location: 'Melville',
            info: 'With 120 seats, an outside rooftop deck, open air alley seating and a private lounge, Mootee trusts to bend creative boundaries by challenging customer’s understanding of food and drink culture. Through serving unique food and creative drinks.'
          },
          {
            key: 'momo',
            name: "Momo Baohaus",
            location: 'Illovo',
            info: 'We are on a mission to create an exciting dining experience without compromise. We want to bring you food that tastes great and is made from freshest ingredients.'
          },
        ]
      }
    },
    methods: {
      push(restaurant) {
        this.$emit('push-page', {
          ...RestaurantDetails, // Or 'extends: newPage'
          onsNavigatorProps: {
            selectedRestaurant: restaurant,
            // ...
          }
        });
      },
      getImage(restaurant) {
        return require('../assets/img/restaurants/' + restaurant + '/logo.png')
      }
    }
  }
</script>

<style scoped>
.restaurant-logo-container {
    background-color: #272727;
    border-radius: 5px;
}

.restaurant-list {
    flex-direction: column;
    display: flex;
    height: 100%;
}

.restaurant-list .restaurant-list-item:first-child {
    margin-top: 15px;
}

.restaurant-list .restaurant-list-item:last-child {
    margin-bottom: 15px;
}

.restaurant-list-item {
    flex: 1;
    background: linear-gradient(69deg, #212121 0%, #212121 70%, #272727 70%, #272727 100%) !important;
    margin: 7.5px 15px;
    padding: 10px 15px;
    width: auto;
    border-radius: 5px;
}
.restaurant-name {

}
.restaurant-location {
    color: #a9a9a9
}
</style>