import React from 'react';
import { BuyPastas } from '../../redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const PastasContainer = () => {
  const pastas = useSelector(state => state.pastas);
  const dispatch = useDispatch();
  return (
    <div className="PastasContainer">
    <h1>Number of pastas kg : {pastas.pastas}</h1>
    <button onClick={()=>dispatch(BuyPastas())}>Buy pastas</button>
  </div>
  );
}


export default (PastasContainer)