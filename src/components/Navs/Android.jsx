import React, { useState } from "react";
import { Anchor } from "../Button";
import {
    BookOpenIcon, BookmarkIcon,
    ClipboardListIcon, ChevronDownIcon,
    ChevronUpIcon, AnnotationIcon
} from "@heroicons/react/solid";

const NavAndroid = (props) => {
    const [expandHome, setExpandHome] = useState(true);
    const [expandMenu, setExpandMenu] = useState(false);
    return (
        <nav className="nav-mobile flexs sticky flex-col bg-teal-200 sm:hidden w-full">
            <div className="flex items-center justify-end flex-1">
                <h2 className="m-0 pl-5 flex-1 font-mono font-bold text-sm">
                    DATA CENTER
                </h2>
                <button
                    className="toogler p-5"
                    onClick={(e) => { props.setToogle(!props.toogle) }} >
                    {props.toogle ?
                        <ChevronUpIcon className="w-5 h-5" /> :
                        <ChevronDownIcon className="w-5 h-5" />
                    }
                </button>
            </div>
            <div className={`flex-1 h-max w-full bg-stone-100`}>
                {props.toogle ?
                    <ul className="flex flex-1 flex-col flex-wrap pt-2 pb-5 px-5">
                        <div className="flex flex-col flex-1">
                            <h3 className="flex-1 flex py-2 border-b-3">
                                <span className="flex-1 flex items-center text-base font-semibold">HOME</span>
                                <button
                                    className="p-2"
                                    onClick={(e) => { setExpandHome(!expandHome) }} >
                                    {expandHome ?
                                        <ChevronUpIcon className="w-5 h-5" /> :
                                        <ChevronDownIcon className="w-5 h-5" />
                                    }
                                </button>
                            </h3>
                            {expandHome ?
                                <li className="flex-none m-0 px-5 py-2 w-max">
                                    <Anchor
                                        to="/"
                                        size="sm"
                                        icon={<AnnotationIcon className="h-5 w-5 mr-2" />}
                                        teks="DOKUMENTASI" bgColor={props.activeLink === 0 ? "green" : "sky"}
                                        onClick={() => {
                                            props.setActiveLink(0);
                                            props.setToogle(!props.toogle);
                                            setExpandMenu(false);
                                        }} />
                                </li> : <></>}
                        </div>
                        <div className="flex flex-col flex-1">
                            <h3 className="flex-1 flex py-2 border-b-3">
                                <span className="flex-1 flex items-center text-base font-semibold">MENU</span>
                                <button
                                    className="p-2"
                                    onClick={(e) => { setExpandMenu(!expandMenu) }} >
                                    {expandMenu ?
                                        <ChevronUpIcon className="w-5 h-5" /> :
                                        <ChevronDownIcon className="w-5 h-5" />
                                    }
                                </button>
                            </h3>
                            {expandMenu?
                                <div className="flex flex-row flex-1 flex-wrap">
                                    <li className="flex-none m-0 px-5 py-2 w-max">
                                        <Anchor
                                            to="/kitab"
                                            size="sm"
                                            icon={<BookOpenIcon className="h-5 w-5 mr-2" />}
                                            teks="KITAB" bgColor={props.activeLink === 1 ? "green" : "sky"}
                                            onClick={() => {
                                                props.setActiveLink(1);
                                                props.setToogle(!props.toogle)
                                            }} />
                                    </li>
                                    <li className="flex-none m-0 px-5 py-2 w-max">
                                        <Anchor
                                            to="/perikop"
                                            size="sm"
                                            icon={<BookmarkIcon className="h-5 w-5 mr-2" />}
                                            teks="PERIKOP" bgColor={props.activeLink === 2 ? "green" : "sky"}
                                            onClick={() => {
                                                props.setActiveLink(2);
                                                props.setToogle(!props.toogle)
                                            }} />
                                    </li>
                                    <li className="flex-none m-0 px-5 py-2 w-max">
                                        <Anchor
                                            to="/bacaan"
                                            size="sm"
                                            icon={<ClipboardListIcon className="h-5 w-5 mr-2" />}
                                            teks="BACAAN" bgColor={props.activeLink === 3 ? "green" : "sky"}
                                            onClick={() => {
                                                props.setActiveLink(3);
                                                props.setToogle(!props.toogle)
                                            }} />
                                    </li>
                                </div>
                            :<></>}
                        </div>
                    </ul> :
                    <></>
                }
            </div>
        </nav>
    )
}

export default NavAndroid;