<template>
  <section class="row justify-content-center">
    <div v-for="gift in gifts" class="col-2 d-flex justify-content-center align-items-center flex-column border border-solid border-dark m-2 rounded">
        <GiftItem :giftProp="gift"/>
    </div>

  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { giftService } from '../services/GiftService';
import GiftItem from '../components/GiftItem.vue';
import Pop from '../utils/Pop';


export default {
  setup() {

    onMounted(()=>{
      getGifts()
    })

    async function getGifts(){
      try {await giftService.getGifts()}
      catch (error) {Pop.error(error)}
    }

    return {
      gifts: computed(()=> AppState.gifts)
    }
  },
  components: { GiftItem },
}

</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
