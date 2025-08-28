<!-- 脚本定义为【"ts"】，所以变量定义时，最好指定类型 -->
<script setup lang="ts">
import { ref ,onMounted} from 'vue';
//这2个写法一样 --> 【@/api/model/model】= 【../../api/model/model】
import type { DeptModel, DeptModelList } from "@/api/model/model";

// ① 异步请求时，要用【axios】
//没有必要了，导入的request里包含
//import axios from 'axios';  

//导入对象（全部部门，新增部门，回显部门，更新部门）
import { queryAllApi ,addApi ,getInfoApi ,updateApi ,deleteById} from "@/api/dept";

//显示信息模块
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from 'element-plus';  

// 声明响应式数据时，可以指定泛型
const deptList = ref<DeptModelList>([])

// 这个跟上面 ↑ 的定义是一个效果 
//const deptList1 = ref<DeptModel[]>()

//【检索全部部门】============================================================
// 部门列表数据-可以用ApiFox 生成 MOCK
const searchlist = async () => {
    //下面是ApiFox的Mock数据产生的路径。导入queryAllApi后没必要
    //const result = await axios.get('http://127.0.0.1:4523/m1/6718976-6429860-default/111')

    const result = await queryAllApi()
     if (result.code == 1){
         deptList.value = result.data
         //ElMessage.success("报告大人，大功告成！！")
     }else{
         //ElMessage.error("报告大人，大事不妙！！")
     }
}
//============================================================

onMounted( () => {
    searchlist()
})

let dialogFormVisible =ref<boolean>(false)
let dept = ref<DeptModel>({
  name : ''
}
)

let formtitle = ref <string > ("")

//【新增部门】============================================================ 
// 打开dialog，传递title
let add = () => { 

  //调用【表单重置： 清空上次留下的错误信息】
  resetForm(ruleFormRef.value)
  dialogFormVisible.value =true
  formtitle.value = "新增部门"
  dept.value = {name:''}


}
//【dialog画面: 新增,修改】============================================================ 
//在dialog画面里点击【保存】按钮
let save = async (form: FormInstance | undefined) => {


  //【表单校验！！！】
  if (!form) return
   await form.validate(async  (valid, fields) => {
    if (valid) {
      //【表单校验成功 】
        //异步请求保存 （调用后端逻辑）
        //const result = await addApi(dept.value)
        //【const】来定义的话，不能重复赋值；所以【let】来定义
        let result
        
        //判断是【新增】还是【修改】，看看有没有【id】
        if(dept.value.id){
          //【修改】
          result = await updateApi(dept.value)
        }else{
          //【新增】
          result  = await addApi(dept.value)
        }

        if (result.code){

          //请求成功,发出成功信息
          dialogFormVisible.value = false
          searchlist()
          ElMessage.success("报告大人，大功告成！！新部门加入成功")

        }else{
          //请求失败，发出失败信息（来至后端的信息）
          dialogFormVisible.value = true
          ElMessage.error(result.msg)
        }
    } else {
      ElMessage.error("表单校验失败！！！！！！！！！")
    }
  })


  
}

//【修改部门】 ============================================================
// 点击一栏里的【修改】按钮时
let edit = async (id:number) => {

  //【表单重置： 清空上次留下的错误信息】
  resetForm(ruleFormRef.value)

  dialogFormVisible.value =true
  formtitle.value = "修改部门"
  dept.value = {name : ''}

  //根据id查询部门名
  const result = await getInfoApi(id)
  
  if (result.code == 1) {
    // 【id】:从画面传过来的id设置到Json的数据里
    dept.value = {id:id ,name : result.data }
    //dept.value = result.data
  }
}

//【删除部门】 ============================================================
let deleteByid =  (id:number) => {
    ElMessageBox.confirm(
    '那你确定，删除？想好了哈。。。',
    'info',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then( async () => {

      const result =await deleteById(id)
      if(result.code == 1){
        ElMessage.success("报告大人，删除成功！！！")

      }else{

        ElMessage.success("报告大人，删除失败！！！")

      }      
      searchlist()

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

//【表单验证】 ============================================================
const ruleFormRef = ref<FormInstance>()

const rules = ref<FormRules<DeptModel>>({
  name: [
    { required: true, message: '请输入部门名称！！！！ ', trigger: 'blur' },
    { min: 1, max: 10, message: '长度在20字以内！！！！', trigger: 'blur' },
  ]
}
)

//【表单重置： 清空上次留下的错误信息】
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<!-- ============================================================【以上 SCRIPT】 ============================================================ -->
<!-- ============================================================【以上 SCRIPT】 ============================================================ -->
<!-- ============================================================【以上 SCRIPT】 ============================================================ -->
<template>
<h1>部门管理</h1><br>
<el-button type="primary" @click="add()">+新增部门</el-button><br><br>

<el-table :data="deptList" border    style="width: 100%">
  <!-- 这里写【type="index"】，会自动记入顺序 -->
    <el-table-column type="index" label="序号" width="100" align="center"/>
    <el-table-column prop="name" label="部门名称" width="200"  align="center"/>
    <el-table-column prop="updateTime" label="最后操作时间" width="250"  align="center"/>
    <el-table-column prop="address" label="操作"  align="center">
        <template #default="scope">
        <el-button size="small" type="success"   @click="edit(scope.row.id)">
          修改
        </el-button>
        <el-button size="small" type="danger" @click="deleteByid(scope.row.id)" >
          Delete
        </el-button>
      </template>
    </el-table-column>
 </el-table>

   <el-dialog v-model="dialogFormVisible" :title="formtitle" width="500">
    <!-- 【注意写法】：【ref】前没有【：】， 【rules】前有 -->
    <el-form :model="dept" :rules="rules" ref="ruleFormRef">
      <el-form-item label="部门名" prop="name">
        <el-input v-model="dept.name" autocomplete="off" />
      </el-form-item>

    </el-form>
    <template #footer>
      <div class="dialog-footer">
        实验：{{ dept }}
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save(ruleFormRef)">
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>



<style>

</style>