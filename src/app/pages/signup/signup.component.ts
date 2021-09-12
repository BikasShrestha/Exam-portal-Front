import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) {}

  public user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {

    //validation
    console.log(this.user);

    if(this.user.userName == '' || this.user.userName == null){
      //alert('Username is required!!');
      this.snack.open('Username is required !!', '', {
        duration: 2000,
        // verticalPosition: 'top',
        // horizontalPosition: 'center'
      } );
      return;
    }



    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        //alert('success');
        Swal.fire('Success', 'User is registered', 'success');
      },
      (error) => {
        console.log(error);
        //alert('Error! Something went wrong!!');
        this.snack.open('Something went wrong!', '', {
          duration: 2000,
        })
      }
    );
  }
}
