<template id="main">
  <v-ons-page>

      <!--<ons-if platform="ios other">-->
          <!--<v-ons-toolbar v-if="page === 'homePage'">-->
              <!--<div class="left">-->
              <!--</div>-->
              <!--<div class="center">-->
                  <!--<img class="toolbar-logo-ios" src="../assets/img/logo_white.png"/>-->
              <!--</div>-->
              <!--<div class="right">-->
              <!--</div>-->
          <!--</v-ons-toolbar>-->

          <!--<v-ons-toolbar v-else>-->
              <!--<div class="left">-->
              <!--</div>-->
              <!--<div class="center">{{ title }}</div>-->
              <!--<div class="right">-->
              <!--</div>-->
          <!--</v-ons-toolbar>-->
      <!--</ons-if>-->

    <v-ons-tabbar position="auto" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from '@/views/Home.vue'
import Month from '@/views/Month.vue'
import Settings from '@/views/Settings.vue'
import Vote from '@/views/Vote.vue'

export default {
  name: 'Main',
  components: {
    Home,
    Month,
    Settings,
    Vote
  },
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'fa-newspaper-o',
          label: 'Home',
          page: Home,
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'fa-calendar',
          label: 'This Month',
          page: Month,
          key: "monthPage"
        },
        {
          icon: this.md() ? null : 'ion-podium',
          label: 'Vote',
          page: Vote,
          key: "votePage"
        },
        {
          icon: this.md() ? null : 'fa-cog',
          label: 'Settings',
          page: Settings,
          key: "settingsPage"
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    },
    page() {
      return this.tabs[this.activeIndex].key;
    }
  }
}
</script>

<style>
    .toolbar-logo-ios {
        height: 44px;
        width: auto;
    }

    .toolbar-logo-a {
        height: 56px;
        width: auto;
    }
</style>