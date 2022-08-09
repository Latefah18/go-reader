
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export function Navbar(){

    

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home',url: '/login'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar', url: '/'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
            <TabMenu model={items} />
        <Link to={'/login'}> </Link>
               
          
             
                
            </div>

         </div>

           
    );
}