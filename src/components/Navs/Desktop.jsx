import React from "react";
import {Anchor} from "../Button";
import { BookOpenIcon, BookmarkIcon, ClipboardListIcon, AnnotationIcon } from "@heroicons/react/solid";

const NavDesktop = (props) => {
    return (
        <nav className="nav-desktop hidden bg-stone-100 sm:p-5 bg- sm:flex flex-row w-full">
            <ul className="flex flex-1 flex-row flex-wrap items-center w-full">
                <li className="flex-none m-0 px-5 py-2 w-max">
                    <Anchor
                        to="/"
                        icon={<AnnotationIcon className="h-5 w-5 mr-2" />}
                        teks="PADUAN" bgColor={props.activeLink === 0 ? "greenThin" : "skyThin"}
                        onClick={() => { props.setActiveLink(0) }} />
                </li>
                <li className="flex-none m-0 px-5 py-2 w-max">
                    <Anchor
                        to="/kitab"
                        icon={<BookOpenIcon className="h-5 w-5 mr-2" />}
                        teks="KITAB" bgColor={props.activeLink === 1 ? "greenThin" : "skyThin"}
                        onClick={() => { props.setActiveLink(1) }} />
                </li>
                <li className="flex-none m-0 px-5 py-2 w-max">
                    <Anchor
                        to="/perikop"
                        icon={<BookmarkIcon className="h-5 w-5 mr-2" />}
                        teks="PERIKOP" bgColor={props.activeLink === 2 ? "greenThin" : "skyThin"}
                        onClick={() => { props.setActiveLink(2) }} />
                </li>
                <li className="flex-none m-0 px-5 py-2 w-max">
                    <Anchor
                        to="/bacaan"
                        icon={<ClipboardListIcon className="h-5 w-5 mr-2" />}
                        teks="BACAAN" bgColor={props.activeLink === 3 ? "greenThin" : "skyThin"}
                        onClick={() => { props.setActiveLink(3) }} />
                </li>
            </ul>
            <span className="flex flex-none flex-row items-center justify-end w-max">
                <h2 className="font-mono font-semibold text-2xl m-5">
                    DATA CENTER
                </h2>
            </span>
        </nav>
    )
}

export default NavDesktop;