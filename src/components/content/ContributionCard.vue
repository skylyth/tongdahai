<template>
  <div class="card-container">
        <div class="card-title">贡献排行榜</div>
        <div class="card-content">
          <div class="card-tit">
              法院
          </div>
          <p>
              <span>1</span>
              <label for="">泉州市风泽县人名法院</label>
          </p>
          <p>
              <span>2</span>
              <label for="">惠安县人民法院</label>
          </p>
          <p>
              <span>3</span>
              <label for="">永春县人名法院</label>
          </p>
        </div>
        <div class="card-content" style="margin-top:20px">
          <div class="card-tit">
              团队
          </div>
          <p>
              <span>1</span>
              <label for="">泉州市风泽县人名法院</label>
          </p>
          <p>
              <span>2</span>
              <label for="">惠安县人民法院</label>
          </p>
          <p>
              <span>3</span>
              <label for="">永春县人名法院</label>
          </p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ContributionCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
      .card-container{
        height: 468px;
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
          padding: 12px;
          .card-tit{
              font-size: 16px;
              color: rgb(153, 153, 153);
              line-height: 40px;
          }
          p{
              width: 300px;
              height: 24px;
              margin-top: 10px;
          }
          span{
              width: 18px;
              height: 18px;
              background: red;
              display: block;
              font-size: 12px;
              color: #fff;
              line-height: 18px;
              float: left;
              text-align: center;
          }
          label{
              display: block;
              margin-left: 15px;
              font-size: 12px;
              line-height: 18px;
              float: left;
          }
        }
    }
</style>
