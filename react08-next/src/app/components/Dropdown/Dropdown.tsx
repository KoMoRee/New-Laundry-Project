"use client";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown as BootstrapDropdown, DropdownButton } from 'react-bootstrap';


export default function Dropdown(inputTitle:string) {
  
  const [selectedItem, setSelectedItem] = useState<string>('Catagory');

  const handleItemClick = (item: string) => {
    setSelectedItem(inputTitle);
  };

  const menuItems: string[] = ['Option 1', 'Option 2', 'Option 3'];

  
  return (
    <BootstrapDropdown>
      <DropdownButton id="dropdown-basic-button" title={selectedItem}>
        {menuItems.map((item) => (
          <BootstrapDropdown.Item key={item} onClick={() => handleItemClick(item)}>
            {item}
          </BootstrapDropdown.Item>
        ))}
      </DropdownButton>
    </BootstrapDropdown>
  );
};


