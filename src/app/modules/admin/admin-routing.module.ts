import { NgModule } from "@angular/core";
import { AdminPostsComponent } from "src/app/components/admin/posts/posts.component";
import { CategoriesComponent } from "src/app/components/admin/categories/categories.component";
import { ProfileComponent } from "src/app/components/admin/profile/profile.component";
import { DashboardComponent } from "src/app/components/admin/dashboard/dashboard.component";
import { SettingsComponent } from "src/app/components/admin/settings/settings.component";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "src/app/components/admin/users/users.component";

const adminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "posts",
        component: AdminPostsComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      },
      {
        path: "profile/:id",
        component: ProfileComponent
      },
      {
        path: "categories",
        component: CategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {}
