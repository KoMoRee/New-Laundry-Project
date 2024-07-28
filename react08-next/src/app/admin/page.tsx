"use client";

import React, { useState } from "react";
import { nanoid } from 'nanoid';
import Catagory from "./Catagory";
import Catagories from "./CatagoriesInterface";

interface CatagoryInputProps {
  addCatagoryFunc: (title: string) => void;
}

export default function AdminPage({ addCatagoryFunc }: CatagoryInputProps) {

  interface LotDatas {
    id : string;
    catagory : string;
    color : string;
    size : string;
    quantity : number;
    completed : boolean;
  }


  

  const [Catagories, setCatagories] = useState<Catagories[]>([]);
  const [CatagoryInput, setCatagoryInput] = useState("");


  const addCatagory = (newCatagoryTitle:string) => {
    const newCatagory = { id: Catagories.length+1, title: newCatagoryTitle};
    const newCatagories = [...Catagories, newCatagory];
    setCatagories(newCatagories);
  };

  const deleteCatagory = (id: number) => {
    const newCatagories = Catagories.filter((Catagory) => Catagory.id !== id);
    setCatagories(newCatagories);
  };

  const CatagoryInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCatagoryInput(event.target.value);
  };

  const CatagoryInputOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && CatagoryInput !== "") addCatagory(CatagoryInput);
  };


  return (
    <>
      <div style={{ maxWidth: "400px" }} className="mx-auto">
      <h1>Admin Page</h1>
        <h3>เพิ่มประเภท</h3>
        <input
        className="form-control"
        placeholder="...พิมพ์ชื่อประเภทที่นี่..."
        onChange={CatagoryInputOnChange}
        onKeyUp={CatagoryInputOnKeyUp}
  
        value={CatagoryInput}
        />

        <ul>
          {Catagories.map((catagory) => (
            <Catagory
              id={catagory.id}
              title={catagory.title}
              deleteTaskFunc={deleteCatagory}
              key={Catagories.indexOf(catagory)+1}
            />
          ))}
        </ul>
      </div>
        

    </>
  )
}
