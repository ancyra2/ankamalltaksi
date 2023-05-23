<script>
import Home from './components/Home.vue'
import Heading from './components/Heading.vue'
import Footing from './components/Footing.vue'

export default{
      components:{
            Home,
            Heading,
            Footing,
      },
      data(){
            return{
                  menus:["Anasayfa","Hizmetlerimiz","Galeri","İletişim","Hakkımızda"]
            }
      }
}
</script>

<template>
      <Heading :menus="menus"/>
      <Home/>
      <Footing :menus="menus"/>
</template>

<style scoped>

</style>
