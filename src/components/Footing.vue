<template>
<footer>
<div class="footer">
   <div class="footer-wrapper">
      <div class="container">
         <div class="row">
            <div class="col-6">
               <p class="footer-header">Ankamall Taksi</p>
               <ul>
                  <li v-for="menu in menus " :key="menu">
                     <a href="#">{{menu}}</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div class="rigths"><p>Ankamall Taksi tüm hakları saklıdır.</p></div>
</div>

</footer>
</template>

<script>
   export default{
    props:['menus']
   }

</script>