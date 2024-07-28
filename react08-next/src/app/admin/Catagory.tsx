import React from 'react'
import Catagories from './CatagoriesInterface'


interface CatagoryProps {
    id : number;
    title : string;
    deleteTaskFunc: (cId:number) => void;
  }

export default function Catagory(Catagory : CatagoryProps) {


    const deleteBtnOnClick = () => {
        Catagory.deleteTaskFunc(Catagory.id);
    };

  return (
    <>
        <div  className="d-flex p-3 gap-2 align-items-center border-bottom">
            <li>{Catagory.title}</li>
            <button className="btn btn-danger" onClick={deleteBtnOnClick}>ลบ</button>
        </div>
    </>
  )
}
