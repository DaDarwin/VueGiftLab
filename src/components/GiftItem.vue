<template>
 <div><img @click="openGift(giftProp.id)" :src="giftProp.url" alt="That Sucks I guess" class="img-fluid m-1"></div>
 <span>{{ giftProp.tag }}</span>
</template>

<script>
import { giftService } from '../services/GiftService';



  export default {
    props: {giftProp: {required: true}},
    setup(){

      return {
        async openGift(giftId){
          try {
            console.log(giftId)
            giftService.openGift(giftId)
          } 
          catch (error) {
            console.error(error)
          }
        }
      }
    }
  };
</script>


<style>
</style>