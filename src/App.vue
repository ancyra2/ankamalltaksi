<script>
import Home from './components/Home.vue'
import Heading from './components/Heading.vue'
import Footing from './components/Footing.vue'
import { RouterView } from 'vue-router'

export default{
      components:{
    Heading,
    Footing,

},
      data(){
            return{
                  menus:{
                        pages:[
                              {name:"Anasayfa", path:'/'},{name:"Hizmetlerimiz", path:"/#"},
                              {name:"Galeri",path:"/galery"},{name:"İletişim", path:'/contact'},
                              {name:"Hakkımızda",path:'/about'}
                  ],
                        
            
            }
      }
}
}
</script>

<template>
      <Heading :menus="menus"/>
      <RouterView/>
      <Footing :menus="menus"/>
</template>

<style scoped>

</style>
