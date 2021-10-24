interface IUsersRegistration{
    firstName:string
    lastName:string
    age:string | number
    email:string 
    updateUserInfo():void
}
export default IUsersRegistration