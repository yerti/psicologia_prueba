export interface PatientFound {
  patientId: number;
  firstName: string;
  lastName: string;
  documentNumber: string;
  birthday: string;
  email: string;
  phoneNumber: string;
  documentType: {
    documentTypeId: number;
    name: string;
    shortName: string;
  };
}
