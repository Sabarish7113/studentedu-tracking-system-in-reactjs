import React from 'react';
import Sidebar from './Sidebar';

import { FaYoutube,FaSearch} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
      <h2 style={{ margin:"0",background:"white",boxShadow:"2px 2px 2px 2px gray",padding:"5px"}}><FaYoutube style={{fontSize:"40px",color:"red",position:"relative",top:"10px",border:"none"}}/>YOUTUBE<input style={{position:"relative",left:"450px",height:"2rem",width:"20rem"}}/><button style={{position:"relative",left:"28.1rem",height:"2.3rem",width:"4rem",background:"red"}}><FaSearch/></button></h2>     
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px',margin:"30px" }}>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/K_DNx5wcKN0" title="😲 ₹65 Lakhs - My New Robo Dog 🤖 | Madan Gowri | Tamil | MG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/bttt3qh6vVQ" title="ALL LUFFY VS GOROSEI FIGHT! Fan animation | One piece" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/M3oT3-4sSOY" title="Simulating Africa for 100 Days" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/spMqxS3a-H0" title="ONE PIECE: Zoro vs. Mihawk Fight | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/NhcBHIXZR68" title="Luffy uses Red Roc 4k (60 FPS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/BcJRXRJ0F-Y" title="This Android KING Killed Apple AI but.. 🔥🔥🔥 ft Google Pixel 9 &amp; 9 XL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/qSu6i2iFMO0" title="Sonic the Hedgehog 3 | Official Trailer (2024 Movie) Ben Schwartz, Jim Carrey, Keanu Reeves" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/VenNyElILlM" title="الريمونتادا التاريخية مباراة برشلونة و باريس 6-1◄ تشامبيونز ليج2017 [ عصام الشوالي] HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/7__r4FVj-EI" title="Octopus vs Underwater Maze" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/90OC4TQ7uHc" title="SPEED COMPARISON 3D | Animals 🦌" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/WEAL7opINiQ" title="The Best Maximals from Transformers: Rise of the Beasts 🌀 4K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/fiok-wgSOQ8" title="GamePlay Awakened From Rob Lucci || One Piece Bounty Rush" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
