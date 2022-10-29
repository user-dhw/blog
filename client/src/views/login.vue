<template>
  <div class="login">
    <n-card title="管理后台登录">
      <n-form :rules="rules"
        ref="formRef" :model="admin">
        <n-form-item path="account"
          label="账号">
          <n-input
            v-model:value="admin.account"
            clearable
            placeholder="请输入账号" />
        </n-form-item>
        <n-form-item path="password"
          label="密码">
          <n-input
            v-model:value="admin.password"
            type="password" clearable
            placeholder="请输入密码" />
        </n-form-item>
      </n-form>
      <div class="footer">
        <!-- <template #footer> -->
        <!-- <n-checkbox
          v-model="admin.remember"
          label="记住我" /> -->
        <n-button strong secondary round
          type="primary" @click="login">
          登录
        </n-button>
        <n-button strong secondary round
          @click="reset">重置
        </n-button>
        <!-- </template> -->
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useUserStore } from '../stores/UserStore'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter() // 路由
const route = useRoute() // 获取路由信息
const axios = inject('axios')
const message = inject('message')
const adminStore = useUserStore()
const formRef = ref(null);
const admin = reactive({
  account: 'admin',
  password: '123456'
})
const rules = {
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
// 登陆方法
const login = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const result = await axios.post('/admin/login', {
        account: admin.account,
        password: admin.password
      })
      if (result.data.code === 200) {
        message.success("登录成功")
        adminStore.id = result.data.data.id
        adminStore.account = result.data.data.account
        adminStore.token = result.data.data.token
        router.push({ path: '/dashboard' })
      }
      else {
        message.error(result.data.msg)
      }
    } else {
      message.error("请输入账号密码")

    }
  })

}
const reset = () => {
  admin.account = ''
  admin.password = ''
}
</script>

<style lang="scss" scoped>
.login {
  width: 400px;
  margin: 30vh auto;
  .footer {
    text-align: center;
  }
}
</style>