import {useEffect, useState} from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="sticky top-0 z-50 text-slate-800 flex items-center justify-between flex-wrap bg-accent-1 p-6">
            <a href="#" className="ml-10 flex items-center flex-shrink-0 mr-6">
                <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt"
                     height="30.000000pt"
                     viewBox="0 0 961.000000 985.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,985.000000) scale(0.100000,-0.100000)" fill="#BE123C"
                       stroke="none">
                        <path
                            d="M170 9827 c-49 -16 -133 -102 -148 -153 -9 -32 -12 -853 -12 -3681 0 -3942 -3 -3700 51 -3888 99 -345 289 -648 585 -935 357 -346 834 -614 1449 -813 559 -180 1152 -281 1995 -339 246 -16 1194 -16 1440 0 1172 80 1981 266 2665 611 327 166 558 326 779 541 279 272 456 543 560 861 83 254 76 -119 76 3962 0 2828 -3 3649 -12 3681 -16 55 -99 138 -154 154 -88 26 -173 6 -238 -56 -77 -74 -70 81 -76 -1731 l-5 -1623 -72 113 c-289 459 -695 853 -1180 1147 -789 478 -1828 722 -3073 722 -1682 -1 -2989 -458 -3819 -1336 -165 -174 -315 -372 -478 -630 -9 -15 -12 341 -12 1590 -1 1232 -4 1618 -13 1650 -16 55 -99 138 -154 154 -49 14 -106 14 -154 -1z m6628 -4438 c358 -39 694 -182 972 -414 420 -351 661 -896 637 -1445 -39 -899 -715 -1621 -1609 -1719 -135 -15 -3841 -15 -3976 0 -215 23 -398 76 -597 173 -531 257 -883 728 -992 1326 -24 132 -24 448 0 580 54 293 155 536 324 773 75 105 285 315 390 390 276 196 546 297 908 340 81 10 3853 6 3943 -4z"/>
                        <path
                            d="M2988 4070 c-163 -28 -326 -109 -457 -226 -50 -45 -247 -282 -239 -288 2 -1 85 -66 185 -144 100 -78 186 -142 190 -142 5 0 39 40 77 90 87 114 142 164 220 201 84 39 147 46 222 24 111 -32 174 -81 274 -214 41 -55 79 -100 83 -101 7 0 330 243 366 276 11 10 0 30 -70 121 -46 59 -104 128 -129 152 -199 194 -479 292 -722 251z"/>
                        <path
                            d="M6348 4070 c-163 -28 -326 -109 -457 -226 -50 -45 -247 -282 -239 -288 2 -1 85 -66 185 -144 100 -78 186 -142 190 -142 5 0 39 40 77 90 87 114 142 164 220 201 84 39 147 46 222 24 111 -32 174 -81 274 -214 41 -55 79 -100 83 -101 7 0 330 243 366 276 11 10 0 30 -70 121 -46 59 -104 128 -129 152 -199 194 -479 292 -722 251z"/>
                    </g>
                </svg>
                <span className="ml-10 font-semibold text-xl tracking-tight">Contentful Bot</span>

            </a>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                    className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path style={{fill: "#BE123C"}} d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!isNavExpanded && "hidden"}`}>
                <div className="ml-10 text-md lg:flex-grow">
                    <a href="#home"
                       className="mr-10 block mt-4 lg:inline-block lg:mt-0 transition-all ease-in-out duration-300 hover:font-bold hover:border-b-2 hover:border-slate-700">
                        Home
                    </a>
                    <a href="#how-it-works"
                       className="mr-10 block mt-4 lg:inline-block lg:mt-0 transition-all ease-in-out duration-300 hover:font-bold hover:border-b-2 hover:border-slate-700">
                        How it works
                    </a>
                    <a href="#examples"
                       className="block mt-4 lg:inline-block lg:mt-0 transition-all ease-in-out duration-300 hover:font-bold hover:border-b-2 hover:border-slate-700">
                        Examples
                    </a>
                </div>
                <div className="ml-10 text-md">
                    <a href="#subscribe"
                       className="lg:flex-grow mr-10 inline-block text-lg bg-slate-800 text-white px-6 py-4 leading-none border rounded transition-all ease-in-out duration-500 hover:border-black hover:bg-white hover:text-slate-800 mt-4 lg:mt-0">
                        Keep me informed
                    </a>
                </div>
            </div>
        </nav>
    );
}