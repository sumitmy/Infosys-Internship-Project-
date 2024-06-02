export interface JobSeeker{

   
    fullName:string,
    email:string,
    phone:string,
    yearOfPassing:string,
    cgpa:string,
    keySkill:string,
    language:string,
    areaOfInterest:string,
    project:string,
    job:{
        jobId:number
    }, 
    graduate:{
        roleId:{
            roleId:string
        },
        studentId:number
    }
} 