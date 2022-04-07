// Hook
import React, {useState, useEffect} from 'react';

// Firebase - Firestore
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig';

// Components
import CardComponent from '../CardComponent/CardComponent';

// Styles
import './CardList.css';

const CardList = () => {

  // useState
  const [productoData, setProductoData] = useState([]);

  // useEffect
  useEffect(() =>{
    const getProductos = async () => {
      const q = query(collection(db,'productos'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProductoData(docs);
    };
    getProductos();
  },[])

  return (

      <div className='grid-container'>
        {productoData.map((data) =>{
          return (
            <CardComponent productoData={data} />
          )
        })}
      </div>

  )
}

export default CardList;
