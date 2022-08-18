import React from "react";

const Sukses = (props)=>{
    return (
        <div className={`flex rounded px-5 py-3 items-center flex-wrap bg-teal-400 ${props.classProps}`}>
            <p className="text-sm">
                <b className="text-lg font-semibold">Sukses, </b>
                {props.pesan??"Pesan Default"}
            </p>
        </div>
    )
}
const Gagal = (props)=>{
    return (
        <div className={`flex rounded px-5 py-3 items-center flex-wrap bg-rose-400 ${props.classProps}`}>
            <p className="text-sm">
                <b className="text-lg font-semibold">Gagal, </b>
                {props.pesan??"Pesan Default"}
            </p>
        </div>
    )
}

export { Sukses, Gagal }