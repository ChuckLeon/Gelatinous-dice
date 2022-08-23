<template>
  <div>
      <Header />
      <div class="components">
          <Nuxt />
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '../components/global/Header.vue'
import Footer from '../components/global/Footer.vue'
export default {
  components: { Header, Footer },

}
</script>