import PatientList from '@/features/patient/components/PatientList/PatientList';
import Title from '@/shared/components/Title/Title';
import React from 'react';

export default function Pacientes() {
  return (
    <div>
      <Title title='Pacientes' />
      <PatientList />
    </div>
  );
}
