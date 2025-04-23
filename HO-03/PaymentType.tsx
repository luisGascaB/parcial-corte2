// src/components/PaymentType.tsx
import React from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

interface Props {
  metodoPago: string;
  setMetodoPago: (value: string) => void;
}

const PaymentType: React.FC<Props> = ({ metodoPago, setMetodoPago }) => {
  return (
    <>
      <h2>Método de Pago</h2>
      <IonItem>
        <IonLabel>Selecciona</IonLabel>
        <IonSelect value={metodoPago} onIonChange={e => setMetodoPago(e.detail.value)}>
          <IonSelectOption value="efectivo">Efectivo</IonSelectOption>
          <IonSelectOption value="tarjeta">Tarjeta</IonSelectOption>
          <IonSelectOption value="transferencia">Transferencia</IonSelectOption>
        </IonSelect>
      </IonItem>
    </>
  );
};

export default PaymentType;
