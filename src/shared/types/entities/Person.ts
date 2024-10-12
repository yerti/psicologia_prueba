import { DocumentType } from "./DocumentType";

export interface Person {
  personId: number;
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  birthday?: string;
  phoneNumber?: string;
  email?: string;
}
