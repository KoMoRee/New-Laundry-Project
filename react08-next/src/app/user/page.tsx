
import React, { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import '../components/Dropdown/Dropdown.css';

export default function UserPage() {

    let inputTitle = "adsa";
  return (
  <>
    <h1>User Page</h1>
    <Dropdown name={inputTitle}/>
    
  </>
  );
};