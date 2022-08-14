
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';


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
            url:'/mybook',
           
        },
        {
            label: 'Community',
            icon: 'pi pi-fw pi-user',
            items: [
           
                {
                    label: 'Ask the Author',
                

                },
                {
                    label: 'News',
                    icon: 'pi pi-fw pi-users',
                    url:'/news',
                   
                }
            ]
        },
        
        {
            
           
        }
    ];

    const start = <img alt="logo" src="/main-logo.png" onError={(e) => e.currentTarget.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}  height={40} width={100}></img>;
    const end = <button className="pi pi-fw pi-power-off  nobtn" style={{'fontSize': '1rem'}}> <br/></button>
   

    return (

        <div>
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    </div>

           
    );
}