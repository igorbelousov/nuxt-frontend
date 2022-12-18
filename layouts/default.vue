<template>
  <div class="app">
    <AppHeader />
    <AppNav />
    <div class="content">
      <div class="container">

        <slot />

      </div>
    </div>
    
  </div>
  <AppFooter />

 

</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

  components:{
    AppHeader,
    AppNav,
    AppFooter
  }




</script>