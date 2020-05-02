<template>
  <div class="home">
    <h1>Dog rating app</h1>
    <img alt="Vue logo" :src="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/logo.png').replace('/js/', '/'),
    }
  },
}
</script>
