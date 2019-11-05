<template>
    <div class="search-content">
        <div class="search-container">
          <div class="left_part">
            <span>全部</span>
            <img src="../../assets/header/row.png">
        </div>
        <div class="right-content">
            <input type="text" value="经济">
            <img src="../../assets/header/search.png">
        </div>
      </div>
      <div class="hot-link">
          <div class="hotspose">
            <span class="hot-tit">热点词汇 ></span>
            <span class="hot-items">
                法律
            </span>
            <span class="hot-items">
                行政处罚
            </span>
            <span class="hot-items">
                形事处罚
            </span>
            <span class="hot-items">
                涉正当防卫案例研究
            </span>
            <span class="hot-items">
                行政处罚
            </span>
            <span class="hot-items">
                刑事处罚
            </span>
            <span class="hot-items">
                刑事处罚
            </span>
          </div>
          <div class="follow" style="border-bottom:none">
            <span class="hot-tit">个人关注 ></span>
            <span class="hot-items">
                法律
            </span>
            <span class="hot-items">
                行政处罚
            </span>
            <span class="hot-items">
                形事处罚
            </span>
            <span class="hot-items">
                涉正当防卫案例研究
            </span>
            <span class="hot-items">
                行政处罚
            </span>
            <span class="hot-items">
                刑事处罚
            </span>
            <span class="hot-items">
                刑事处罚
            </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.search-container{
    width: 800px;
    height: 56px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px 0px;
    background: #fff;
    border-radius: 2px;
    margin: 0 auto;
    position: relative;
    font-size: 16px;
    margin-top: 60px;
    .left_part{
        width: 96px;
        height: 28px;
        border-right: 1px solid #ccc;
        position: absolute;
        top: 14px;
        left: 28px;
        line-height: 28px;
        img{
            width: 14px;
            height: 14px;
            position: absolute;
            top: 6px;
            right: 15px;
        }
    }
    .right-content{
        width: 670px;
        height: 40px;
        position: absolute;
        right: 4px;
        top: 8px;
        line-height: 40px;
        input{
            border: none;
            width: 600px;
            color: #515a6e;
            height: 40px;
            line-height: 40px;
            position: absolute;
            left: 18px;
            outline: none;
        }
        img{
            width: 36px;
            height: 36px;
            position: absolute;
            right: 10px;
            top: 2px;
        }
    }
}
.hot-link{
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    height: 112px;
    .hotspose,.follow{
        display: flex;
        padding: 10px 0;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 255, 255, .4);
    }
    .hot-tit{
        font-size: 14px;
        color: rgba(0, 255, 255, .4);
    }
    .hot-items{
        font-size: 14px;
        padding: 2px 4px;
        color: #fff;
        border: 1px solid rgba(0, 255, 255, .4);
        border-radius: 2px;
    }
}
</style>
