export interface Feedback {
    feedbackId:number,
    userId:number,
    feedbackContent:string,
    feedbackDate: string,
    user:{
        userId:number,
        username:string,
        email:string
    }

}