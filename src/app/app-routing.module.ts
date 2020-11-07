import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';


const routes:Routes=[
    {path:'',redirectTo:'/shop', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    // {path:'**',component:PageNotFoundComponent},
    {path: 'shop', component:ShopingCartComponent},
    {path: 'cart', component:CartComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{};