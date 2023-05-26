<template>
<!-- Footer Starts-->
<footer>
<div class="footer">
   <div class="footer-wrapper">
      <div class="container">
         <div class="row justify-content-center align-items-center">
            <div class="col-5">
               <p class="footer-header">Ankamall Taksi</p>
               <ul>
                    <li v-for="pages in menus.pages" :key="pages.name">
                        <a :href="pages.path">{{pages.name}}</a>
                        
                    </li>
                </ul>
            </div>
            <div class="col-7 tel">
               <p>Adres : Gazi, Konya Devlet Yolu Ankamall Alışveriş Merkezi No:2, 06560 Yenimahalle/Ankara</p>
               <p>Telefon: 0312 541 15 85</p>
            </div>
         </div>
      </div>
   </div>
   <div class="rigths"><p>Ankamall Taksi tüm hakları saklıdır.</p></div>
</div>
</footer>
<!-- Footer Ends-->
</template>

<script>
   export default{
    props:['menus']
   }

</script>