import { InputText } from "primereact/inputtext";
import React, { useRef } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

import  { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../service/ProductService';
import { Button } from "primereact/button";
import { Link } from "react-router-dom";


export function Home(){

    const [filterValue, setFilterValue] = useState('');
    const filterInputRef :any= useRef();
    const [products, setProducts] = useState();
    const productService = new ProductService();
 
 

    const filterTemplate = (options:any) => {

        let {filterOptions} = options;
    
        return (
            <div className="flex">
              <div className="flex m-2 "> <InputText className="search-bar topic" placeholder="search by book name" value={filterValue} ref={filterInputRef} onChange={(e) => myFilterFunction(e, filterOptions)} /> </div> 
              <div>   <Button className="cancel-btn topic" label=" cancel" onClick={() => myResetFunction(filterOptions)} /></div> 
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
                <Link to={`/rivews/${item.id}`}>
                  <img src={`images/product/${item.image}`} onError={(e) => e.currentTarget.src=''} alt={item.name} />
                  </Link>
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>   
                </div>
                <div className="product-list-action">
                <Link to={`/rivews/${item.id}`}>    <Button className="topic" label="Rivew"  /></Link>
                
                
               
                </div>

                
            </div>
           
            
        );
        
   
      
    }

    return(
        
        <><div className="card pt-5 ">
            <h5 className="head4"> BORN TO READ GO TO READ 📚</h5>
            <Splitter style={{ height: '300px' }}>
                <SplitterPanel className="flex align-items-center justify-content-center  " size={20} minSize={10}>

                    <img src="https://images.unsplash.com/photo-1512903491135-76ec8a4510b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80" width={250} height={300} alt="" />
                </SplitterPanel>
                <SplitterPanel size={80}>
                    <Splitter layout="vertical">
                        <SplitterPanel size={85}>
                            <Splitter>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                    <img src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" width={250} height={300} alt="" />
                                </SplitterPanel>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={60}>
                                    <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80" width={740} height={300} alt="" />
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>


                
            </Splitter>


        </div><div className="flex flex-row flex-wrap card-container blue-containe p-8 " >

<div>

<div className="orderlist-demo pr-4 ">
            <div className="card">
           
            <OrderList className="topic" value={products} header="what do you want to read 📚🤔" dataKey="id" itemTemplate={itemTemplate} 
             filter filterPlaceholder="search by name"  filterBy="name"  filterTemplate={filterTemplate} 
            
             onChange={(e:any) => setProducts(e.value)}>
            
               </OrderList>


            </div>
        </div>
</div>
                <div>
                    
                </div>

                <div className="head2">Best of 2022
                <div className="grid row-2 pt-5">
                <div className="col pr-5"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg" alt="" width={200} height={200} /></div>
                 <div className="col"> <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632632557l/11870085.jpg" alt="" width={200} height={200} /></div>
                 

</div>

               <div className="grid row-2  pt-4">
                <div className="col pr-5 "><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634140487l/51902088.jpg" alt="" width={200} height={200} /></div>
                 <div className="col"> <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622355533l/4667024._SY475_.jpg" alt="" width={200} height={200} /></div>
                 

</div>


                
    
                </div>

            </div></>
 
 


        

    )
}


