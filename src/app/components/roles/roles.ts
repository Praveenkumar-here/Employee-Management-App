import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Irole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})


export class Roles implements OnInit {
  
  roleList: Irole [] = [];
  http = inject(HttpClient);
  
  
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {
      this.roleList = res.data;
    });
  }
  
  

}






// export class Roles {
  // // String, number, boolean, date, object, array, null, umdefined
  // firstName: string = "Praveenkumar ";
  // lastName: string = "M";
  // angularVersion = "Version 20";
  // version: number = 20;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "radio";
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert("Welcome to Angular 20!");
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }

  // heyThere() {
  //   alert("Yes I'm here!");
  // }

  // areYouThere(messsage: string) {
  //   alert(messsage);
  // }




// }
