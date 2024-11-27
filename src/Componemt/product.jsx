import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Imagerender from './imagerender';

export default function Product() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) =>
            setProduct(response.data)).catch((err) => console.error(err))
    })

    const columnDefs=[
        {headerName:'ID',field:'id',flex:1},
        {headerName:'Title',field:'title',flex:2},
        {headerName:'Price',field:'price',flex:1},
        {headerName:'Category',field:'category',flex:1},
        {headerName:'Image',field:'image',cellRenderer:Imagerender,flex:1},
        {headerName:'Reating',field:'rating.rate',flex:1},
        {headerName:'Count',field:'rating.count',flex:1},
        
    ];
    return (
        <div className='ag-theme-quartz prodct-table' style={{textAlign:'center'}}>
        <AgGridReact 
            rowData={products}
            rowHeight={60}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
        />
        </div>
    )
}
