import React, { useState, useEffect } from 'react'

import { flexbox } from '@mui/system';

import { useParams } from 'react-router-dom';

import {
    collection,
    query,
    where,
    getDocs,
    documentId,
} from 'firebase/firestore';

import { db } from '../../Firebase/firebaseConfig';

import './ProductDetail.css';

import CardComponentDetail from '../../Components/CardComponentDetail/CardComponentDetail';

const ProductDetail = () => {
    const [prodData, setProdData] = useState([]);

    console.log(prodData)

    const {id} = useParams();
    console.log(id)

    // useEffect
  useEffect(() =>{
    const getProd = async () => {
      const q = query(collection(db,'productos'), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProdData(docs);
    };
    getProd();
  },[id])


  return (
    <div className='bodyDetail'>
        {prodData.map((data) => {
            return <CardComponentDetail prodData={data} key={data.id} />
        })}
    </div>
  )
}

export default ProductDetail;