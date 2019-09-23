import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminModule } from "./modules/admin/admin.module";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "./modules/admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
