<template>
  <div>
    <van-nav-bar title="标题" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="queryParms.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="queryParms.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[
          {
            pattern:
              /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
            required: true,
            message:
              '密码最少6位，包含至少一个大写字母，一个小写字母，1个数字，一个特殊字符。',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          v-stopBtnRepeat
          round
          block
          type="info"
          @click="onSubmit"
          >提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login } from '@/api/index'
import { setToken } from '@/utils/token'
export default {
  name: 'Login',
  data () {
    return {
      queryParms: {
        password: 'Kd@curry666.',
        username: 'test'
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await login(this.queryParms)
        this.$notify({ type: 'success', message: '通知内容', duration: 500 })
        setToken(res.data.token)
        this.$router.replace({ path: '/layout' })
      } catch (error) {
        this.$notify({ type: 'warning', message: '通知内容', duration: 500 })
      }
    }
  }
}
</script>

<style scoped>
</style>
