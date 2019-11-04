<template>
		<div class="error">
			<img src="@/assets/images/404.svg" alt="" />
			<h1>404</h1>
			<p>不好意思，页面走丢啦</p>
			<Button type="primary" @click="goHome">回到首页</Button>
		</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    // 回到首页
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
.error {
	padding: 100px 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  color: #515a6e;
	h1 {
		font-size: 64px;
	}
	p {
		font-size: 16px;
		margin-bottom: 20px;
	}
}
</style>
