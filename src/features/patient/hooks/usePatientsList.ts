import { useEffect, useState } from 'react';
import { Patient } from '@/entities/patient';
import { API } from '@/shared/Validators/api';

export const usePatientList = () => {
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalPatients, setTotalPatients] = useState(0);

  const fetchPatientList = async (currentPage: number, pageSize: number) => {
    try {
      const patientList = await API.patient.list({ currentPage, pageSize });
      setPatientList(patientList.data);
      setFilteredPatients(patientList.data);
      setTotalPatients(patientList.totalItems);
    } catch (error) {
      console.error('Error al llamar la lista de pacientes:', error);
    }
  };

  useEffect(() => {
    fetchPatientList(currentPage, pageSize);
  }, [currentPage, pageSize]);

  useEffect(() => {
    if (patientList && patientList.length > 0) {
      const results = patientList.filter(
        (patient) =>
          `${patient.firstName} ${patient.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          patient.documentNumber.toString().includes(searchTerm)
      );
      setFilteredPatients(results);
    } else {
      setFilteredPatients([]);
    }
  }, [searchTerm, patientList]);

  return {
    patientList,
    filteredPatients,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPatients,
    fetchPatientList,
  };
};
