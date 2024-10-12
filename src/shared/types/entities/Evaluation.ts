import { EvaluationDetail } from "./EvaluationDetail";
import { EvaluationResult } from "./EvaluationResult";
import { Patient } from "./Patient";
import { Test } from "./Test";

export interface Evaluation {
  evaluationId: number;
  patient: Patient;
  test: Test;
  evaluationDate: string;
  details: EvaluationDetail;
  evaluationResult?: EvaluationResult;
  createAt: string;
  updateAt: string;
}
