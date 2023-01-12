import React, { useState } from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

import {maindata} from "./maindata.js"

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import SubTable from './SubTable';

function App() {

  const [isOpening, setIsOpening] = useState(true);

  const products = maindata;
  const columns = [{
    dataField: '',
    text: 'Status'
  }, {
    dataField: 'taxid',
    text: 'Tax ID',
    sort: true,
    // sortCaret: (order, column) => {customSortCaret(order, column)}
  }, {
    dataField: 'modifiedby',
    text: 'Modified By',
    sort: true,
    // sortCaret: (order, column) => {customSortCaret(order, column)}
  }, {
    dataField: 'modifiedon',
    text: 'Modified On',
    sort: true,
    // sortCaret: (order, column) => {customSortCaret(order, column)}
    formatter: (cell, row, rowIndex, extraData) => (
      cell.split(" ")[0]
    ),
  }, {
    dataField: '',
    text: 'Delete',
    formatter: (cell, row, rowIndex, extraData) => (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
      </div>
    ),
  }
];

// const customSortCaret = (order, column) => {
//     if (!order) return (<span>&nbsp;&nbsp;Desc/Asc</span>);
//     else if (order === 'asc') return (<span>&nbsp;&nbsp;Desc/<font color="red">Asc</font></span>);
//     else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red">Desc</font>/Asc</span>);
//     return null;
// }

// const defaultSorted = [{
//   dataField: 'taxid',
//   order: 'asc'
// }];


const paginationOptions = {
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: true, // Always show next and previous button
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    sizePerPage: 5,
    disablePageTitle: true,
}

const expandRow = {
  renderer: row => (
    isOpening ? <>Loading...</> : <SubTable setIsOpening={setIsOpening} id={row.id} />
  ),
  onlyOneExpanding: true,
  showExpandColumn: true,
  expandByColumnOnly: true,
  expandHeaderColumnRenderer: ({ isAnyExpands }) => {
    if (isAnyExpands) {
      return <>Details</>;
    }
    return <>Details</>;
  },
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return (
        <b className='svg-chevron'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></b>
      );
    }
    return (
      <b className='svg-chevron'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></b>
    );
  },
  onExpand: (row, isExpand, rowIndex, e) => {
    setTimeout(()=>{
      setIsOpening(false);
  }, 1000)
  }
};

  return (
    <div className="App">
      <h2>Table</h2>
      <div className='container'>
        <BootstrapTable keyField='taxid'
          id="tableWithChildRows"
          bordered={ false }
          data={ products }
          columns={ columns }
          expandRow={ expandRow } 
          // defaultSorted={ defaultSorted } 
          pagination={ paginationFactory(paginationOptions) }
          />
      </div>
    </div>
  );
}

export default App;
