'use client';
import React, { useState } from 'react';
import styles from './PatientList.module.css';
import { Patient } from '@/entities/patient';
import { TableHeader } from '@/shared/types/entities/TableHeader';
import ControlSearch from '@/shared/components/ControlSearch/ControlSearch';
import Button from '@/shared/components/Button/Button';
import CardContainer from '@/shared/components/CardContainer/CardContainer';
import TableContainer from '@/shared/components/TableContainer/TableContainer';
import AddPatients from '../AddPatient';
import SubTitle from '@/shared/components/SubTitle/SubTitle';
import { usePatientList } from '../../hooks/usePatientsList';


export default function PatientList() {
  const {
    filteredPatients,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPatients,
    fetchPatientList,
  } = usePatientList();

  const [isAddPatientVisible, setIsAddPatientVisible] = useState(false);

  const headers: TableHeader<Patient>[] = [
    {
      label: 'ID',
      value: (patient: Patient) => `${patient.patientId}`,
      width: '10%',
    },
    {
      label: 'Nombre',
      value: (patient: Patient) => `${patient.firstName} ${patient.lastName}`,
      width: '30%',
    },
    {
      label: 'DNI',
      value: (patient: Patient) => patient.documentNumber,
      width: '20%',
    },
  ];

  const handleOpenAddPatient = () => {
    setIsAddPatientVisible(true);
  };

  const handleCloseAddPatient = () => {
    setIsAddPatientVisible(false);
  };

  const handleAddPatientSuccess = async () => {
    await fetchPatientList(currentPage, pageSize);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalPatients / pageSize);

  return (
    <div>
      <div className={styles.contetSearchButtonAddCustomer}>
        <div className={styles.contentInputButtonSearch}>
          <div className={styles.contentSearchCustomers}>
            <ControlSearch
              labelName='Buscar por nombre o DNI'
              value={searchTerm}
              handleSearch={(event) => setSearchTerm(event.target.value)} 
            />
          </div>
          <Button title='Buscar' img='icon_search' variant='search' />
        </div>
        <Button
          title='Agregar Paciente'
          img='icon_person'
          variant='add_plan'
          onClick={handleOpenAddPatient}
        />
        {isAddPatientVisible && (
          <AddPatients
            onSuccess={handleAddPatientSuccess}
            onClosePatient={handleCloseAddPatient}
          />
        )}
      </div>

      <CardContainer>
        <SubTitle nameSubTitle='Lista' />
        <TableContainer
          headers={headers}
          rows={filteredPatients}
          rowHref={(row: Patient) => `/pacientes/${row.patientId}`}
          totalPages={totalPages}
          pageChange={handlePageChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          currentPage={currentPage}
          totalItems={totalPatients}
        />
      </CardContainer>
    </div>
  );
}
