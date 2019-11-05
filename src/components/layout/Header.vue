<template>
  <div class="head-container">
      <div class="head-line"></div>
      <div class="header-bar">
          <div class="left">
              <img class="logo" src="../../assets/header/logo.png">
              <img class="title" src="../../assets/header/u17.png">
          </div>
          <div class="nav-links">
            <div class="nav-items active">
                <router-link to="/home">首页</router-link>
            </div>
            <div class="nav-items">
                <router-link to="/aboutus">知识联盟</router-link>
            </div>
            <div class="nav-items">
                <router-link to="/newsCenter">个人知识</router-link>
            </div>
            <div class="nav-items">
                <router-link to="/product">知识管理</router-link>
            </div>
          </div>
          <div class="login-info">
              <img class="avator" src="../../assets/header/avator.png" alt="" srcset="">
              <span>王某某</span>
              <img class="logout" src="../../assets/header/exit.png" alt="">
          </div>
      </div>
      <Search />
      <MainLinks />
  </div>
</template>

<script>
import Search from './Search.vue'
import MainLinks from './MainLinks.vue'
export default {
  name: 'Header',
  components: {
    Search,
    MainLinks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head-container{
    width: 100%;
    height: 440px;
    position: relative;
    background: url('../../assets/header/u2.png');
    .head-line{
        position: absolute;
        height: 1px;
        width: 100%;
        left: 0;
        top: 80px;
        background: rgba(0, 255, 255, .4)
    }
 .header-bar{
     height: 80px;

     width: 1200px;
     position: relative;
     margin: 0 auto;
        .left{
        .logo{
            width: 51px;
            height: 51px;
            position: absolute;
            left: 0;
            top: 15px;
        }
        .title{
            width: 251px;
            height: 39px;
            position: absolute;
            left: 189px;
            top: 19px;
        }
    }
    .nav-links{
        width: 300px;
        height: 80px;
        position: absolute;
        left: 480px;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav-items{
            position: relative;
            a{
                color: #fff;
                display: inline-block;
                font-size: 16px;

                height: 62px;
                line-height: 62px;
            }
            .active{
                border-bottom: 2px solid orange;
            }

        }
    }
    .login-info{
        width: 200px;
        height: 50px;
        position: absolute;
        right: 0px;
        top: 10px;
        .avator{
            position: absolute;
            left: 58px;
            top: 8px;
            width: 24px;
            height: 24px;
        }
        span{
            position: absolute;
            left: 90px;
            top: 8px;
            font-size: 16px;
            color: #fff;
            &::after{
                content: '';
                width: 1px;
                height: 14px;
                position: absolute;
                background: rgba(0, 255, 255, .4);
                top:5px;
                left: 60px;
            }
        }
        .logout{
            position: absolute;
            left: 170px;
            top: 12px;
            width: 15px;
            height: 15px;
        }
    }
 }
}
</style>
