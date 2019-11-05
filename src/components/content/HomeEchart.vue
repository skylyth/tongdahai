<template>
  <div class="card-container">
      <div class="card-title">本周创作排行榜</div>
      <div class="card-content">

      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.card-container{
    height: 460px;
    width: 330px;
    background: #fff;
    position: relative;
    box-sizing: border-box;
    border-top: 2px solid orange;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    .card-title{
        height: 80px;
        font-size: 20px;
        color: rgb(3, 108, 237);
        line-height: 80px;
        text-indent: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .card-items{
      position: relative;
      height: 60px;
      margin-top: 10px;
      .icon{
        width: 8px;
        height: 8px;
        background: rgb(0, 132, 255);
        transform: rotate(120deg);
        position: absolute;
        left: 23px;
        top: 20px;
      }
      p{
        font-size: 14px;
        color: rgb(51, 51, 51);
        line-height: 20px;
        position: absolute;
        left: 60px;
        top: 14px;
      }
      label{
        font-size: 12px;
        color: rgb(161, 161, 161);
        line-height: 20px;
        position: absolute;
        left: 60px;
        top: 40px;
      }
    }
    .page-icon{
      width: 60px;
      height: 30px;
      position: absolute;
      right: 20px;
      bottom: 10px;
      .left{
        width: 24px;
        height: 24px;
        background: url('../../assets/content/left-y.png');
        position: absolute;
        right: 2px;
        top: 4px;
      }
      .right{
        width: 24px;
        height: 24px;
        background: url('../../assets/content/right.png');
        position: absolute;
        left: 2px;
        top: 4px;
      }
    }
}
</style>
