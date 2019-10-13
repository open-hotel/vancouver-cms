<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import './css/main.css'
export default {
  name: 'App',
};
</script>

<style>
 body, html {
   margin: 0;
   overflow-y: auto!important;
   overflow-x: hidden!important;
 }

</style>
