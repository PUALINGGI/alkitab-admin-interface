import React from "react";
import { Anchor } from "../Button";
import { BookOpenIcon, BookmarkIcon, ClipboardListIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const NavAndroid = (props) => {
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
            <div className={`flex-1 h-max`}>
                {props.toogle ?
                    <ul className="flex flex-1 flex-row flex-wrap items-center pt-2 pb-5">
                        <li className="flex-none m-0 px-5 py-2 w-max">
                            <Anchor
                                to="/kitab"
                                size="sm"
                                icon={<BookOpenIcon className="h-5 w-5 mr-2" />}
                                teks="KITAB" bgColor={props.activeLink === 1 ? "green" : "sky"}
                                onClick={() => { props.setActiveLink(1) }} />
                        </li>
                        <li className="flex-none m-0 px-5 py-2 w-max">
                            <Anchor
                                to="/perikop"
                                size="sm"
                                icon={<BookmarkIcon className="h-5 w-5 mr-2" />}
                                teks="PERIKOP" bgColor={props.activeLink === 2 ? "green" : "sky"}
                                onClick={() => { props.setActiveLink(2) }} />
                        </li>
                        <li className="flex-none m-0 px-5 py-2 w-max">
                            <Anchor
                                to="/bacaan"
                                size="sm"
                                icon={<ClipboardListIcon className="h-5 w-5 mr-2" />}
                                teks="BACAAN" bgColor={props.activeLink === 3 ? "green" : "sky"}
                                onClick={() => { props.setActiveLink(3) }} />
                        </li>
                    </ul> :
                    <></>
                }
            </div>
        </nav>
    )
}

export default NavAndroid;