import { Component, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
  @ViewChild("dropdown") dropdown: ElementRef;
  @Input("brand") brand: string;
  notificationsCount: number = 8;

  showDropDown() {
    this.dropdown.nativeElement.classList.add("active");
  }

  hideDropDown() {
    this.dropdown.nativeElement.classList.remove("active");
  }
}
