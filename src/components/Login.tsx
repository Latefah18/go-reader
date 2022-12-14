import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login(){

    const [checked, setChecked] = useState({} );
 

    return(

        <div className="background1">
        
<div className="flex align-items-center justify-content-center p-6">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>
<Link to={'/home'}>
            <Button   label="Sign In"  className="w-full log-btn" /></Link>
        </div>
    </div>
   
</div>
</div>


    )
}


