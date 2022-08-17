import React, { useState } from "react";
import { MenuIcon, BookOpenIcon, BookmarkIcon, ClipboardListIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
// Defenitions Component
import KitabDefenition from "../components/home-defenitions/kitab-defenition";
import PerikopDefenition from "../components/home-defenitions/perikop-defenition";
import BacaanDefenition from "../components/home-defenitions/bacaan-defenition";

const Home = (props)=>{
    const [expand, setExpand] = useState(1);
    return (
        <>
            <section className="flex flex-col p-5">
                <h1 className="font-bold text-3xl my-5">
                    Alkitab Bahasa Mamasa
                </h1>
                <h3 className="font-semibold text-xl">
                    Selamat bergabung teman-teman, dalam projek ini.
                    Terima kasih karena telah meluangkan waktu untuk turut membantu dalam proses pengembangan projek ini.
                </h3>
            </section>
            <section className="flex flex-col p-5">
                <h1 className="font-bold text-3xl">Dokumentasi</h1>
                <div className="my-5 px-5">
                    <h2 className="font-bold text-2xl mb-5 flex items-center">
                        <MenuIcon className="h-5 w-5 mr-5" />
                        Menu
                    </h2>
                    <p className="text-semibold text-lg mb-3">
                        Anda dapat melakukan <b>Menambahkan</b>, dan <b>Mengubah</b> data pada menu yang tersedia diatas.
                    </p>
                    <ul className="flex w-full flex-col">
                        <li className="w-full">
                            <h3 className="font-bold text-xl my-1 flex items-center">
                                <BookOpenIcon className="h-5 w-5 mr-5" />
                                Kitab
                                <span className="flex flex-1 justify-end items-center">
                                    <button className="p-5" onClick={()=>{setExpand(1)}}>
                                        {expand!==1?
                                            <ChevronDownIcon className="w-5 h-5" /> :
                                            <ChevronUpIcon className="w-5 h-5" />
                                        }
                                    </button>
                                </span>
                            </h3>
                            {expand===1?<KitabDefenition />:<></>}
                        </li>
                        <li className="w-full">
                            <h3 className="font-bold text-xl my-1 flex items-center">
                                <BookmarkIcon className="h-5 w-5 mr-5" />
                                Perikop
                                <span className="flex flex-1 justify-end items-center">
                                    <button className="p-5" onClick={()=>{setExpand(2)}}>
                                        {expand!==2?
                                            <ChevronDownIcon className="w-5 h-5" /> :
                                            <ChevronUpIcon className="w-5 h-5" />
                                        }
                                    </button>
                                </span>
                            </h3>
                            {expand===2?<PerikopDefenition />:<></>}
                        </li>
                        <li className="w-full">
                            <h3 className="font-bold text-xl my-1 flex items-center">
                                <ClipboardListIcon className="h-5 w-5 mr-5" />
                                Bacaan
                                <span className="flex flex-1 justify-end items-center">
                                    <button className="p-5" onClick={()=>{setExpand(3)}}>
                                        {expand!==3?
                                            <ChevronDownIcon className="w-5 h-5" /> :
                                            <ChevronUpIcon className="w-5 h-5" />
                                        }
                                    </button>
                                </span>
                            </h3>
                            {expand===3?<BacaanDefenition />:<></>}
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Home;