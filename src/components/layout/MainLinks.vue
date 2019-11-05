<template>
    <div class="links-content">
        <div class="links-bg"></div>
        <div class="links-container">
            <div class="link-items">
                <router-link to="/guide">
                    <img src="../../assets/header/main-link1.png">
                    <span>审判指引</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/judicial">
                    <img src="../../assets/header/main-link1.png">
                    <span>司法观点</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/guide">
                    <img src="../../assets/header/main-link1.png">
                    <span>典型案例</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/guide">
                    <img src="../../assets/header/main-link1.png">
                    <span>理论调研</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/contact">
                    <img src="../../assets/header/main-link1.png">
                    <span>裁判文书</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/contact">
                    <img src="../../assets/header/main-link1.png">
                    <span>法律法规</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/contact">
                    <img src="../../assets/header/main-link1.png">
                    <span>案由</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/contact">
                    <img src="../../assets/header/main-link1.png">
                    <span>关键词</span>
                </router-link>
            </div>
            <div class="link-items">
                <router-link to="/contact">
                    <img src="../../assets/header/main-link1.png">
                    <span>问答</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainLinks'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.links-bg{
    height: 112px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgb(3, 108, 237);
    opacity: 0.35;
}
.links-container{
    width: 1200px;
    height: 112px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .link-items{
        position: relative;
        width: 133px;
        border-right: 1px solid rgba(0, 255, 255, .4);
        height: 100%;
        cursor: pointer;
        img{
            position: absolute;
            width: 40px;
            height: 40px;
            top: 20px;
            left: 48px;
        }
        span{
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 70px;
            display: block;
            width: 100%;
            text-align: center;
        }
        &:nth-of-type(10){
            border-right: none
        }
    }
}
</style>
