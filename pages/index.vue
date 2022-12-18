<template>
  <div>
    <AppSlider />
    <section class="home-category">
        <h2>Popular category <span>all product in category &#10141;</span></h2>
        <AppProduct v-for="index in [1,2,3,4]" :key="index" />
       

      </section>

      <section class="home-category">
        <h2>In Stock <span>all product in category &#10141;</span></h2>
        <AppProduct v-for="index in [1,2,3,4]" :key="index" />

      </section>

      <section class="home-category">
        <h2>Popular <span>all product in category &#10141;</span></h2>
        <AppProduct v-for="index in [1,2,3,4]" :key="index" />

      </section>
  </div>
</template>

<script setup>
import AppSlider from '@/components/AppSlider.vue';
import AppProduct from '@/components/AppProduct.vue';

useHead({
  title: 'test',
  meta: [
    {hid: 'description',  name: 'description', content: 'My amazing site.' },
    {hid: 'keywords',  name: 'keywords', content: 'My amazing site.' }
  ],
})
  
  components:{
    AppSlider,
    AppProduct
  }

</script>