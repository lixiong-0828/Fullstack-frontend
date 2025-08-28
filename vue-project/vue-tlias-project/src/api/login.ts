import request from "@/utils/request";
import type { ResultModel} from "@/api/model/model";

//查询用户信息 
export const queryEmpApi = (username:string,password:string) => request.get <any,ResultModel>(`/loginById?username=${username}&password=${password}`)

