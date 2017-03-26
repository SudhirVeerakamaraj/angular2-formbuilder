import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {BasicFormComponent,ComplexFormComponent} from './custom.components';


const APP_ROUTES:Routes = [
    {path:'complexform',component:ComplexFormComponent},
    {path:'',component:BasicFormComponent}
    
    ]

export const RoutingModule:ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);