import { InputText } from "primereact/inputtext";
import React, { useRef } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

import  { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';
import { Button } from "primereact/button";


export function Home(){

    
    const [filterValue, setFilterValue] = useState('');
    const filterInputRef :any= useRef();
    const [products, setProducts] = useState();
    const productService = new ProductService();




    const filterTemplate = (options:any) => {
        let {filterOptions} = options;
    
        return (
            <div className="flex">
              <div className="flex m-2"> <InputText className="search-bar" value={filterValue} ref={filterInputRef} onChange={(e) => myFilterFunction(e, filterOptions)} /> </div> 
              <div>   <Button className="cancel-btn" label=" cancel" onClick={() => myResetFunction(filterOptions)} /></div> 
            </div>
        )
    }
    
    const myResetFunction = (options:any) => {
        setFilterValue('');
        options.reset();
        filterInputRef && filterInputRef.current.focus()
    }
    
    const myFilterFunction = (event:any, options:any) => {
        let _filterValue = event.target.value;
        setFilterValue(_filterValue);
        options.filter(event);
    }




    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item:any) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`images/product/${item.image}`} onError={(e) => e.currentTarget.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return(
        
        <><div className="card">
            <h5 className="head"> Born to read go to read 🚶📚</h5>
            <Splitter style={{ height: '300px' }}>
                <SplitterPanel className="flex align-items-center justify-content-center " size={20} minSize={10}>

                    <img src="https://images.unsplash.com/photo-1512903491135-76ec8a4510b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80" width={250} height={300} alt="" />
                </SplitterPanel>
                <SplitterPanel size={80}>
                    <Splitter layout="vertical">
                        <SplitterPanel className="flex align-items-center justify-content-center bg-yellow-50" size={15}>
                            <p className="topic">A room without books is like a body without a soul.</p>
                        </SplitterPanel>
                        <SplitterPanel size={85}>
                            <Splitter>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                    <img src="https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" width={200} height={250} alt="" />
                                </SplitterPanel>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                    <img src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={700} height={250} alt="" />
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>


        </div><div className="flex flex-row flex-wrap card-container blue-containe p-8">

<div>

<div className="orderlist-demo">
            <div className="card">
           
            <OrderList value={products} header="what do you want to read " dataKey="id" itemTemplate={itemTemplate} filter filterPlaceholder="search by name"  filterBy="name"  filterTemplate={filterTemplate} >    </OrderList>
 

            </div>
        </div>
</div>
                <div>
                    
                </div>

                <div className="head">Best of 2022</div>

            </div></>
 
 


        

    )
}

