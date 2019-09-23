import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminPostsComponent } from "src/app/components/admin/posts/posts.component";
import { CategoriesComponent } from "src/app/components/admin/categories/categories.component";
import { ProfileComponent } from "src/app/components/admin/profile/profile.component";
import { DashboardComponent } from "src/app/components/admin/dashboard/dashboard.component";
import { SettingsComponent } from "src/app/components/admin/settings/settings.component";
import { UsersComponent } from "src/app/components/admin/users/users.component";
import { BreadcrumbComponent } from "src/app/components/layouts/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [
    AdminPostsComponent,
    CategoriesComponent,
    ProfileComponent,
    DashboardComponent,
    SettingsComponent,
    UsersComponent,
    BreadcrumbComponent
  ],
  imports: [AdminRoutingModule],
  exports: [AdminRoutingModule, BreadcrumbComponent],
  providers: []
})
export class AdminModule {}
