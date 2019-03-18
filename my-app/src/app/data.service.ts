import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  firstClick(){
    return console.log('clicked');
  }

  registerUser(newUser){
    console.log("service " + newUser)
    console.log(newUser.fullname)
    const requestBody={
      "fullname":newUser.fullname,
      "email":newUser.email,
      "password":newUser.password

    }
    
    const header = {
      headers:new HttpHeaders({
          ContentType:'application/json',
          responseType:'text',
          observe:'response'
      })
  }
    return this.http.post('http://localhost:8080/register', requestBody, header);
  }
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
  getUserByEmail(){
    return this.http.get('');
  }
}
