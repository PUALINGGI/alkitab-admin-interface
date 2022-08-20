import React, { useState, useEffect } from "react";
import { RefreshIcon } from "@heroicons/react/solid";
import { Button } from "../../components/Button";
import { getKitab, putKitab } from "../../services/Kitab";
import { NAS } from "../../helpers/fn";
import { Sukses, Gagal } from "../../components/Alerts";

const KitabUpdate = () => {

    const [datas, setDatas] = useState(null);
    const [isFetching, setIsFetching] = useState(null);
    const [selectedKitab, setSelectedKitab] = useState(null);
    const [namaKitab, setNamaKitab] = useState(null);
    const [valid, setValid] = useState(false);
    // state PUT
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getKitab(setDatas, setIsFetching);
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <form
                    onSubmit={(event) => {
                        HandleUpdateKitab(
                            event, valid, namaKitab,
                            selectedKitab, setError, setMessage,
                            () => { getKitab(setDatas, setIsFetching); }
                        )
                    }}>
                    <div className="my-1 sm:my-3">
                        <> {error !== null ?
                            (error ?
                                <Gagal classProps="my-2" pesan={message} /> :
                                <Sukses classProps="my-2" pesan={message} />
                            )
                            : <></>}
                        </>
                        <label className="w-full flex items-center pb-1 font-semibold text-lg">
                            Pilih kitab {isFetching ? <Spinner /> : <></>} :
                        </label>
                        <ErrorSelect teks={selectedKitab} />
                        <select
                            className="form-select rounded w-full"
                            onChange={(e) => { setSelectedKitab(e.target.value) }} >
                            <RenderOption data={datas?.data ?? null} />
                        </select>
                    </div>
                    <div className="my-1 sm:my-3">
                        <label className="w-full flex items-center pb-1 font-semibold text-lg">
                            Nama Baru kitab :
                        </label>
                        <ErrorInput teks={namaKitab} setValid={setValid} />
                        <input
                            className={`form-input rounded w-full ${datas ? "" : "disabled"}`}
                            value={namaKitab ?? ""}
                            onChange={(e) => { setNamaKitab(e.target.value) }} />
                        <Button
                            size="sm" classProps={`my-5 ${datas ? "" : "disabled"}`} type="submit"
                            icon={<RefreshIcon className="w-5 h-5 mr-3" />}
                            teks="UPDATE" bgColor="green" />
                    </div>
                </form>
            </div>
        </>
    );

}

function HandleUpdateKitab(
    event, valid, namaKitab,
    selectedKitab, setError, setMessage, refreshList
) {
    event.preventDefault();
    if (valid && selectedKitab) {
        putKitab(setError, setMessage, selectedKitab, namaKitab, refreshList);
    } else { console.log("tidak Valid") }
}

function Spinner() {
    return (
        <svg className="animate-spin h-5 w-5 mx-3 bg-grey-700" viewBox="0 0 24 24">
        </svg>
    )
}
function RenderOption({ data }) {
    if (!data || data.length < 1) return (<option value="" selected disabled>Belum ada kitab</option>);
    return (
        <>
            <option value="" selected disabled>Pilihan</option>
            {data.map((kitab, i) => {
                return (<option key={`${kitab}-${i}`} value={`${kitab}`}>{kitab}</option>);
            })}
        </>
    )
}
function ErrorSelect({ teks }){
    const Element = () => {
        return (
            <span className="my-3 text-rose-700 text-sm font-semibold sm:my-1">
                Pilihan Tidak Boleh Kosong!
            </span>
        )
    }
    return (
        <>{
            (!teks||teks.length<1)?<Element />:<></>
        }</>
    )
}
function ErrorInput(props) {
    const ElementLength = () => {
        props.setValid(false);
        return (
            <span className="my-3 text-rose-700 text-sm font-semibold sm:my-1">
                Nama Baru Kitab Tidak Boleh Kosong!
            </span>
        )
    }
    const ElementSymbol = () => {
        props.setValid(false);
        return (
            <span className="my-3 text-rose-700 text-sm font-semibold sm:my-1">
                Nama Kitab Tidak Boleh Mengandung ANGKA atau SYMBOL.
            </span>
        )
    }
    if (!props.teks || props.teks.length < 1) return (<ElementLength />);
    if (NAS(props.teks)) return (<ElementSymbol />);
    props.setValid(true);
    return (<></>)
}

export default KitabUpdate;