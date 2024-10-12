
import { Patient } from '@/entities/patient';
import { API } from '@/shared/Validators/api';
import { useEffect, useState } from 'react';


export const usePatientDescription = (idPaciente: string) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPatient = async () => {
    try {
      const foundPatient = await API.patient.getById(Number(idPaciente));
      setPatient(foundPatient);
      setError(null);
    } catch (error) {
      console.error('Error fetching Patient', error);
      setPatient(null);
      setError('No se encontró el paciente');
    }
  };

  useEffect(() => {
    if (idPaciente) {
      fetchPatient();
    }
  }, [idPaciente]);

  return { patient, error, fetchPatient };
};
