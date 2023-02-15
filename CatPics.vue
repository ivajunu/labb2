
<script>

import axios from 'axios';

export default {
  data() {
    return {
      catpics: null,
      picnumber: null,
      choosen: '',
    }
  },
  methods: {
    CatPictures() {
      this.choosen= this.enjoy
      this.catpics=null,
      axios.get('https://api.thecatapi.com/v1/images/search?limit=' + this.picnumber, {
        headers: {
          'x-api-key': 'live_gwnJmk68jPoKojU8DiNlD0vJ98LzNLi3s2awIBOzoECZiiar1adhWdtgEX6aGWKJ'
        }
      })
      .then((catpics) => {
        console.log(catpics.data)
        this.catpics= catpics.data
        console.log(this.picnumber)
      })
  }
  },
  props: ['enjoy']
}
</script>

<template>
  <div>
    <h2>Bilder och GIFs på underbart roliga och fina katter!</h2>
      <p>Här kan välja hur många bilder på katter du vill se. Du kan välja från 1 bild till 100 bilder. Det rekommenderas att välja mellan 1-50. Du kan välja 100 bilder men det tar en stund för bilderna att ladda.</p>
      <input v-model="picnumber" type="number" min="0" />
     <button @click="CatPictures">Se Bilder</button>
    </div>

  <div v-if="picnumber && Number">
    <p>{{ choosen }}</p>
    <ul>
      <li :key="catpic.id" v-for="catpic in catpics">
      <img :src="catpic.url" alt="Bild på kattrasen" />
      </li>
    </ul>
  </div>
  <div v-else>
    <p id="error">Du måste ange ett nummer!</p>
  </div>


</template>

<style scoped lang="scss">

  $error: rgb(201, 24, 24);
  $buttoncolor: rgb(110, 114, 114);
  $buttontext: antiquewhite;

img {
  max-width: 350px;
  gap: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-grow: 1;
  list-style-type: none;
  padding: 30px;
}
button {
  font-size: 15px;
  color: $buttontext;
  background-color: $buttoncolor;
  border-radius: 10%;
  padding: 10px;
  font-weight: 700;
  border-color: $buttoncolor;
}
input {
  width: 50px;
  border-radius: 10%;
  font-size: 20px;
  background-color: $buttoncolor;
  border-color: $buttoncolor;
  margin: 10px;
  color: $buttontext;

}
p {
  font-size: 20px;
}
#error {
  color: $error;
}
div {
  margin-left: 30px;
}
</style>
