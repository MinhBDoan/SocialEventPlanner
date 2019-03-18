export class User {
    fullname: string;
    email: string;
    password: string;

constructor() {
   
}
public setAll(newU:User):void{
   
    this.$fullname = newU.$fullname;
    this.$password = newU.$password;
    
    this.$email = newU.$email;
    

}
public get $fullname(): string {
    return this.fullname;
}

public set $fullname(value: string) {
    this.fullname = value;
}

public get $email(): string {
    return this.email;
}

public set $email(value: string) {
    this.email = value;
}
public get $password(): string {
    return this.password;
}

public set $password(value: string) {
    this.password = value;
}
}