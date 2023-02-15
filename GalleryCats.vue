<script>
import CatPics from '../components/CatPics.vue'

export default {
  components: {
    CatPics
  }
}

</script>

<template>
<h2>Välkommen till galleriet, här kan du titta på bilder på fina och roliga katter.</h2>

<CatPics enjoy="Njut av katten/katterna!" />

</template>

<style scoped>
h2 {
  margin-left: 30px;
}
</style>
