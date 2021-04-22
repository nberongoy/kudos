import { Injectable } from "@angular/core";
import { ComponentType } from "@angular/cdk/portal";
import { DialogResponse } from "../constants/constants";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";

@Injectable({ providedIn: "root" })
export class KudosDialogService {
  constructor(private dialogService: MatDialog) {}

  openedDialogs: Array<string> = [];

  openByTemplate<T>(
    popupComponent: ComponentType<T>,
    data?: any,
    rememberDialog?: string,
    panelClass: string = ""
  ): MatDialogRef<T> {
    var config: MatDialogConfig = {
      disableClose: true,
      panelClass: panelClass
        ? panelClass
        : "open-by-template-dialog-panel-class",
      data: {
        cancel: () => {
          if (rememberDialog)
            this.openedDialogs.splice(
              this.openedDialogs.indexOf(rememberDialog),
              1
            );
          dialog.close(DialogResponse.Cancel);
        },
        accept: () => {
          if (rememberDialog)
            this.openedDialogs.splice(
              this.openedDialogs.indexOf(rememberDialog),
              1
            );
          dialog.close(DialogResponse.Accept);
        },
      },
      autoFocus: false,
    };

    if (rememberDialog) this.openedDialogs.push(rememberDialog);

    config.data = Object.assign(config.data, data);

    const dialog = this.dialogService.open(popupComponent, config);

    return dialog;
  }
}
