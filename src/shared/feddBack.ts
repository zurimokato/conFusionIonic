export interface FeedBack{
    firstName:string,
    lastName:string,
    telnum:string,
    email:string,
    agree:boolean,
    contactType:string,
    message:string
}

export const ContactType=['None', 'Tel', 'Email']
