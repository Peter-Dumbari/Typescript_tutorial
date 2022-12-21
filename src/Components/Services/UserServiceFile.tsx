import { userinfo } from "../userList/userListModel"
export class UserServiceFile{
    private static users: userinfo []=[
        {
            name: "peter",
            age: 80,
            sex: "female"
        }
    ];

    public static getAllUsers(){
        return this.users
    }
}
