import request from "@/utils/request";
import type {SearchEmpModel, ResultModel, PageResultModel, EmpModel} from "@/api/model/model";

//查询所有员工
//注意写法：： 不要把【&】和【$】弄错！！！！
export const queryPageApi = (name:string,gender:string,pageNo:number,pageSize:number,begin:string,end:string) => 
    request.get <any,PageResultModel>(`/emp?name=${name}&gender=${gender}&pageNo=${pageNo}&pageSize=${pageSize}&begin=${begin}&end=${end}`)


//登录新员工
export const addEmpApi = (emp:EmpModel) => request.post<any,ResultModel>('/emp',emp)

//更新员工信息- 回显
export const getEmpByIdApi = (id:number) => request.get<any,ResultModel>(`/emp/${id}`)

//更新员工信息- 更新
export const updateEmpApi = (emp:EmpModel) => request.put<any,ResultModel>('/emp',emp)

//删除
export const deleteEmpById = (id:number) => request.delete<any,ResultModel>(`/emp?id=${id}`)

//删除(批量)
export const deleteEmpByIds = (ids:string) => request.delete<any,ResultModel>(`/emp/ids?ids=${ids}`)