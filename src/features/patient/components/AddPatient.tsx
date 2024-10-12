import React from 'react';
import Modal from '@/shared/components/Modal/Modal';
import Control from '@/shared/components/Control/Control';
import CustomSelect from '@/shared/components/CustomSelect/CustomSelect';
import Calendar from '@/shared/components/Calendar/Calendar';
import { usePatientAdd } from '../hooks/usePatientAdd';

interface AddPatientProps {
  onClosePatient: () => void;
  onSuccess: () => void;
}

export default function AddPatients({
  onClosePatient,
  onSuccess,
}: AddPatientProps) {
  const {
    patientForm,
    documentTypeOptions,
    documentTypeSelected,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDocumentType,
    setPatientForm,
  } = usePatientAdd();

  const handleSubmitWrapper = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(onSuccess);
    onClosePatient();
  };

  return (
    <Modal
      title='Agregar Paciente'
      onClose={onClosePatient}
      onSubmit={handleSubmitWrapper}
      nameTitleButtonAdd='Agregar'
      nameTitleButtonCancel='Cancelar'
    >
      <Control
        id='firstName'
        type='text'
        value={patientForm.firstName}
        onChange={handleChange}
        name='firstName'
        titleLabel='Primer nombre*'
        onBlur={handleBlur}
        error={errors.firstName}
      />

      <Control
        id='lastName'
        type='text'
        value={patientForm.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        name='lastName'
        titleLabel='Primer apellido*'
        error={errors.lastName}
      />

      <CustomSelect
        labelName='Tipo de Documento*'
        options={documentTypeOptions}
        value={documentTypeSelected}
        onChange={handleDocumentType}
      />
      <Control
        id='documentNumber'
        type='text'
        value={patientForm.documentNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        name='documentNumber'
        titleLabel='N° de documento*'
        error={errors.documentNumber}
      />
      <Control
        id='email'
        type='email'
        value={patientForm.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name='email'
        titleLabel='Correo Electrónico'
        error={errors.email}
      />
      <Control
        id='phone'
        type='tel'
        value={patientForm.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        name='phoneNumber'
        titleLabel='Celular'
        error={errors.phoneNumber}
      />
      <Calendar
        labelName='Cumpleaños*'
        onChange={(date) => {
          const formattedDate = date ? new Date(date).toISOString() : '';
          setPatientForm((prevForm) => ({
            ...prevForm,
            birthday: formattedDate,
          }));
        }}
      />
    </Modal>
  );
}
