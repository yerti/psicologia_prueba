import { AddEvaluationDetailRequest } from './AddEvaluationDetailRequest';

export interface AddEvaluationRequest {
  patientId: number;
  testId: number;
  evaluationDate: string;
  details: AddEvaluationDetailRequest[];
}
