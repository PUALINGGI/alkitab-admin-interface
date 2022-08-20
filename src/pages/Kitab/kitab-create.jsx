import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { DocumentAddIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { NAS } from "../../helpers/fn";
import { getKitab, postKitab } from "../../services/Kitab";
import { Sukses, Gagal } from "../../components/Alerts";

const KitabCreate = () => {

    const [kitabName, setKitabName] = useState("");
    const [valid, setValid] = useState(false);
    const [expand, setExpand] = useState(true);
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    // state for post
    const [error, setError] = useState(null);
    const [pesan, setPesan] = useState(null);
    useEffect(() => {
        (kitabName.length < 1 | NAS(kitabName)) ? setValid(false) : setValid(true);
        return () => { return true; }
    }, [kitabName]);
    useEffect(()=>{
        getKitab(setData, setIsFetching);
        return ()=>{ return true; }
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <form
                    className="w-full"
                    onSubmit={(e) => {
                        postData(
                            kitabName, valid,
                            e, setPesan,
                            setError, ()=>{getKitab(setData, setIsFetching)});
                    }}
                >
                    <> { error!==null?
                            (error?
                                <Gagal classProps="my-2" pesan={pesan} /> :
                                <Sukses classProps="my-2" pesan={pesan} />
                            )
                            : <></> }
                    </>
                    <label className="my-2 sm:my-1 font-semibold text-lg">nama kitab :</label>
                    <input
                        type="text" value={kitabName}
                        className="form-input rounded w-full"
                        onChange={(e) => {
                            setKitabName(e.target.value);
                        }} />
                    <ErrorLength val={kitabName} />
                    <ErrorSymNum val={kitabName} />
                    <Button
                        type="submit" size="sm" classProps="mt-3"
                        icon={<DocumentAddIcon className="w-5 h-5 mr-2" />}
                        teks="TAMBAH" bgColor="green"
                    />
                </form>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex flex-row w-full items-center">
                    <h1 className="font-bold py-3 text-xl flex-1">List Kitab Yang Sudah Ada :</h1>
                    <button className="flex-none p-5" onClick={() => { setExpand(!expand) }}>
                        {expand ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                    </button>
                </div>
                {expand?<RenderListData isFetching={isFetching} kitab={data} />:<></>}
            </div>
        </>
    );

}

function postData(namaKitab, valid, event, setPesan, setError, cb) {
    setError(null);
    event.preventDefault();
    if (valid) {
        postKitab(setError, setPesan, namaKitab.toLowerCase(), cb);
    }
}

function RenderListData({ isFetching, kitab }) {
    // sedang mengambil data
    const RenderProgress = ()=>{
        return ( <h1>Sedang mengambil data</h1> )
    }
    // belum ada data kitab
    const NoData = ()=>{
        return (
            <ul className="flex flex-row px-5 sm:px-0">
                <li className="list-disc list-inside font-semibold text-base">
                    Belum ada data
                </li>
            </ul>
        )
    }
    // tampilkan list kitab yang sudah ada jika belum ada tampilkan NoData
    const RenderList = ()=>{
        if(!kitab | !kitab?.data | kitab?.data?.length<1 ) return ( <NoData /> );
        return (
            <ul className="flex flex-col px-5 sm:px-0">
                {kitab.data.map((k, i)=>{
                    return (
                        <li key={`${k}-${i}`} className="list-disc list-inside font-semibold text-base">
                            {k}
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <> {isFetching?<RenderProgress />:<RenderList />} </>
    )
}

function ErrorLength({ val }) {
    const Element = () => {
        return (
            <span className="my-3 text-rose-700 text-sm font-semibold sm:my-1">
                Nama Kitab Tidak Boleh Kosong
            </span>
        );
    }
    return (
        <> {val.length < 1 ? <Element /> : <></>} </>
    )
}
function ErrorSymNum({ val }) {
    const Element = () => {
        return (
            <span className="my-3 text-rose-700 text-sm font-semibold sm:my-1">
                Nama Kitab Tidak Boleh Mengandung ANGKA atau SYMBOL.
            </span>
        )
    }
    return (
        <> {NAS(val) ? <Element /> : <></>} </>
    )
}


export default KitabCreate;