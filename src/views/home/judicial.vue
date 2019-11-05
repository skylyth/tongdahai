<template>
  <div class="home-container">
    <Header />
    <div class="content">
      <div class="card-container">
        <div class="card-title">推荐</div>
        <div class="card-content">
            <div class="card-items">
              <div class="icon"></div>
              <p>"两高" 深入开展主题教育："深学笃行 确保实效"</p>
              <label for="">泉州中院 张某某</label>
              <span>发布日期：2019-07-10</span>
            </div>
            <div class="card-items">
              <div class="icon"></div>
              <p>"两高" 深入开展主题教育："深学笃行 确保实效"</p>
              <label for="">泉州中院 张某某</label>
              <span>发布日期：2019-07-10</span>
            </div>
            <div class="card-items">
              <div class="icon"></div>
              <p>"两高" 深入开展主题教育："深学笃行 确保实效"</p>
              <label for="">泉州中院 张某某</label>
              <span>发布日期：2019-07-10</span>
            </div>
            <div class="card-items">
              <div class="icon"></div>
              <p>"两高" 深入开展主题教育："深学笃行 确保实效"</p>
              <label for="">泉州中院 张某某</label>
              <span>发布日期：2019-07-10</span>
            </div>
            <div class="card-items">
              <div class="icon"></div>
              <p>"两高" 深入开展主题教育："深学笃行 确保实效"</p>
              <label for="">泉州中院 张某某</label>
              <span>发布日期：2019-07-10</span>
            </div>
          </div>
          <div class="page-icon">
            <div class="left"></div>
            <div class="right"></div>
          </div>
      </div>
    </div>
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
  .content{
    height: 480px;
    width: 1200px;
    padding-top: 15px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
      .card-container{
        height: 460px;
        width: 870px;
        background: #fff;
        position: relative;
        box-sizing: border-box;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        .card-title{
            height: 80px;
            font-size: 20px;
            line-height: 80px;
            text-indent: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }
        .card-items{
          position: relative;
          height: 56px;
          margin-top: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          padding-bottom: 10px;
          .icon{
            width: 8px;
            height: 8px;
            background: rgb(0, 132, 255);
            transform: rotate(120deg);
            position: absolute;
            left: 23px;
            top: 10px;
          }
          p{
            font-size: 14px;
            color: rgb(51, 51, 51);
            line-height: 20px;
            position: absolute;
            left: 60px;
            top: 4px;
          }
          label{
            font-size: 12px;
            color: rgb(161, 161, 161);
            line-height: 20px;
            position: absolute;
            left: 60px;
            top: 30px;
          }
          span{
            font-size: 12px;
            color: rgb(161, 161, 161);
            line-height: 20px;
            position: absolute;
            right: 30px;
            top: 30px;
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
  }
}
</style>
