// 【定义变量类型】 --> 部门数据接口
export interface DeptModel{
    id?:number,
    name:string,
    createTime? : string,
    updateTime? : string
    
}

// 变量：部门数据数组
// 这里【export】，别的地方可以【import】来导入使用
export type DeptModelList = DeptModel[]

// 【定义变量类型】 --> 返回值的接口
export interface ResultModel{
    code:number,
    msg:string,
    data:any
}

//=============================== 员工管理 ===================================
export interface SearchEmpModel{
    name:string,
    gender:string,
    begin:string,
    end:string,
    date:string[]
}

