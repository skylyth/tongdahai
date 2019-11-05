<template>
  <div class="home-container">
    <Header />
    <div class="content">
      <JudicaliCard />
      <div class="right-content">
        <RightCard />
        <RightCard />
      </div>
    </div>
    <div class="content">
      <JudicaliCard />
      <ContributionCard />
    </div>
    <div class="content">
      <JudicaliCard />

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import JudicaliCard from '@/components/content/JudicaliCard.vue'
import RightCard from '@/components/content/RightCard.vue'
import ContributionCard from '@/components/content/ContributionCard.vue'
import Footer from '@/components/footer/Index.vue'
export default {
  components: {
    Header,
    JudicaliCard,
    RightCard,
    Footer,
    ContributionCard
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
  .content{
    height: 480px;
    width: 1200px;
    padding-top: 15px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .right-content{
      width: 320px;
      height: 468px;
    }
  }
}
</style>
