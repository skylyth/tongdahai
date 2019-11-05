<template>
  <div class="home-container">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Content from '@/components/content/Index.vue'
import Footer from '@/components/footer/Index.vue'
export default {
  components: {
    Header,
    Content,
    Footer
  },
  data () {
    return {
      value: 123
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  background: #fafafa;
}
</style>
