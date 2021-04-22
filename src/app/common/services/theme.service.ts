import { Injectable } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ThemeModel } from "../models/theme.model";
import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class KudosThemeService {
  private isDefaultTheme: string = "#47D7AC";
  private previousTheme = "";

  private themes: Array<ThemeModel> = [
    new ThemeModel("#47D7AC", "trDefaultTheme", "infivex-default-theme"),
    new ThemeModel("#009DCE", "trCyanTheme", "infivex-cyan-theme"),
  ];

  constructor(private overlayContainer: OverlayContainer) {}

  initializeTheme() {
    let bodyElement = document.getElementsByTagName("BODY")[0] as HTMLElement;
    let themeName = this.themes.find(
      (x) => x.id.toLowerCase() === this.isDefaultTheme.toLowerCase()
    );

    bodyElement.className = themeName.themeName;
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;

    if (this.previousTheme !== "") {
      overlayContainerClasses.remove(this.previousTheme);
    }

    this.previousTheme = themeName.themeName;
    overlayContainerClasses.add(themeName.themeName);
  }

  changeTheme(color: string) {
    this.isDefaultTheme = color;
    this.initializeTheme();
  }

  getThemes() {
    return _.cloneDeep(this.themes);
  }
}
