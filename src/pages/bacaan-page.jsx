import React from "react";
import { Anchor } from "../components/Button";
import { RefreshIcon, PlusIcon } from "@heroicons/react/solid";

const BacaanPage = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row w-full">
                <section className="flex flex-col p-5 sm:m-5 sm:basis-1/4">
                    <div className="flex flex-1 flex-row sm:flex-col sm:flex-none">
                        <h1 className="w-max flex items-center font-bold text-base sm:text-xl">Menu Bacaan</h1>
                        <span
                            className="
                            flex p-0 flex-row items-center justify-end 
                            flex-1 sm:flex-col sm:justify-start sm:p-5">
                            <Anchor
                                to="/bacaan" classProps="mx-2 my-0 sm:mx-0 sm:my-2 sm:w-full" size="sm"
                                icon={<PlusIcon className="w-5 h-5 mr-3" />}
                                teks="tambah" bgColor="sky"
                            />
                            <Anchor
                                to="/bacaan" size="sm" classProps="sm:w-full"
                                icon={<RefreshIcon className="w-5 h-5 mr-3" />}
                                teks="update" bgColor="sky"
                            />
                        </span>
                    </div>
                </section>
                <section className="flex flex-1 flex-col p-5 sm:m-5">
                    <h1 className="text-2xl font-bold">
                        Mohon Maaf Menu Ini Belum Tersedia.
                    </h1>
                </section>
            </div>
        </>
    )
}

export default BacaanPage;