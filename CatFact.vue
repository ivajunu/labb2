<script>

import axios from 'axios'



export default {
  data() {
   return {fact: null }
  },
  created() {
    axios
    .get('https://cat-fact.herokuapp.com/facts')
    .then((fact) => {
      console.log(fact.data)
      this.fact = fact.data
    })

  }
}

</script>

<template>
  <div>
    <h3>Catfacts:</h3>
    <ul>
      <li :key="facts.id" v-for="facts in fact">{{ facts.text }}</li>
    </ul>
  </div>
</template>

<style scoped>

h3, li {
  font-size: 20px;
}
h3 {
  text-decoration: underline;
}
li {
  list-style-type: circle;
  padding: 5px;
}
div {
  margin-left: 30px;
}

</style>
