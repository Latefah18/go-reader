import React, { useState, useEffect } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { PickList } from 'primereact/picklist';
import { ProductService } from '../service/ProductService';
import { ToggleButton } from 'primereact/togglebutton';

// import { bookss } from './Home';

export function Mybook() {

   let t :any = []
   console.log(t)
// eslint-disable-next-line no-lone-blocks
{
        const [source, setSource] = useState([]);
        const [target, setTarget] = useState([]as any);
        const productService = new ProductService();
     
        useEffect(() => {
            productService.getProductsSmall().then(data => setSource(data));
            localStorage.getItem("want")

        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
        const onChange = (event:any) => {
            setSource(event.source);
            setTarget(event.target);
        }

        t.push(target) 
        localStorage.setItem("want",JSON.stringify (t))

     
    
        const itemTemplate = (item:any) => {
            return (
                
                <div className="product-item">
               
                    <div className="image-container">
                        <img src={`images/product/${item.image}`} alt={item.name} />
                    </div>
                    <div className="product-list-detail">
                        <h4 className="mb-2 topic1">{item.name} </h4>
                    </div>
                    
                    </div>
                 
                
            );   
          
        }
       

        return (
         
            <div className="picklist-demo">
                <div className="card">
                    <PickList className='title' source={source} target={target} itemTemplate={itemTemplate} sourceHeader=" Books List 📚 " targetHeader="books Iwant to read"
                        sourceStyle={{ height: '300px' }} targetStyle={{ height: '300px' }} onChange={onChange}
                    
       
                        />
                </div>
                
            </div>
           
           
        );
   

    }
                     
}





 
//     const [products, setProducts] = useState([]);
//     const [checked2, setChecked2] = useState(false);
//     const [bookss, setBookss] = useState(localStorage.getItem('bookss')as any);
  
//     // const productService = new ProductService();



//     useEffect(() => {
//     console.log(bookss)

//         // setBookss(localStorage.getItem('bookss'))
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps



    
//     const itemTemplate = () => {

//         return (
          
//             <div className="product-item">
                
//                 <img src={bookss} onError={(e) => e.currentTarget.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='{data.name}' />
//                 <div className="product-detail">
//                     <div className="product-name"> The fault in our star  
//                    </div> 
//                    {/* <div className='product-detail'>
//                     name of book
//                </div> */}
                   
            
//                 </div>
//                 <div className="product-action"> 
//                 <ToggleButton className="topic" onLabel="read" offLabel="want-read" checked={checked2} onChange={(e) => setChecked2(e.value)} />
//                 <Button className="topic" label="delete"  />
                   
//                 </div>
//             </div>
   
            
//         );
        
//     }

//     return (
//         <><div className='head2 pt-3'><h2> My Books 📚 </h2></div><div className="datascroller-demo  flex align-items-center justify-content-center p-5">

//             <div className="card">
            
//                 <DataScroller className="topic2" value={bookss} itemTemplate={itemTemplate} rows={1} inline scrollHeight="500px" header="my book state"  />
         
//             </div>
//         </div></>

       
//     );
// }




        
  