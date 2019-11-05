<template>
  <div class="card-container">
        <div class="card-title">推荐</div>
        <div class="card-content">
          <span>法院</span>
          <span>借贷</span>
          <span>司法</span>
          <span>词条</span>
          <span>民事纠纷</span>
          <span>词条库</span>
          <span>词条</span>
          <span>民事纠纷</span>
          <span>词条库</span>
          <span>词条</span>
          <span>民事纠纷</span>
          <span>词条库</span>
          <span>词条</span>
          <span>民事纠纷</span>
          <span>词条库</span>
          <span>民事纠纷</span>
          <span>词条库</span>
          <span>民事纠纷</span>
          <span>词条</span>
          <span>民事纠纷</span>
          <span>词条库</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'JucitialCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
      .card-container{
        height: 220px;
        margin-top: 28px;
        width: 320px;
        background: #fff;
        position: relative;
        box-sizing: border-box;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        &:first-of-type{
          margin-top: 0
        }
        .card-title{
            height: 80px;
            font-size: 20px;
            line-height: 80px;
            text-indent: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }
        .card-content{
          height: 134px;
          width: 308px;
          padding: 12px
        }
        span{
          font-size: 12px;
          padding: 4px 8px;
          display: block;
          float: left;
        }
    }
</style>
