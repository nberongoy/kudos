import { i18n, TRANS } from 'src/assets/translations';

export function capitalize(word: string): string {
  if (typeof word !== 'string') throw 'This method is allowed only on strings';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function downloadDocumentByUrl(url: string) {
  let link: any = document.createElement('a');
  link.name = 'Download';
  link.target = '_blank';
  link.href = url;
  link.click();
  link = null;
}
