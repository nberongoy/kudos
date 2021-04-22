import { Injectable, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AddDocumentComponent } from "../../MainApp/add-document/add-document.component";
import { KudosDialogService } from "./dialog.service";
import { Dialogs } from "../constants/constants";

@Injectable({ providedIn: "root" })
export class KudosGlobalFileHandlerService {
  dropZone: ElementRef;

  constructor(
    private router: Router,
    private dialogService: KudosDialogService
  ) {}

  shouldDisplay: boolean = true;
  initializeDropZone(element) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf("login") !== -1) {
          this.shouldDisplay = false;
        } else {
          this.shouldDisplay = true;
        }
      }
    });
    this.dropZone = element;
  }
  attachHandlers() {
    window.addEventListener("dragenter", (e) => {
      this.showDropZone();
    });

    this.dropZone.nativeElement.addEventListener("dragenter", this.allowDrag);
    this.dropZone.nativeElement.addEventListener("dragover", this.allowDrag);

    this.dropZone.nativeElement.addEventListener("dragleave", (e) => {
      this.hideDropZone();
    });

    this.dropZone.nativeElement.addEventListener("drop", (e) =>
      this.handleDrop(e, this)
    );
  }

  showDropZone() {
    if (
      this.shouldDisplay &&
      this.dialogService.openedDialogs.filter((x) => x === Dialogs.ADD_DIALOG)
        .length === 0
    )
      this.dropZone.nativeElement.style.display = "block";
  }
  hideDropZone() {
    this.dropZone.nativeElement.style.display = "none";
  }

  allowDrag(e) {
    if (true) {
      // Test that the item being dragged is a valid one
      e.dataTransfer.dropEffect = "copy";
      e.preventDefault();
    }
  }

  handleDrop(e, that) {
    e.preventDefault();
    that.hideDropZone();

    let dialogData = { files: e.dataTransfer.files };
    this.dialogService.openByTemplate(
      AddDocumentComponent,
      dialogData,
      Dialogs.ADD_DIALOG
    );
  }
}
