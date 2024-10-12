'use client';

import React, { PropsWithChildren } from 'react';
import styles from './Modal.module.css';
import DeleteIcon from '@/shared/Icons/DeleteIcon copy';
import Button from '../Button/Button';


interface Props extends PropsWithChildren {
  title: string;
  onClose: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  nameTitleButtonCancel: string;
  nameTitleButtonAdd: string;
  customButtons?: React.ReactNode;
  width?: string | number;
  seeSaveButton?: boolean;
}

const Modal: React.FC<Props> = ({
  title,
  children,
  onClose,
  onSubmit,
  nameTitleButtonCancel,
  nameTitleButtonAdd,
  customButtons,
  width = 380,
  seeSaveButton = true,
}) => {
  const isDeleteConfirmation =
    title === 'Nueva Aula' ||
    title === 'Agregar Periodo' ||
    title === '¿Seguro que deseas eliminar Matricula?' ||
    title === '¿Seguro que deseas eliminar al paciente?' ||
    title === '¿Seguro que deseas eliminar el Aula?' ||
    title === 'Editar Aula' ||
    title === '¿Seguro que deseas eliminar la evaluación' ||
    title === 'Editar Periodo';

  return (
    <div className={styles.contentTotalModal}>
      <div className={styles.contentTargetControl} style={{ width: width }}>
        <div className={styles.imgCloseTargetAddCustomer} onClick={onClose}>
          <DeleteIcon />
        </div>
        <h1 className={styles.titleControl}>{title}</h1>
        <form onSubmit={onSubmit}>
          <div
            className={
              isDeleteConfirmation
                ? styles.contentFormModalDelete
                : styles.contentFormModal
            }
          >
            {children}
          </div>
          <div className={styles.contentButonsControl}>
            {customButtons ?? (
              <>
                <Button
                  title={nameTitleButtonCancel}
                  variant='third'
                  onClick={onClose}
                />
                {seeSaveButton && (
                  <Button
                    title={nameTitleButtonAdd}
                    variant='primary'
                    type='submit'
                  />
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
