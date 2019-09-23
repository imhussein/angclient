import { NgModule } from "@angular/core";
import { NavbarComponent } from "src/app/components/layouts/navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule],
  exports: [RouterModule, NavbarComponent],
  providers: []
})
export class CoreModule {}
