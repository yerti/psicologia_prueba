'use client';
import React from 'react';
import styles from './IdPacientePage.module.css';
import { usePatientDescription } from '@/features/patient/hooks/usePatientDescription';
import PatientDescription from '@/features/patient/components/PatientDescription/PatientDescription';

interface IDProps {
  params: {
    idPaciente: string;
  };
}

export default function IdPaciente(props: IDProps) {
  const { idPaciente } = props.params;
  const { patient, error, fetchPatient } = usePatientDescription(idPaciente);

  const routes = [{ title: 'Paciente', route: '/pacientes' }];

  if (!patient) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className={styles.contentLinkButtonAddsubScription}>
        {/* <LinkHeaderRoute detailName='Detalle de paciente' routes={routes} /> */}
      </div>
      <div className={styles.contentDetailCustomer}>
        <PatientDescription onSuccess={fetchPatient} patient={patient} />
      </div>
    </div>
  );
}
