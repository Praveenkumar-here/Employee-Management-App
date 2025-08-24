import { Router, RouterOutlet, Routes } from '@angular/router';
import { Master } from './components/master/master';
import { Employee } from './components/employee/employee';
import { Client, ClientComponent } from './components/client/client';
import { ClientProject } from './components/client-project/client-project';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path: 'master',
        component:Master
    },
    {
        path: 'employee',
        component:Employee
    },
    {
        path: 'client',
        component:ClientComponent
    },
    {
        path: 'client-project',
        component: ClientProject
    }
];
