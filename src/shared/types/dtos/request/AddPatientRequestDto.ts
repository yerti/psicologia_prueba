import { Patient } from '@/types/entities/Patient';
import { Person } from '@/types/entities/Person';

export interface AddPatientRequestDto
  extends Omit<Patient, 'patientId' | 'documentType' | 'guard'> {
  documentTypeId: number;
  guard?: Omit<Person, 'personId'>;
}
