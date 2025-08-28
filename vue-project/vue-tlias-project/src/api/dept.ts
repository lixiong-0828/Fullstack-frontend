import request from "@/utils/request";
import type {DeptModel, ResultModel} from "@/api/model/model";

//查询所有部门 
export const queryAllApi = () => request.get <any,ResultModel>('/depts')

//新增部门 
export const addApi = (dept:DeptModel) => request.post<any,ResultModel>('/depts',dept)

//回显（更新前的回显）
//【注意！！】：这里是【`】不是【'】
export const getInfoApi = (id:number) => request.get<any,ResultModel>(`/depts/${id}`)

//修改
export const updateApi = (dept:DeptModel) => request.put<any,ResultModel>(`depts`,dept)

//删除
export const deleteById = (id:number) => request.delete<any,ResultModel>(`/depts?id=${id}`)