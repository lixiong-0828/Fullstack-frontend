<script setup lang="ts">

import { ref ,watch,onMounted} from "vue";
import { type DeptModelList, type EmpModel, type EmpModelList, type PaginationParam, type SearchEmpModel } from "@/api/model/model"
import { useOldValue } from "element-plus/es/components/time-picker/src/composables/use-time-picker.mjs";
import {  addEmpApi, deleteEmpById, deleteEmpByIds, getEmpByIdApi, queryPageApi, updateEmpApi } from "@/api/emp";
import { SCOPE ,ElMessage, type UploadProps, type FormInstance, ElMessageBox } from "element-plus";
import { queryAllApi as queryAllDeptApi} from "@/api/dept";
import { id } from "element-plus/es/locales.mjs";



// ============ 【定义变量/常数】 ==================
const searchEmp = ref<SearchEmpModel>(
    {
        name: "",
        gender: "",
        begin: "",
        end: "",
        date: []
    }
)

let emp = ref<EmpModel>({
  username: "",
  password: "",
  name: "",
  gender: "",
  phone: "",
  job: "",
  salary: "",
  image: "",
  entryDate: "",
  deptId: "",
  empExprList: [{
    exprDate: [],
    begin: "",
    end: "",
    company: "",
    job: ""
  }]
})

const formtitle = ref('') 
//下拉框：性别
const genders = ref([{name:'男',value:1},{name:'女',value:2}])

//下拉框：职位
const jobs = ref([{name:'主公',value:1},{name:'将军',value:2},{name:'军师',value:3},{name:'参政',value:4},{name:'大臣',value:5}])

// ============ 【侦听器】说明 ==================

//侦听一个对象的属性时
// watch(
//     () => searchEmp.value.name, (newValue,oldValue) =>{
//         console.log(`${newValue}----------${oldValue}`)
//     }
// )

//侦听一个对象时，使用深度侦听【deep:true】
// watch(searchEmp,(newValue,oldValue) => {
//     console.log(newValue);
// },{deep:true}
// )

// ============ 【侦听器】说明 ==================

// ============ 【侦听日期变化】 ==================
watch(searchEmp.value.date, (newValue,oldValue) =>{
        //console.log(`${newValue}----------${oldValue}`)
        if(newValue.length > 0){
            searchEmp.value.begin = newValue[0];
            searchEmp.value.end = newValue[1];

        }else {
            searchEmp.value.begin = '';
            searchEmp.value.end = '';
        }
    }
)
// ============ 【侦听日期变化(dialog)】 ==================
watch( emp,(newValue,oldValue) =>{

        if(emp.value.empExprList.length > 0){
           emp.value.empExprList.forEach (expr =>{
            if (expr.exprDate !=null && expr.exprDate.length > 0){
                expr.begin = expr.exprDate[0]
                expr.end = expr.exprDate[1]

            }
 
           })

        }
    },{deep:true}
)

// ============ 【员工一览】 ==================
const empList = ref<EmpModelList>([])

// ============ 【搜索功能】 ==================

const searchEmpList = async () =>{
  const result = await queryPageApi(
    searchEmp.value.name,
    searchEmp.value.gender,
    pagination.value.currentPage,
    pagination.value.pageSize,    
    searchEmp.value.begin,
    searchEmp.value.end   

  )
   
  if(result.code == 1){
    empList.value = result.data.rows
    pagination.value.total = result.data.total
  } 
}

// ============ 【分页功能】 ==================
//每页展示数变化时
const handleSizeChange = (val: number) => {
  //console.log(`${val} items per page`)
    pagination.value.pageSize = val
    searchEmpList()
}
//点击，页码时
const handleCurrentChange = (val: number) => {
  //console.log(`current page: ${val}`)
  pagination.value.currentPage = val
    searchEmpList()

}

const pagination = ref<PaginationParam>({
  currentPage: 1,
  pageSize: 5,
  total: 0
})

// ============ 【清空功能】 ==================

const clear = () => {
  searchEmp.value = {name:'',gender :'',begin : '', end : '', date : []}
  searchEmpList()

}

// ============ 【新增员工功能】 ==================
// ============ 【定义变量】 ==================
const labelWidth = ref<number>(80)

const dialogTableVisible = ref<boolean> (false)

// ============ 【OnMounted】 ==================

onMounted (()=> {
  searchEmpList()
  getDepts()
}
) 

// ============ 【取得所有部门信息】 ==================
let depts = ref<DeptModelList>()
const getDepts = async () =>{
  const result = await queryAllDeptApi()

  if(result.code == 1){
    depts = result.data
  }
}
// ============ 【头像上传功能】 ==================
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  console.log(response)
  console.log(uploadFile)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png'){
    ElMessage.error('图像类型不对，确认！！！')
    return false
  } 
  return true
}
// ============ 【工作经历追加】 ==================
const addWorkItem = () => {
  emp.value.empExprList.push({
    exprDate: [],
    begin: "",
    end: "",
    company: "",
    job: ""
  })
}

const deleteWorkItem = () => {
  emp.value.empExprList.pop()
}

// ============ 【增加型员工：弹出Dialog】 ==================

const add = () =>{

    //【表单重置： 清空上次留下的错误信息】
  resetForm(ruleFormRef.value)
  dialogTableVisible.value = true
  formtitle.value = '新增员工表'

      emp.value = {
        username: "",
        password: "",
        name: "",
        gender: "",
        phone: "",
        job: "",
        salary: "",
        image: "",
        entryDate: "",
        deptId: "",
        empExprList: [{
          exprDate: [],
          begin: "",
          end: "",
          company: "",
          job: ""
        }]
  }

}

// ============ 【保存新员工】 ==================

const save = async () =>{

  let result
  if(emp.value.id){

    result = await updateEmpApi(emp.value)
  }else{

    result = await addEmpApi(emp.value)

  }
   debugger
  if(result.code == 1){

    ElMessage.success('登录成功！！！！')
    dialogTableVisible.value = false
    searchEmpList()

  }else{
    dialogTableVisible.value = true
    ElMessage.success(result.msg)
  }
  
}

// ============ 【更新员工信息】 ==================

const getEmpById = async (id:number) =>{
  
  //【表单重置： 清空上次留下的错误信息】
  resetForm(ruleFormRef.value)

  dialogTableVisible.value = true
  formtitle.value='修改员工表'
 
    emp.value = {
      username: "",
      password: "",
      name: "",
      gender: "",
      phone: "",
      job: "",
      salary: "",
      image: "",
      entryDate: "",
      deptId: "",
      empExprList: [{
        exprDate: [],
        begin: "",
        end: "",
        company: "",
        job: ""
      }]
  }

  //先根据ID检索，回显信息

  const result = await getEmpByIdApi(id)  
  
  if(result.code == 1){

    emp.value = result.data

    //【注意：：：必须给日期数组赋值，要不出错！！！】
    const exprList = emp.value.empExprList
    if(exprList !=null && exprList.length > 0){

         exprList.forEach(expr =>{
          expr.exprDate = [expr.begin,expr.end]
         })
      
    }

  }else{
    ElMessage(result.msg)
  }  

}
// ============ 【取消按钮：dialog画面】 ==================
let canceled = () =>{
 dialogTableVisible.value = false

}

//【表单重置： 清空上次留下的错误信息】
const ruleFormRef = ref<FormInstance>()
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

//【删除员工信息： 单个删除】
const deleteById =  (id:number) =>{
  ElMessageBox.confirm('老大，确定删吗？','删除信息').then (async () => {

      const result = await deleteEmpById(id)

      if(result.code == 1){
        ElMessage("成功删除！！！！！！！！！！！！")
        searchEmpList()
      }else{
        ElMessage(result.msg)
      }

  }
)

}

//【删除员工信息： 批量删除】
const selectedIds = ref <(number | undefined) []>([])

//选择多选框时
const handleSelectionChange = (val: EmpModel[]) => {
  //console.log(val)
  selectedIds.value = val.map(emp => emp.id)
}

//【删除员工信息： 批量删除按钮】
const deleteByIds =  () =>{
  ElMessageBox.confirm('老大，确定删吗？','删除信息').then (async () => {

      const result = await deleteEmpByIds(selectedIds.value.join(','))
      
      if(result.code == 1){
        ElMessage("成功删除！！！！！！！！！！！！")
        searchEmpList()
      }else{
        ElMessage(result.msg)
      }

  }
)
}


</script>
<!-- ====================================  以上 Script ====================================================== -->

<template>
<h1>员工管理</h1> <br></br>

  <!------------------------------- 搜索条件栏 ------------------------------->
  <el-form :inline="true" :model="searchEmp" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="searchEmp.name" placeholder="请输入姓名"  />
    </el-form-item>
    <el-form-item label="性别" >
      <el-select v-model="searchEmp.gender" placeholder="请选择性别" width="80">
     
        <el-option v-for="gender in genders" :key="gender.value" :label="gender.name"  :value="gender.value"/>
      </el-select>
    </el-form-item>
    <el-form-item label="入职时间">
      <el-date-picker
        v-model="searchEmp.date"
        type="daterange"
        range-separator="To"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        value-format="YYYY-MM-DD"        
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="searchEmpList()">查询</el-button>
      <el-button type="primary" @click="clear()">清空</el-button>
    </el-form-item>
  </el-form>

  <el-row>
    <el-col :span="24" align="right">
      <el-button type="primary" @click="add()">增加新员工</el-button>
      <el-button type="danger" @click="deleteByIds()">批量删除</el-button>

    </el-col>
  </el-row>

  <!------------------------------- 员工一览表 ------------------------------->


  <br> <br>
   <el-table :data="empList" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"  width="55" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="gender" label="性别" align="center" width="100" >
        <template #default="scope">
          {{ scope.row.gender = 1 ? '男':'女' }}

      </template>
    </el-table-column>
    <el-table-column prop="deptName" label="所属部门" align="center" width="100" />
    <el-table-column prop="job" label="职位" align="center" width="100" >

      <template #default="scope">
          <span v-if="scope.row.job == 1 "> 主公</span>
          <span v-else-if="scope.row.job ==2 ">将军</span>
          <span v-else-if="scope.row.job ==3 ">军师</span>
          <span v-else-if="scope.row.job ==4 ">参政</span>
          <span v-else >大臣</span>

      </template>

    </el-table-column>
    <el-table-column prop="entryDate" label="入职时间" align="center" width="100" />
    <el-table-column prop="updateTime" label="更新时间" align="center" width="100" />
    <el-table-column  label="操作"  align="center">
        <template #default="scope">
        <el-button size="small" type="success"   @click="getEmpById(scope.row.id)">
          修改
        </el-button>
        <el-button size="small" type="danger" @click="deleteById(scope.row.id)" >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <br>

    <!------------------------------- 分页控制栏 ------------------------------->
  <el-pagination
  v-model:current-page="pagination.currentPage"
  v-model:page-size="pagination.pageSize"
  :page-sizes="[3, 5, 10, 15]"

  layout="total, sizes, prev, pager, next, jumper"
  :total="pagination.total"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>

  <!------------------------------- Dialog画面 ------------------------------->



    <el-dialog v-model="dialogTableVisible" :title="formtitle"  >
    <el-form :model="emp" ref="ruleFormRef">
      <!-- 第一行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item  label="用户名" :label-width="labelWidth" >
          <el-input v-model="emp.username" placeholder="请输入用户名" autocomplete="off"/>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item  label="姓名" :label-width="labelWidth" >
          <el-input v-model="emp.name" placeholder="请输入姓名" autocomplete="off"/>
        </el-form-item>
      </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item  label="性别" :label-width="labelWidth" >
          <el-select v-model="emp.gender" placeholder="请选择性别">
          
            <el-option v-for="gender in genders" :key="gender.value" :label="gender.name" :value="gender.value"/>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item  label="手机" :label-width="labelWidth" >
          <el-input v-model="emp.phone" placeholder="请输入手机" autocomplete="off"/>
        </el-form-item>
      </el-col>
      </el-row>

      <!-- 第三行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item  label="职位" :label-width="labelWidth" >
          <el-select v-model="emp.job" placeholder="请选择职位">
          <el-option v-for="job in jobs" :key="job.value" :label="job.name" :value="job.value"/>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item  label="薪资" :label-width="labelWidth" >
          <el-input v-model="emp.salary" placeholder="请输入薪资" autocomplete="off"/>
        </el-form-item>
      </el-col>
      </el-row>

      <!-- 第四行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item  label="所属部门" :label-width="labelWidth" >
          <el-select v-model="emp.deptId" placeholder="请选择部门">
          
          <el-option v-for="dept in depts" :key="dept.id" :label="dept.name" :value="dept.id"/>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item  label="入职日期" :label-width="labelWidth" >
          <el-date-picker
            v-model="emp.entryDate"
            type="date"
            placeholder="请选择日期"
          />
        </el-form-item>
      </el-col>
      </el-row>

            <!-- 第五行 -->
      <el-row>
      <el-col :span="3">
        <el-form-item  label="头像 "  >
         </el-form-item>
      </el-col>
      <el-col :span="18">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <!-- 成功上传后显示图像 ，暂时注掉-->
            <img v-if="emp.image" :src="emp.image" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>

      </el-col>
      </el-row>

      <!-- 第六行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item  label="工作经历 "  >
        <el-button type="success" size="small" @click="addWorkItem()">添加工作经历</el-button>
        </el-form-item>
      </el-col>
      </el-row>
<!-- 第七行 -->



      <el-row  v-for="empExpr in emp.empExprList" >       

          <el-col :span="10">
              <el-form-item  label="时间 " :label-width="labelWidth" >
              <el-date-picker
                  v-model="empExpr.exprDate"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="YYYY-MM-DD"        
                />
              </el-form-item>       
            </el-col>
            <el-col :span="6">
              <el-form-item  label="公司" :label-width="labelWidth" >
                <el-input   v-model="empExpr.company" placeholder="请输入公司名" autocomplete="off"/>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item  label="职位" label-width="80" >
                <el-input   v-model="empExpr.job" placeholder="请输入职位名" autocomplete="off"/>
                
              </el-form-item>                 
            </el-col>

            <el-col :span="2">

              <el-button type="success" size="small" @click="deleteWorkItem()" :label-width="labelWidth">删除</el-button>
            </el-col>
            
      
          </el-row>
<!-- 第八行 -->
          <el-row >

            <el-col :span="24" align="right">
              <el-button type="cancle" size="small" @click="canceled()"  :label-width="labelWidth" >取消</el-button>
              <el-button type="success" size="small" @click="save()"  :label-width="labelWidth" >确定</el-button>
            </el-col>
          </el-row>
    </el-form>
  </el-dialog>

</template>

<style>

/* 【头像上传相关CSS】 */
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  text-align: center;
  border:1px dashed
}

</style>