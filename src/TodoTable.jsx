import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function TodoList(props) {
    return (
        <div
            className="ag-theme-material"
            style={{
                height: '700px',
                width: '400px',
                margin: 'auto',
            }}
        >
            <AgGridReact
                columnDefs={props.columns}
                rowData={props.todos}

            >
            </AgGridReact>
        </div>
    )
}
