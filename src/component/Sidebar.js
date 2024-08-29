import React from 'react';
import { FaUserAlt, FaMoneyCheckAlt, FaCogs, FaChartBar, FaClock } from 'react-icons/fa';
import img from '../../src/images/college logo.jpg';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: 'blue', color: '#ecf0f1', width: '200px', height: '120vh', padding: '20px' }}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <img src={img} alt="Logo" />
      </div>
      <div>
        <p style={{fontSize:"30px"}}><FaUserAlt style={{fontSize:"20px"}} /><br/> Student Management</p>
        <p style={{fontSize:"20px"}}><FaMoneyCheckAlt style={{fontSize:"20px"}} /><br/> Financial Management</p>
        <p style={{fontSize:"20px"}}><FaCogs style={{fontSize:"20px"}} /><br/> Quality Control</p>
        <p style={{fontSize:"20px"}}><FaChartBar style={{fontSize:"20px"}} /><br/> Report Delivery</p>
        <p style={{fontSize:"20px"}}><FaClock style={{fontSize:"20px"}} /><br/> Attendance</p>
      </div>
    </div>
  );
};

export default Sidebar;
