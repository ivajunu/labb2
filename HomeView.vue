<script>
import CatFact from '../components/CatFact.vue'


export default {
    components: {
       CatFact,
      }
}
</script>



<template>
<h2>Fakta om katter</h2>
<p>Här tillhandahålls kattfakta!</p>
<div>
<CatFact />
</div>
</template>

<style scoped>
p {
    font-size: 20px;
    font-weight: 300;
    padding-left: 30px;
}
h2 {
    margin-left: 30px;
}
</style>
