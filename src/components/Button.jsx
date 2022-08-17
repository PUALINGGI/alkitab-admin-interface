import React from "react";
import { BG, SIZE, BORDER, FOCUS, TRANSITION } from "../constants/style";
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <button
            className={`
                ${SIZE[props?.size ?? "md"]}
                ${BG[props?.bgColor] ?? BG["default"]}
                rounded font-mono font-bold cursor-pointer
                ${BORDER[props?.bgColor] ?? ""}
                ${FOCUS[props?.bgColor] ?? ""}
                ${TRANSITION["quick"]}
                hover:shadow-md flex items-center justify-center
                ${props?.classProps ?? ""}`
            }
            onClick={props?.onClick ?? undefined}>
            {props?.icon ?? <></>}
            {props?.teks ?? <></>}
        </button>
    )
}

const Anchor = (props) => {
    return (
        <Link className={`
                ${SIZE[props?.size ?? "md"]}
                ${BG[props?.bgColor] ?? BG["default"]}
                rounded font-mono font-bold cursor-pointer
                ${BORDER[props?.bgColor] ?? ""}
                ${FOCUS[props?.bgColor] ?? ""}
                ${TRANSITION["quick"]}
                hover:shadow-md flex items-center justify-center
                ${props?.classProps ?? ""}`
            }
            onClick={props?.onClick ?? undefined}
            to={props.to}
        >
                {props?.icon ?? <></>}
                {props?.teks ?? <></>}
        </Link>
    )
}

export { Button, Anchor };