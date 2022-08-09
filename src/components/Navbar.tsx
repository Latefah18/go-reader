
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


export function Navbar(){

    
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/home',
                    
        },
        {
            label: 'MyBooks',
            icon: 'pi pi-book',
           
        },
        {
            label: 'Community',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'quotes',
                    

                },
                {
                    label: 'Ask the Author',
                

                },
                {
                    label: 'people',
                    icon: 'pi pi-fw pi-users',
                   
                }
            ]
        },
        
        {
            
           
        }
    ];

    const start = <img alt="logo" src="main-logo.png" onError={(e) => e.currentTarget.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}  height={40} width={100}></img>;
    const end = <button className="pi pi-fw pi-power-off  nobtn" style={{'fontSize': '1rem'}}></button>
   

    return (



        <div>
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    </div>

           
    );
}