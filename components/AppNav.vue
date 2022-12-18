<template>
  <nav class="main-nav">
    <div class="container">
      <span class="icon-burger burger" @click="menu"></span>
      <form action="" class="search">
        <input type="text" placeholder="Search">
        <button class="icon-search">
        </button>
      </form>
      <div class="buttons">
        <span class="icon-star"></span>
        <span class="icon-basket"><span class="badget-qty">{{basketQty}}</span></span>
        <span class="icon-user"></span>
      </div>
    </div>
  </nav>

  <div id="blind" v-show="show">
    <span class="icon-cross" @click="menu"></span>
    <ul>
      <li><nuxt-link to="#">catalog</nuxt-link></li>
      <li><nuxt-link to="#">delivery</nuxt-link></li>
      <li><nuxt-link to="#">terms</nuxt-link></li>
      <li><nuxt-link to="#">contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script setup>

const basketQty = ref(2)
const show = ref(false)
const menu = ()=>{
    show.value = !show.value
 }
</script>
