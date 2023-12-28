import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { ProductSepcComponent } from './components/product-sepc/product-sepc.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ActivateGuard } from './guards/activate.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { FormsModule } from '@angular/forms';
import { ResolveGuard } from './guards/resolve.guard';

import { authGuard } from './guards/auth.guard';
//routes: mapping of path and component view
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    canDeactivate: [
      () => {
        console.log('leaving home');
        return false;
      },
    ],
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [ActivateGuard],
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'profile/:userId/:userName/:userAddress',
    component: ProfileComponent,
    resolve: { myData: ResolveGuard },
  },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'spec',
        component: ProductSepcComponent,
      },
      {
        path: 'price',
        component: ProductPriceComponent,
      },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    ProfileComponent,
    ProductComponent,
    ProductSepcComponent,
    ProductDetailComponent,
    ProductPriceComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [ActivateGuard, DeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
