import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxPopper } from 'angular-popper';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
// import { HttpModule } from '@angular/http';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Product', component: ProductDetailsComponent },
  { path: 'signUp', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    LogInComponent,
    CartComponent,
    ProductDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
