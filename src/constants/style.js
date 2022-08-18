const BG = {
    green: "bg-green-400 hover:bg-green-500 active:bg-green-600",
    sky: "bg-sky-400 hover:bg-sky-500 active:bg-sky-600",
    greenThin: "bg-green-200 hover:bg-green-300 active:bg-green-400",
    skyThin: "bg-sky-200 hover:bg-sky-300 active:bg-sky-400",
    default: "bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600"
}
const BORDER = {
    green: "border-green-300 hover:border-green-200",
    greenThin: "border-green-200 hover:border-green-100",
    sky: "border-sky-400 hover:border-green-300",
    skyThin: "border-sky-200 hover:border-green-100",
    default: "border-indigo-300 hover:border-indigo-200",
}
const FOCUS = {
    green: "focus:ring-2 focus:ring-green-300",
    greenThin: "focus:ring-2 focus:ring-green-100",
    sky: "focus:ring-2 focus:ring-sky-300",
    skyThin: "focus:ring-2 focus:ring-sky-100",
    default: "focus:ring-2 focus:ring-indigo-300"
}
const SIZE = {
    big: "px-6 py-3 text-lg",
    md: "px-5 py-2 text-base",
    sm: "px-3 py-2 text-sm"
}
const TRANSITION = {
    slow: "transition-all duration-700 ease-in-out",
    md: "transition-all duration-300 ease-in-out",
    quick:"transition-all duration-150 ease-in-out",
}

export { BG, SIZE, BORDER, FOCUS, TRANSITION };