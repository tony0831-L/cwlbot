export interface User{
    _id :string,
    name:String,
    password:string,
    role:string,
    key:key
}

export interface key{
    openAiKey :string,
    ttsKey:String,
}