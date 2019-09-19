import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
  @Input("brand") brand: string;
  notificationsCount: number = 8;
}
