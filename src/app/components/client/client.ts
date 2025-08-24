import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { APIResponseModel } from '../../model/class/interface/role';


@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class ClientComponent implements OnInit {
  
  clientObj: Client = new Client();
  clientList: Client[]=[];
  clienttService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clienttService.getAllClients().subscribe((res:APIResponseModel)=> {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    debugger;
    this.clienttService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result) {
        alert("Client Created Success")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }


  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelte = confirm("Are you sure want to delete");
    if(isDelte) {
      this.clienttService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
      if(res.result) {
        alert("Client Deleted Success")
        this.loadClient();
      } else {
        alert(res.message)
      }
    })
    }
    
  }
}
export { Client };

