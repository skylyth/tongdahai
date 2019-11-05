<template>
  <div class="content">
    <div class="container">
        <HomeCard />
        <HomeCard />
        <HomeEchart />
    </div>
    <div class="container">
        <HomeCard />
        <HomeCard />
        <HomeEchart />
    </div>
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue'
import HomeEchart from './HomeEchart.vue'
export default {
  name: 'Content',
  components: {
    HomeCard,
    HomeEchart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container{
    height: 480px;
    width: 1200px;
    padding-top: 15px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center
}
</style>
