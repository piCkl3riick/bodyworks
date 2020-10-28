import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./home/portfolio/portfolio.component";
import { OurArtistComponent } from "./home/pages/our-artist/our-artist.component";
import { LatestWorkComponent } from "./home/pages/latest-work/latest-work.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./home/pages/contact/contact.component";

const routes: Routes = [

  {
    path: "",
    redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "our-artist",
    component: OurArtistComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "latest-work",
    component: LatestWorkComponent,
  },
];

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LatestWorkComponent,
    OurArtistComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
})
export class ModelModule {}
