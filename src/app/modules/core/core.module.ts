import { NgModule } from "@angular/core";
import { NavbarComponent } from "src/app/components/layouts/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { BreadcrumbComponent } from "src/app/components/layouts/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [NavbarComponent, BreadcrumbComponent],
  imports: [RouterModule],
  exports: [RouterModule, NavbarComponent, BreadcrumbComponent],
  providers: []
})
export class CoreModule {}
