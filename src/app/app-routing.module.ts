import { ComponentFactory, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { OurservicesComponent } from './pages/ourservices/ourservices.component';

const routes: Routes = [
  {
    path:'',
    component:BannerComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path:'ourservices',
        component:OurservicesComponent
      },
      {
        path:'faq',
        component:FaqComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
