import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html"
})
export class BreadcrumbComponent implements AfterViewInit {
  @ViewChild("listItems") listItems: ElementRef;
  @ViewChild("overlay") overlay: ElementRef;
  items: ElementRef[];

  ngAfterViewInit() {
    this.items = this.listItems.nativeElement.childNodes;
    this.items.forEach((item: any) => {
      if (item.classList.length > 1) {
        item.style.color = "var(--color-white)";
        this.overlay.nativeElement.style.width = item.clientWidth + "px";
        this.overlay.nativeElement.style.left = item.offsetLeft + "px";
      }
    });
  }

  onListMouseMove(e) {
    if (e.target.classList.contains("breadcrumb__link")) {
      this.overlay.nativeElement.style.width = e.target.clientWidth + "px";
      this.overlay.nativeElement.style.left = e.target.offsetLeft + "px";
      this.items.forEach((item: any) => {
        item.style.color = "var(--color-grey-dark-2)";
        e.target.parentElement.style.color = "var(--color-white)";
      });
    }
  }

  onListMouseLeave(e) {
    this.items.forEach((item: any) => {
      if (item.classList.length > 1) {
        item.style.color = "var(--color-white)";
        this.overlay.nativeElement.style.width = item.clientWidth + "px";
        this.overlay.nativeElement.style.left = item.offsetLeft + "px";
      }
    });
  }

  onItemMouseLeave(e) {
    // console.log("RUN");
    // e.target.style.color = "var(--color-grey-dark-2)";
  }
}
