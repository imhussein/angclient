import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/components/auth/login/login.component";
import { RegisterComponent } from "src/app/components/auth/register/register.component";
import { AuthRotuingModule } from "./auth-routing.module";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRotuingModule],
  exports: [AuthRotuingModule],
  providers: []
})
export class AuthModule {}
