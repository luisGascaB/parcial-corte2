// src/pages/Home.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/react';
import ProductList from '../components/ProductList';
import FacturaHeader from '../components/FacturaHeader';
import PaymentType from '../components/PaymentType';

const Home: React.FC = () => {
  const [cliente, setCliente] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [carrito, setCarrito] = useState<any[]>([]);

  const agregarProducto = (producto: any) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Facturación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <FacturaHeader cliente={cliente} setCliente={setCliente} />
        <ProductList onAddToCart={agregarProducto} />
        <PaymentType metodoPago={metodoPago} setMetodoPago={setMetodoPago} />

        <h2>Resumen del Carrito</h2>
        <IonList>
          {carrito.map((item, index) => (
            <IonItem key={index}>
              {item.name} - ${item.price}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
