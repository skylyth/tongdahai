<template>
	<div class="login">
		<div class="login-panel">
			<img class="login-logo" :src="logo" alt="">
			<div class="login-title">管理后台</div>

			<i-form ref="formLogin" :model="formLogin" :rules="ruleLogin">
        <form-item prop="username">
          <i-input
            prefix="ios-contact"
            type="text"
            v-model="formLogin.username"
            placeholder="账号"
            size="large"
            @on-enter="submit"
          />
        </form-item>
        <form-item prop="password">
          <i-input
            prefix="ios-lock"
            type="password"
            v-model="formLogin.password"
            placeholder="密码"
            size="large"
            @on-enter="submit"
          />
        </form-item>
			</i-form>

			<div class="login-submit">
				<i-button :loading="loading" long type="primary" size="large" @click="submit">{{ loading ? '正在登录中' : '登录' }}</i-button>
			</div>
			<div class="login-forget">
				<Button type="text" @click="forgetPassword">忘记密码</Button>
			</div>
		</div>

		<div class="login-footer">
      <p>飞龙集团-版权所有</p>
      <p>RUOK Technology co.Ltd 提供技术支持</p>
		</div>
	</div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      ruleLogin: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不应小于6位', trigger: 'blur' }
        ]
      },
      // 是否正在登录
      loading: false
    }
  },
  computed: {
    ...mapState({
      logo: state => state.site.logo.large
    })
  },
  methods: {
    ...mapActions({
      // 获取用户信息
      login: 'LOGIN',
      getUser: 'GET_USER',
      getPrivileges: 'GET_PRIVILEGES',
      getCommonNavs: 'GET_COMMON_NAVS'
    }),
    submit () {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.loading = true
          this.login(this.formLogin).then(res => {
            this.getUser().then(res => {
              this.loading = false
              this.$Message.success('登录成功')
            })
            this.getPrivileges()
            this.getCommonNavs()
          }).catch(err => {
            console.log(err)
            this.$Message.error(err.msg)
            this.loading = false
          })
        } else {
          this.$Message.error('请输入正确后再试')
        }
      })
    },
    // 忘记密码
    forgetPassword () {
      this.$Message.warning('请联系系统管理员重置密码')
    }
  }
}
</script>

<style lang="less">
	.login {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
    flex: 1;
		background: #f0f2f5 url(~@/assets/images/background.svg) no-repeat 50%;
		&-panel {
			background: rgba(255, 255, 255, 0.5);
			padding: 20px;
			width: 360px;
			border-radius: 8px;
			text-align: center;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
		}
		&-logo {
			width: 96px;
			// height: 96px;
		}
		&-title {
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 20px;
		}
		&-forget {
			text-align: right;
		}

		&-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			text-align: center;
			padding: 20px 0;
      p {
        &:nth-child(2) {
          color: #999;
        }
      }
		}
	}
</style>
