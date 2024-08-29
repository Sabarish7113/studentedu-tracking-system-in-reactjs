import React from 'react';
import CounterBox from './CounterBox';
import Sidebar from './Sidebar';

import { FaUserAlt, FaUserTie, FaUserCheck } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <h2 style={{ margin:"0",background:"blue",padding:"30px"}}>Student Management</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <CounterBox title="Regular Students" count={8} icon={FaUserAlt} bgColor="#e74c3c" />
          <CounterBox title="Remedial Students" count={13} icon={FaUserTie} bgColor="#9b59b6" />
          <CounterBox title="In Paid Clubs" count={0} icon={FaUserCheck} bgColor="#27ae60" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',margin:"30px" }}>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>Regular Enrollment</h3>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>Club Management</h3>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>Classroom Management</h3>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>SMS / EMAIL</h3>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>Attendance</h3>
          </div>
          <div style={{ backgroundColor: '#ecf0f1', padding: '20px', textAlign: 'center' }}>
            <h3><FaUserAlt style={{fontSize:"50px"}} /><br/>Clinic</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
