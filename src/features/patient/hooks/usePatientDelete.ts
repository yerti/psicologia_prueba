
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { API } from '@/shared/Validators/api';

export const usePatientDelete = () => {
  const router = useRouter();

  const deletePatient = async (patientId: number, onClose: () => void) => {
    try {
      await API.patient.remove(patientId);
      toast.success('Se eliminó al cliente correctamente');
      onClose();
      router.push('/pacientes');
    } catch (err) {
      toast.error('No se puede eliminar al paciente.');
      onClose();
    }
  };

  return { deletePatient };
};
