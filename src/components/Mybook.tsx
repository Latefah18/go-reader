import React, { useState, useEffect } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';
import { ToggleButton } from 'primereact/togglebutton';



export function Mybook() {

  
    const [products, setProducts] = useState([]);
    
    const [checked2, setChecked2] = useState(false);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data:any) => {

        

        return (
            <div className="product-item">
                
                <img src={`images/product/${data.image}`} onError={(e) => e.currentTarget.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                   <span className="product-category">{data.category}</span>
                </div>
                <div className="product-action"> 
                 {/*errrrrrrrrror*/}
                <ToggleButton className="topic" onLabel="read" offLabel="want-read" checked={checked2} onChange={(e) => setChecked2(e.value)} />
                <Button className="topic" label="delete"  />
                   
                </div>
            </div>
        );
    }

    return (
        <><div className='head2 pt-3'><h2>📚 My Book </h2></div><div className="datascroller-demo  flex align-items-center justify-content-center p-8">

            <div className="card">
           
                <DataScroller  value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to view your Books"      />
          
            </div>
        </div></>

       
    );
}




        
  