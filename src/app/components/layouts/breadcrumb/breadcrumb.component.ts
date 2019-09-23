import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html"
})
export class BreadcrumbComponent implements AfterViewInit {
  @ViewChild("listItems") listItems: ElementRef;
  @ViewChild("overlay") overlay: ElementRef;
  checked: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, private router: Router) {}
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
    setTimeout(() => {
      if (!this.checked) {
        this.ngAfterViewInit();
        this.checked = true;
      }
    }, 100);
  }

  onNavigateClick(route: string) {
    this.router.navigate([`${route}`]);
  }

  onListMouseMove(e) {
    if (e.target.classList.contains("breadcrumb__overlay-fade")) {
      this.overlay.nativeElement.style.width =
        e.target.nextElementSibling.clientWidth + "px";
      this.overlay.nativeElement.style.left =
        e.target.offsetParent.offsetLeft + "px";
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
      } else {
        item.style.color = "var(--color-grey-dark-2)";
      }
    });
  }

  onItemMouseLeave(e) {
    e.target.style.color = "var(--color-grey-dark-2)";
  }
}
