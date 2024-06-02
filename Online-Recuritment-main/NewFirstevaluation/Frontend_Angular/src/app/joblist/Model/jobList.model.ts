export interface jobList{
    roleId:{
        roleId:string
    },
    jobId:number,
    jobName:string,
    jobSalary:string,
    jobType:string,
    jobDescription:string,
    jobVacancy:string,
    companyName: string,
    companyAddress: string
}

export interface Company {
    companyName: string,
    companyAddress: string
}