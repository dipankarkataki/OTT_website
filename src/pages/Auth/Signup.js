import React, {useState} from "react";
import './Signup.css';
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { Button } from "primereact/button";


function Signup(){

    const [selectedCountry, setSelectedCountry] = useState(null);
    const country = [
        {
            "name": "Afghanistan",
            "dial_code": "+93",
            "code": "AF"
            },
            {
            "name": "Aland Islands",
            "dial_code": "+358",
            "code": "AX"
            },
            {
            "name": "Albania",
            "dial_code": "+355",
            "code": "AL"
            },
    ];
    return (
        <div className="h-full signup flex flex-row flex-wrap md:flex-nowrap justify-content-center align-items-center ">
            <div className="media-area">
                <h1 className="text-white text-4xl text-center">Welcome To StreamTube</h1>
                <p className="text-white-alpha-50 ml-3 line-height-3 text-center">Signup or Login to access the uninterupted streaming experience.</p>
                <Image src='.././assets/images/signup-banner.png' alt='signup banner' width="100%" className="hidden md:block"/>
            </div>
            <div className="form-area h-full w-50rem">
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="username" className="text-white mb-2">Full Name</label>
                    <InputText id="username" aria-describedby="username-help" placeholder="e.g Jhon" />
                </div>
                <div className="flex md:flex-row flex-column justify-content-between align-items-center gap-3">
                    <div className="flex flex-column gap-2">
                        <label htmlFor="username" className="text-white mb-2">Email</label>
                        <InputText id="username" aria-describedby="username-help" placeholder="e.g jhondoe@xyz.com" />
                    </div>
                    <div className="flex flex-column gap-2">
                        <label htmlFor="username" className="text-white mb-2">Phone Number</label>
                        <InputText id="username" aria-describedby="username-help" placeholder="e.g 789xxxxxxx" />
                    </div>
                </div>
                <div className="mt-6">
                    <Button label='Sign Up' severity="danger"  raised className="w-full" size="large"/>
                </div>
                <div className="text-center mt-3">
                    <h3 className="text-white">or</h3>
                </div>
                <div className="social-login">
                    <div className="card flex justify-content-center">
                        <Button className="bg-white text-800 font-bold border-1 border-white" label="Sign In with">
                            <img alt="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII=" className="h-2rem ml-2"></img>
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Signup;