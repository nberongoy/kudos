export class ThemeModel {
  id: string;
  translationKey: string;
  themeName: string;

  constructor(id: string, translationKey: string, themeName: string) {
    this.id = id;
    this.translationKey = translationKey;
    this.themeName = themeName;
  }
}
