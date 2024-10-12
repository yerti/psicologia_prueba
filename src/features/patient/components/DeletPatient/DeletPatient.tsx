import React from 'react';
import styles from './DeletPatient.module.css';
import { usePatientDelete } from '../../hooks/usePatientDelete';
import Modal from '@/shared/components/Modal/Modal';

interface DeletClientProps {
  nameTotal: string;
  onCloseDelet: () => void;
  patientId: number;
}

export default function DeletPatient({
  nameTotal,
  onCloseDelet,
  patientId,
}: DeletClientProps) {
  const { deletePatient } = usePatientDelete(); 

  const handleDeletePatient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deletePatient(patientId, onCloseDelet); 
  };

  return (
    <Modal
      title='¿Seguro que deseas eliminar al paciente?'
      onClose={onCloseDelet}
      onSubmit={handleDeletePatient}
      nameTitleButtonAdd='Eliminar'
      nameTitleButtonCancel='Cancelar'
    >
      <p className={styles.paragraphDeleteClient}>{nameTotal}</p>
    </Modal>
  );
}
