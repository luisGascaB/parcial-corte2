// src/components/ProductList.tsx
import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Camiseta', price: 20 },
  { id: 2, name: 'Pantalón', price: 40 },
  { id: 3, name: 'Zapatos', price: 60 }
];

interface Props {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <>
      <h2>Productos</h2>
      {products.map(product => (
        <IonCard key={product.id}>
          <IonCardHeader>
            <IonCardTitle>{product.name} - ${product.price}</IonCardTitle>
          </IonCardHeader>
          <IonButton onClick={() => onAddToCart(product)}>Agregar al carrito</IonButton>
        </IonCard>
      ))}
    </>
  );
};

export default ProductList;
