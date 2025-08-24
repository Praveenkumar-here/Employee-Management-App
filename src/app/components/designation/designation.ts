import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master';
import { APIResponseModel, Idesignation } from '../../model/class/interface/role';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css'
})
export class Designation implements OnInit{

  designationList: Idesignation[] = [];
  isLoader: boolean = true;
  MasterService = inject(MasterService); 

  ngOnInit(): void {
    this.MasterService.getDesignations().subscribe((result: APIResponseModel)=> {
      this.designationList = result.data;
      this.isLoader = false;
    }, error=> {
      alert("API Error/ Network Down")
    });
    }


  }
