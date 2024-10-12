import { RecommendedAction } from "./RecommendedAction";

export interface EvaluationResult {
  evaluationResultId: number;
  value: string;
  comment?: string;
  recommendedActions: RecommendedAction[];
  createAt: string;
  updateAt: string;
}
