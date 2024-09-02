import React from 'react';
import { FaHome, FaBox, FaLayerGroup, FaHistory, FaMusic,FaShoppingBag , FaSteam,FaPlay } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div style={{ backgroundColor: 'white', color: '#ecf0f1', width: '40px', height: '120vh', padding: '20px' ,boxShadow:"2px 2px 2px 2px gray"}}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      </div>
      <div>
        <p style={{fontSize:"30px"}}><FaHome style={{fontSize:"20px",color:"black"}} /></p>
        <p style={{fontSize:"20px"}}><FaBox style={{fontSize:"20px",color:"black"}}  /> </p>
        <p style={{fontSize:"20px"}}><FaLayerGroup style={{fontSize:"20px",color:"black"}}  /></p>
        <p style={{fontSize:"20px"}}><FaHistory style={{fontSize:"20px",color:"black"}} /></p>
        <p style={{fontSize:"20px"}}><FaMusic style={{fontSize:"20px",color:"black"}}  /></p>
        <p style={{fontSize:"20px"}}><FaShoppingBag style={{fontSize:"20px",color:"black"}}  /></p>
        <p style={{fontSize:"20px"}}><FaSteam style={{fontSize:"20px",color:"black"}}  /><br/></p>
        <p style={{fontSize:"20px"}}><FaPlay style={{fontSize:"20px",color:"black"}}  /><br/></p>
      </div>
    </div>
  );
};

export default Sidebar;
