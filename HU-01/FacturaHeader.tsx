// src/components/FacturaHeader.tsx
import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

interface Props {
  cliente: string;
  setCliente: (value: string) => void;
}

const FacturaHeader: React.FC<Props> = ({ cliente, setCliente }) => {
  return (
    <>
      <h2>Encabezado de Factura</h2>
      <IonItem>
        <IonLabel position="floating">Nombre del cliente</IonLabel>
        <IonInput value={cliente} onIonChange={e => setCliente(e.detail.value!)} />
      </IonItem>
    </>
  );
};

export default FacturaHeader;
