<template> 
<!-- Header Starts-->
<header>
    <nav class="ankamall-nav">
        <div class="container">
            <div class="hamb-menu" @click="activateMenu">
                <span class="hamb-line"></span>
            </div>
        </div>
        <div class="menu-bar" :style="{animation:animation,top:topPosition}">
                <ul>
                    <li v-for="pages in menus.pages" :key="pages.name" @click="closeMenu">
                        <router-link :to="pages.path">{{pages.name}}</router-link>
                    </li>
                </ul>
                
        </div>   
           
    </nav>
</header>
<!-- Header Ends-->
</template>

<script>
export default{
    data() {
    return{
        activeState:0,
        animation:'',
        topPosition:'',
    }   
    },
    methods:{
        activateMenu(){
            if(this.activeState == 0){
                this.activeState = 1
                this.topPosition = '70px';
                this.animation = 'expand 0.3s ease'  
            }else{
                this.activeState = 0
                this.topPosition = '-180px';
                this.animation = 'colapse 0.3s ease'
            } 
        },
        closeMenu(){
                this.activeState = 0
                this.topPosition = '-180px';
                this.animation = 'colapse 0.3s ease'
        }
    },
    props:['menus']
}


    

</script>