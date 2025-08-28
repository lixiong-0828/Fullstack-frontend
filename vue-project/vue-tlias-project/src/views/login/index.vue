<script setup lang="ts">

import { queryEmpApi } from '@/api/login'
import { useLoginStore } from '@/stores/loginInfo'

import { ElMessage, SCOPE } from 'element-plus'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const userInfo = reactive({
  username: '',
  password: '',

})

//使用，跳转画面
const router =useRouter()

//使用全局Store（pinia）
const loginInfoStore = useLoginStore()

const onSubmit = async () => {
  console.log('submit!')
  const result = await queryEmpApi(userInfo.username,userInfo.password)

  if(result.code ==1){
    ElMessage("正确的用户信息")
    loginInfoStore.saveLoginInfo(result.data)
    router.push('/index')

  }else{

    ElMessage("用户信息不正确！！")
  }
}
</script>



<template>
<h1 align="center"> EMP Mangement Sysytem </h1>

<br><br><br>

  <el-form :inline="true" :model="userInfo" class="demo-form-inline" align="center">
    <el-form-item label="UserName" >
      <el-input v-model="userInfo.username" placeholder="user name" clearable  />
    </el-form-item>
    <br>

        <el-form-item label="Password">
      <el-input type="password" v-model="userInfo.password" placeholder="password" clearable />
    </el-form-item>
<br>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<style>


.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}



</style>