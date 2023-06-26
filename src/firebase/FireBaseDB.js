import { useState, useEffect } from "react";
import BookItem from "../components/BookItem/BookItems";
import { doc, getDoc, getFirestore } from 'firebase/firestore';



const FireBaseDB = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'books', 'ZN2QQJ3GB1Eq93rfi2NG');
      try {
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

    fetchData();
  }, []);

  return <BookItem data={data} />;
};

export default FireBaseDB;
