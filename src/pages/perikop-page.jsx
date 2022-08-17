import React from "react";
import { Anchor } from "../components/Button";
import { RefreshIcon, PlusIcon } from "@heroicons/react/solid";

const PerikopPage = ()=>{
    return (
        <>
        <div className="flex flex-col sm:flex-row w-full">
            <section className="flex flex-col p-5 sm:shadow-md sm:m-5">
                <div className="flex flex-1 flex-row sm:flex-col sm:flex-none sm:basis-1/4">
                    <h1 className="w-max flex items-center font-bold text-xl">Menu Perikop</h1>
                    <span
                        className="
                            flex p-0 flex-row items-center justify-end 
                            flex-1 sm:flex-col sm:justify-start sm:p-5">
                        <Anchor
                            to="/" classProps="mx-2 my-0 sm:mx-0 sm:my-2" size="sm"
                            icon={<PlusIcon className="w-5 h-5 mr-3" />}
                            teks="tambah" bgColor="sky"
                        />
                        <Anchor
                            to="/" size="sm"
                            icon={<RefreshIcon className="w-5 h-5 mr-3" />}
                            teks="update" bgColor="sky"
                        />
                    </span>
                </div>
            </section>
            <section className="flex flex-1 flex-col p-5 sm:shadow-md sm:m-5">

            </section>
        </div>
        </>
    )
}

export default PerikopPage;