import { useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { DocumentType } from '@/shared/types/entities/DocumentType';
import { AddPatientRequestDto } from '@/shared/types/dtos/request/AddPatientRequestDto';
import { API } from '@/shared/Validators/api';

const documentTypeOptions: DocumentType[] = [
  { documentTypeId: 1, name: 'Documento de identida', shortName: 'DNI' },
  { documentTypeId: 2, name: 'Carnet de Extranjería', shortName: 'CE' },
  { documentTypeId: 3, name: 'PASAPORTE', shortName: 'PASAPORTE' },
];

const initialPatientState: AddPatientRequestDto = {
  firstName: '',
  lastName: '',
  birthday: '',
  documentNumber: '',
  phoneNumber: '',
  email: '',
  documentTypeId: 1,
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Este campo es requerido'),
  lastName: Yup.string().required('Este campo es requerido'),
  documentNumber: Yup.string().required('Este campo es requerido'),
  email: Yup.string()
    .matches(emailRegex, 'Ingrese un correo electrónico válido')
    .required('Este campo es requerido'),
  phoneNumber: Yup.string().matches(
    /^\d{9}$/,
    'Ingrese un número celular válido'
  ),
});

export const usePatientAdd = () => {
  const [patientForm, setPatientForm] =
    useState<AddPatientRequestDto>(initialPatientState);
  const [documentTypeSelected, setDocumentTypeSelected] =
    useState<DocumentType>(documentTypeOptions[0]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = async (name: string, value: string) => {
    try {
      await validationSchema.validateAt(name, {
        ...patientForm,
        [name]: value,
      });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: (error as Yup.ValidationError).message,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientForm((prevPatient) => ({ ...prevPatient, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (onSuccess: () => void) => {
    try {
      await validationSchema.validate(patientForm, { abortEarly: false });
      setErrors({});
      const newPatient = await API.patient.add(patientForm);
      console.log('Paciente agregado:', newPatient);
      onSuccess();
      toast.success('Paciente Agregado correctamente');
    } catch (validationErrors) {
      const errorMessages: { [key: string]: string } = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error: any) => {
        errorMessages[error.path!] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  const handleDocumentType = (value: DocumentType) => {
    setDocumentTypeSelected(value);
    setPatientForm((prevData) => ({
      ...prevData,
      documentTypeId: value.documentTypeId,
    }));
  };

  return {
    patientForm,
    documentTypeOptions,
    documentTypeSelected,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDocumentType,
    setPatientForm,
  };
};
