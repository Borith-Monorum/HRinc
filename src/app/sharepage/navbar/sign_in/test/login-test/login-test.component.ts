import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AuthService} from 'src/app/service/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.scss']
})
export class LoginTestComponent {



constructor(
  private builder: FormBuilder,
  private toastr: ToastrService,
  private service: AuthService,
  private router: Router,
   ){
    sessionStorage.clear();
  }
userdata:any;

loginform=this.builder.group({
  password:this.builder.control('',Validators.required),
  username:this.builder.control('',Validators.compose([Validators.required])),
})

proceedlogin(){
   if(this.loginform.valid){
    this.toastr.success('Login Successfully');
    this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
      this.userdata = res;
      console.log(this.userdata);
      if(this.userdata.password===this.loginform.value.password){

          if(this.userdata.isactive){
            sessionStorage.setItem('username', this.userdata.id);
            sessionStorage.setItem('userrole', this.userdata.role);
            this.router.navigate(['user']);
          }else{
            this.toastr.error('Please contact admin','InActive User');
          }
      }else{
        this.toastr.error('Invalid credentials');
      }
    });
   }else{
    this.toastr.error('Please try again');
   };
}



}

