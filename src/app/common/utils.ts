import { i18n, TRANS } from "src/assets/translations";
import { MetadataFields } from "src/app/Common/constants/constants";

export function capitalize(word: string): string {
  if (typeof word !== "string") throw "This method is allowed only on strings";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function downloadDocumentByUrl(url: string) {
  let link: any = document.createElement("a");
  link.name = "Download";
  link.target = "_blank";
  link.href = url;
  link.click();
  link = null;
}

export const translateField = (metadata: string) => {
  switch (metadata) {
    case MetadataFields.PAYMENT_METHOD:
      return i18n.t(TRANS.metadata.paymentMethod);
    case MetadataFields.TAX_MONTH:
      return i18n.t(TRANS.metadata.taxMonth);
    case MetadataFields.AMOUNT:
      return i18n.t(TRANS.metadata.amount);
    case MetadataFields.FILE_EXTENSION:
      return i18n.t(TRANS.metadata.fileExtension);
    case MetadataFields.PERIOD_FROM:
      return i18n.t(TRANS.metadata.periodFrom);
    case MetadataFields.BOOK_YEAR:
      return i18n.t(TRANS.metadata.bookYear);
    case MetadataFields.TAX_YEAR:
      return i18n.t(TRANS.metadata.taxYear);
    case MetadataFields.FREE_TEXT:
      return i18n.t(TRANS.metadata.freeText);
    case MetadataFields.PERIOD_TO:
      return i18n.t(TRANS.metadata.periodTo);
    case MetadataFields.CURRENCY:
      return i18n.t(TRANS.metadata.currency);
    case MetadataFields.TITLE:
      return i18n.t(TRANS.metadata.title);
  }
};
