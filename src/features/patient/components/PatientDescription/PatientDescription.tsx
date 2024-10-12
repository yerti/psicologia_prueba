import React, { useState } from 'react';
import styles from './PatientDescription.module.css';
import { Patient } from '@/entities/patient';
import { toast } from 'react-toastify';
import { DateType } from '@/shared/types/entities/DateType';
import Title from '@/shared/components/Title/Title';
import AddOrDeleteOption from '@/shared/components/AddOrDeleteOptions/AddOrDeleteOptions';
import EditPatient from '../EditPatient';
import CardContainer from '@/shared/components/CardContainer/CardContainer';
import SubTitle from '@/shared/components/SubTitle/SubTitle';
import DeletPatient from '../DeletPatient/DeletPatient';
import Dates from '@/shared/components/Dates/Dates';


interface PatientDescriptionProps {
  patient: Patient;
  onSuccess: () => void;
}

export default function PatientDescription({
  patient,
  onSuccess,
}: PatientDescriptionProps) {
  const [isEditPatientVisible, setIsEditPatientVisible] = useState(false);
  const [isDeletClientVisible, setIsDeletClientVisible] = useState(false);
  const getDisplayValue = (value: any) => {
    return value ? value : '-';
  };

  const handleOpenEditPatient = () => {
    setIsEditPatientVisible(true);
  };
  const handleClosePatient = () => {
    setIsEditPatientVisible(false);
  };

  const handleOpenDeletPatient = () => {
    setIsDeletClientVisible(true);
  };
  const handleCloseDeletPatient = () => {
    setIsDeletClientVisible(false);
  };

  const handlePatientUpdate = () => {
    toast.success('Cliente actualizado exitosamente');
    onSuccess();
    handleClosePatient();
  };

  const dateList: DateType[] = [
    {
      key: 'Nombre y Apellido',
      value: `${patient.firstName}`,
    },
    {
      key: 'Fecha de nacimiento',
      value: `${patient.birthday}`,
    },
    {
      key: 'Tipo de documento',
      value: patient.documentType
        ? getDisplayValue(patient.documentType.name)
        : 'No disponible',
    },
    {
      key: 'Num. Documento',
      value: `${patient.documentNumber}`,
    },
    {
      key: 'Nº Celular',
      value: `${patient.phoneNumber}`,
    },
    {
      key: 'Correo electrónico',
      value: `${patient.email}`,
    },
    // {
    //   key: "Dirección",
    //   value: `${patient.person.}`,
    // },
  ];
  return (
    <div>
      <div className={styles.contentButtonTitlePatientDescription}>
        <Title title='Detalle de paciente' />
        <AddOrDeleteOption
          textOption1='Editar'
          imgOption1='/images/icons8Editar.svg'
          onClickDelet={handleOpenDeletPatient}
          onClickEdit={handleOpenEditPatient}
        />
        {isDeletClientVisible && (
          <DeletPatient
            patientId={patient.patientId}
            onCloseDelet={handleCloseDeletPatient}
            nameTotal={`${patient.firstName} ${patient.lastName}`}
          />
        )}
        {isEditPatientVisible && (
          <EditPatient
            idPatient={patient.patientId}
            firstname={patient.firstName}
            lastname={patient.lastName}
            documentType={patient.documentType}
            documentNumber={patient.documentNumber}
            phoneNumber={patient.phoneNumber}
            email={patient.email}
            onClose={handleClosePatient}
            onSuccess={handlePatientUpdate}
          />
        )}
      </div>
      <CardContainer>
        <SubTitle nameSubTitle='Datos del paciente' />
        <div className={styles.contentImgDatesPatient}>
          <img src='/images/imagePerfil.svg' alt='' />
          <div>
            <Dates dates={dateList} />
          </div>
        </div>
      </CardContainer>
      <CardContainer>
        <SubTitle nameSubTitle='Historial de evaluaciones' />
        {/* <DetailAssessment idPatiente={patient.patientId} /> */}
      </CardContainer>
    </div>
  );
}
