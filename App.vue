<script>
import NavBar from './components/NavBar.vue'
import FooterView from './components/FooterView.vue';

  // import CatFact from './components/CatFact.vue'
  // import CatBreeds from './components/CatBreeds.vue'


  export default {
    components: {
      NavBar,
      FooterView
    }
  }
</script>

<template>
  <NavBar />
  <FooterView />
</template>

<style>
body {
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(248, 245, 240);
}
</style>
