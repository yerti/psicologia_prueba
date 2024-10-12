import { APIService } from "@/shared/api/api.service";
import { TestOption } from "@/shared/types/entities/TestOption";
import { mockTest } from "../mock/test.mock";
import { PaginatedRequest } from "@/shared/types/dtos/request/PaginatedRequest";
import { ListPatientsResponse } from "@/shared/types/dtos/response/ListPatientsResponse";
import { Patient } from "../models/Patient";
import { AddPatientRequestDto } from "@/shared/types/dtos/request/AddPatientRequestDto";
import { FindPatientByRequest } from "@/shared/types/dtos/request/FindPatientByRequest";
import { PatientFound } from "@/shared/types/entities/PatientFound";


export class PatientService extends APIService {
  constructor() {
    super('/patients');
  }
  private test: TestOption[] = [...mockTest];


  list(payload: PaginatedRequest): Promise<ListPatientsResponse> {
    return this.get<ListPatientsResponse>({ params: payload });
  }

  listTest(): Promise<TestOption[]> {
    return Promise.resolve(this.test); 
  }

  getById(patientId: number): Promise<Patient> {
    return this.get<Patient>({ path: `/${patientId}` });
  }

  add(payload: AddPatientRequestDto): Promise<Patient> {
    return this.post<Patient>({ params: payload });
  }

  update(patientId: number, payload: Partial<Patient>): Promise<Patient> {
    return this.patch<Patient>({ path: `/${patientId}`, params: payload });
  }

  remove(patientId: number): Promise<Patient | null> {
    return this.delete({ path: `/${patientId}` });
  }

  findBy(payload: FindPatientByRequest): Promise<PatientFound[]> {
    return this.get<PatientFound[]>({
      path: `/find-by`,
      params: payload, 
    });
  }
}
