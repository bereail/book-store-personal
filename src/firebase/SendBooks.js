import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import BookItem from "../components/BookItem/BookItems";

const FireBase = () => {
  const [data, setData] = useState({});
  const { detalleID } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'books', 'ZN2QQJ3GB1Eq93rfi2NG');
    
    // Aquí se define el objeto de datos que quieres enviar a Firebase
    const newData = {
      // Propiedades de los datos que deseas guardar
      titulo: "La Divina Comedia",
      autor: "Dante Alighieri",
      anioEmision: 1320,
      cantidadPaginas: 600,
      imageUrl: "https://example.com/imagen-la-divina-comedia.jpg"
    };

    // Utiliza el método setDoc() para guardar los datos en Firebase
    setDoc(queryDoc, newData)
      .then(() => {
        console.log("Datos enviados exitosamente a Firebase");
        setData(newData); // Actualiza el estado con los datos enviados
      })
      .catch((error) => {
        console.log('Error al enviar los datos a Firebase:', error);
      });
  }, []);

  return <BookItem data={data} />;
};

export default FireBase;
