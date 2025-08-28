// 【定义变量类型】 --> 部门数据接口
export interface DeptModel{
    id?:number,
    name:string,
    createTime? : string,
    updateTime? : string
    
}

//=============================== 部门管理 ===================================
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

export interface EmpModel{

    id? :number,
    username:string,
    password:string,
    name : string,
    gender:string,
    phone:string,
    job:string,
    salary:string,
    image:string,
    entryDate:string,
    deptId:string,
    deptName?: string
    empExprList:EmpExprModel[]
}

export interface EmpExprModel{
    id?:number,
    empId?:number,
    exprDate:string[],
    begin:string,
    end:string,
    company:string,
    job:string
}

export type EmpModelList = EmpModel[]

//【分页显示用】
//
export interface PaginationParam{
    currentPage:number,
    pageSize:number,
    total:number
}

//【查询的员工一览结果】
export interface PageModel{
    total:number,
    rows:any[]
}

//【统一回复结果】
export interface PageResultModel{
    code:number,
    msg:string,
    data:PageModel
}

//=============================== 登录管理 ===================================
export interface LoginInfo{
    id?:number,
    name?:string,
    username:string,
    token?:string
}