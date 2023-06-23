import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleID } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const firestore = getFirestore();
        const queryDoc = doc(firestore, 'library', '4uHJFJaljiiT28jsMTv5');
        const docSnap = await getDoc(queryDoc);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    fetchItem();
  }, []);

  return (
    <ItemDetail
      bookTitle={data.title}
      bookAuthor={data.author}
      bookDateRead={data.dateRead}
      bookPageCount={data.pageCount}
    />
  );
};

export default ItemDetailContainer;
