export interface Employer{
    roleId:{
        roleId:string
    },
    roleInCompany:string,
    companyName:string,
    companyType:string,
    companyDescription:string,
    companyAddress:string,
    companySize:number
}

export interface User{
    roleId:{
        roleId:string
    },
    name:string,
    email:string,
    password:string,
    address:string,
    nationality:string,
    phone:string
}
