//COMPLETED

import React from "react";



interface HeaderProps{
    name: string,
    city: string,
    state: string,
    email: string,
    number: string,
}

export function HeaderSection({name, city, state, email, number}: HeaderProps){
    return <div className=" text-center mt-8 mb-7">
        <h1 className="font-bold text-2xl font-serif">{name}</h1>
        <span className="text-[12px]"><b>Email:</b> {email} <b>Cell:</b> {number}</span>
        <p className="font-serif text-[12px]">{city}, {state}</p>
    </div>

}