import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'home',
        redirectTo: '/',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product-add', component: ProductAddComponent },
      { path: 'product-update/:id', component: ProductUpdateComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
