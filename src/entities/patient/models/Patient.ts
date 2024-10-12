export interface Patient extends  Omit<Person, 'personId' | 'birthday'> {
  patientId: number;
  birthday: string;
  guard?: Person;
}

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

export interface DocumentType {
  documentTypeId: number;
  name: string;
  shortName: string;
}