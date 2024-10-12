import Control from "@/shared/components/Control/Control";
import CustomSelect from "@/shared/components/CustomSelect/CustomSelect";
import Modal from "@/shared/components/Modal/Modal";
import { DocumentType } from "@/shared/types/entities/DocumentType";
import { API } from "@/shared/Validators/api";
import React, { useState } from "react";
import * as Yup from "yup";


interface EditPatientProps {
  onSuccess: () => void;
  onClose: () => void;
  idPatient: number;
  firstname: string;
  lastname: string;
  documentType: DocumentType;
  documentNumber: string;
  phoneNumber: string | undefined;
  email: string | undefined;
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Este campo es requerido"),
  lastname: Yup.string().required("Este campo es requerido"),
  documentNumber: Yup.string().required("Este campo es requerido"),
  email: Yup.string().email("Ingrese un correo electrónico válido"),
  phoneNumber: Yup.string().matches(
    /^\d{9}$/,
    "Ingrese un numero celular valido"
  ),
});

export default function EditPatient({
  onSuccess,
  onClose,
  idPatient,
  firstname,
  lastname,
  documentType,
  documentNumber,
  email,
  phoneNumber,
}: EditPatientProps) {
  const [formStatePatient, setFormStatePatient] = useState({
    firstname,
    lastname,
    documentType,
    documentNumber,
    email,
    phoneNumber,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = async (name: string, value: string) => {
    try {
      await validationSchema.validateAt(name, {
        ...formStatePatient,
        [name]: value,
      });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: (error as Yup.ValidationError).message,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormStatePatient({
      ...formStatePatient,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formStatePatient, { abortEarly: false });
      setErrors({});
      await API.patient.update(idPatient, {
        firstName: formStatePatient.firstname,
        lastName: formStatePatient.lastname,
        documentType: formStatePatient.documentType,
        documentNumber: formStatePatient.documentNumber,
        email: formStatePatient.email,
        phoneNumber: formStatePatient.phoneNumber,
      });
      onSuccess();
      onClose();
    } catch (validationErrors) {
      const errorMessage: { [key: string]: string } = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error) => {
        errorMessage[error.path!] = error.message;
      });
      setErrors(errorMessage);
      console.error("Error updating patient", validationErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleDocumentType = (value: DocumentType) => {
    setFormStatePatient((prevData) => ({ ...prevData, documentType: value }));
  };

  const documentTypeOptions: DocumentType[] = [
    { documentTypeId: 1, name: "Documento de identida", shortName: "DNI" },
    { documentTypeId: 2, name: "Carnet de Extranjería", shortName: "CE" },
  ];

  return (
    <Modal
      title="Editar Paciente"
      onClose={onClose}
      onSubmit={handleSubmit}
      nameTitleButtonAdd="Guardar"
      nameTitleButtonCancel="Cancelar"
    >
      <Control
        id="firstname"
        type="text"
        value={formStatePatient.firstname}
        onChange={handleChange}
        name="firstname"
        titleLabel="Primer nombre*"
        onBlur={handleBlur}
        error={errors.firstname}
      />

      <Control
        id="lastname"
        type="text"
        value={formStatePatient.lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        name="lastname"
        titleLabel="Primer apellido*"
        error={errors.lastname}
      />

      <CustomSelect
        labelName="Tipo de Documento*"
        options={documentTypeOptions}
        value={formStatePatient.documentType}
        onChange={handleDocumentType}
      />
      <Control
        id="documentNumber"
        name="documentNumber"
        type="text"
        value={formStatePatient.documentNumber}
        onChange={handleChange}
        titleLabel="N° de documento*"
        onBlur={handleBlur}
        error={errors.documentNumber}
      />
      <Control
        id="email"
        name="email"
        type="email"
        value={formStatePatient.email}
        onChange={handleChange}
        titleLabel="Correo Electrónico"
        onBlur={handleBlur}
        error={errors.email}
      />
      <Control
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        value={formStatePatient.phoneNumber}
        onChange={handleChange}
        titleLabel="Celular"
        onBlur={handleBlur}
        error={errors.phoneNumber}
      />
    </Modal>
  );
}
