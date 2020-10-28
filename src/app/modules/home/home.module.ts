import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreModule } from 'src/app/core/core.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

];


@NgModule({
  declarations: [

  ],
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
