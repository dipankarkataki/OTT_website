import React from "react";
import './Signup.css';
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";

function Signup(){
    return (
        <div className="h-full signup flex flex-row">
            <div className="media-area">
                <h1 className="text-white">Welcome To StreamTube</h1>
                <p className="text-white-alpha-40">Signup or Login to access the uninterupted streaming experience.</p>
                <Image src='.././assets/images/signup-banner.png' alt='signup banner'/>
            </div>
            <div className="form-area">
                <div className="flex flex-column gap-2 mb-3">
                    <label htmlFor="username" className="text-white">Full Name</label>
                    <InputText id="username" aria-describedby="username-help" placeholder="e.g Jhon" />
                </div>
                <div className="flex flex-row justify-content-between align-items-center gap-3">
                    <div className="flex flex-column gap-2">
                        <label htmlFor="username" className="text-white">Email</label>
                        <InputText id="username" aria-describedby="username-help" placeholder="e.g jhondoe@xyz.com" />
                    </div>
                    <div className="flex flex-column gap-2">
                        <label htmlFor="username" className="text-white">Phone Number</label>
                        <div className="p-inputgroup ">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;