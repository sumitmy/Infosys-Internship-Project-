export interface Graduate{
    roleId:{
        roleId:string
    },
    city:string,
    state:string,
    pinCode:string,
    yearOfPassing:string,
    cgpa:string,
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
    phone:string,
}

export interface College{
    roleId:{
        roleId:string
    },
    collegeName:string,
    collegeDescription:string,
    collegeAddress:string
}

