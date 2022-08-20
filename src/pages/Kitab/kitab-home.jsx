import React from "react";

const KitabHome = ()=>{
    return (
        <>
            <h1 className="text-base font-normal mb-2">
                Untuk memulai, silahkan pergi ke menu <b className="text-lg">TAMBAH, </b>
                jika anda ingin menambahkan nama-nama alkitab (perjanjian lama, maupun baru).
            </h1>
            <h1 className="text-base font-normal mb-2">
                Jika anda ingin memperbaharui data, silahkan pergi ke menu <b className="text-lg">UPDATE, </b>
                di sana anda dapat memperbaharui nama-nama alkitab (perjanjian lama, maupun baru), yang sudah di tambahkan sebelumnya.
            </h1>
        </>
    );
}

export default KitabHome;