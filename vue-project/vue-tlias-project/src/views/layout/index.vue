<script setup lang="ts">
import { useLoginStore } from '@/stores/loginInfo';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const logInforEmp = useLoginStore()

const router = useRouter()

const username = ref<string | undefined> ('')
username.value = logInforEmp.getloginInfo().name

const logout =() =>{

    //移除用户信息（Token）
    logInforEmp.removeLoginInfo()

    ElMessage('成功推出！')
    //跳转登录页面
    router.push("/login")

}
</script>

<template>
  <div class="common-layout">
    <el-container>
        <!-- 头部块信息 -->
      <el-header class="header">
        <span class="title">VUE : VUE工程 </span>
        <span class="right">
            <a href=""><el-icon><EditPen /></el-icon> 修改密码&nbsp;&nbsp;|&nbsp;&nbsp;</a> 
            <a href="javascript:void(0)" @click="logout()"> <el-icon><SwitchButton /></el-icon>退出系统 【{{ username }}】</a>
        </span>

        </el-header>
      <el-container>
        <!-- 左侧信息 -->
        <el-aside width="200px">
            <el-scrollbar>
                <!-- 这里写【router】等于，等于在那个【menu】里启用【vue-router】模式 -->
                <el-menu router > 
                <el-menu-item index="index">首页</el-menu-item>
                <el-sub-menu index="1">
                    <template #title>
                    <el-icon><Setting /></el-icon>班级学员管理
                    </template>
                    <el-menu-item index="class"><el-icon><HomeFilled /></el-icon>班级管理</el-menu-item>
                    <el-menu-item index="stu"><el-icon><UserFilled /></el-icon>学员管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                    <el-icon><Setting /></el-icon>系统信息管理
                    </template>
                    <el-menu-item index="dept"><el-icon><Menu /></el-icon>部门管理</el-menu-item>
                    <el-menu-item index="emp"><el-icon><UserFilled /></el-icon>员工管理</el-menu-item>
                </el-sub-menu>
                                <el-sub-menu index="3">
                    <template #title>
                    <el-icon><Histogram /></el-icon>数据统计管理
                    </template>
                    <el-menu-item index="3-1"><el-icon><Share /></el-icon>学员信息</el-menu-item>
                    <el-menu-item index="3-2"><el-icon><UserFilled /></el-icon>员工信息</el-menu-item>
                </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <!-- 主要显示区 -->
        <el-main>
            <!-- 这里显示的是，【router/index.ts】里定义的，【chidren】里的组件，动态地显示 -->
            <router-view>

            </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.header{
    /* 这里指定的渐变色的设定是，从 https://mycolor.space/gradient?ori=to+top&hex=%23062149&hex2=%238C92F0&sub=1 拷贝未来 */
    background-image: linear-gradient(to right, #3277de, #608ae4, #829ee9, #9fb2ef, #bbc7f4);
}
.title{
    font-size: 30px;
    color: white;
    font-family: 楷体;
    line-height: 60px;
    
}
.right{
    float: right;

}
/* 这是链接标签的格式设定 */
a{
    color: white;
    text-decoration-line: none;
    line-height: 60px;
}
</style>