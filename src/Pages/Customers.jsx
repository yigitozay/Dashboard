import React from "react"
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from "@syncfusion/ej2-react-grids"
import { Header } from "../Components"
import { customersData,customersGrid } from "../Data/dummy"

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='page' title='Customers' />
      <GridComponent  dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{allowDeleting:true, allowEditing:true}} width='auto'>
        <ColumnsDirective>
          {customersGrid.map((item,index)=> (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar, Selection,Sort,Edit,Filter]} /> 
      </GridComponent>
    </div>
  )
}

export default Customers