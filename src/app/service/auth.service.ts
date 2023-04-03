import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='';
  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }
  Updateuser(code:any,inputdata: any){
    return this.http.put(this.apiurl+'/'+code, inputdata);
  }
}
