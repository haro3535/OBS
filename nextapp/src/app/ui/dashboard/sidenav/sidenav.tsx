"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import sideNavStyles from "./sidenav.module.css";


// const SideBarElement = ({title, children}) => {
//     return(
//         <div>

//         </div>
//     );
// }

const Links1 = [
    {
        title: "Genel İşlemler I",
        link: "#"
    },
    {
        title: "Genel İşlemler II",
        link: "#"
    },
    {
        title: "Genel İşlemler III",
        link: "#"
    }
];

const Links2 = [
    {
        title: "Ders ve Dönem İşlemleri I",
        link: "#"
    },
    {
        title: "Ders ve Dönem İşlemleri II",
        link: "#"
    },
    {
        title: "Ders ve Dönem İşlemleri III",
        link: "#"
    },
    {
        title: "Ders ve Dönem İşlemleri VI",
        link: "#"
    }
];

const Links3 = [
    {
        title: "Form İşlemleri I",
        link: "#"
    },
    {
        title: "Form İşlemleri II",
        link: "#"
    }
];

const Links = [
    {
        title: "Genel İşlemler",
        links: Links1
    },
    {
        title: "Ders ve Dönem İşlemleri",
        links: Links2
    },
    {
        title: "Form İşlemleri",
        links: Links3
    },
    {
        title: "YÖKSİS İşlemleri",
        links: Links2
    },
    {
        title: "Başvuru İşlemleri",
        links: Links3
    },
    {
        title: "Kullanıcı İşlemleri",
        links: Links1
    },
]



export default function Sidenav() {

    const [menuOpen, setMenuOpen] = useState(-1);


    function handleMenuClick(index: number) {
        const menuElement = document.getElementById(`${index}`);
        if (menuOpen === -1 && menuElement) {
            menuElement.classList.remove(sideNavStyles.sidehidden);
            menuElement.classList.add(sideNavStyles.sidevisible);
        }
        else if (menuOpen === index && menuElement){
            menuElement.classList.remove(sideNavStyles.sidevisible);
            menuElement.classList.add(sideNavStyles.sidehidden);
            setMenuOpen(-1);
            return;
        }
        else{
            const closeIt = document.getElementById(`${menuOpen}`);
            if (closeIt){
                closeIt.classList.remove(sideNavStyles.sidevisible);
                closeIt.classList.add(sideNavStyles.sidehidden);
            }
            if (menuElement){
                menuElement.classList.remove(sideNavStyles.sidehidden);
                menuElement.classList.add(sideNavStyles.sidevisible);
            }
        }

        setMenuOpen(index);
        
    }

    return (
        <nav className="flex flex-col w-64 h-full bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-white">İzmir Ekonomi Üniversitesi</h1>
            </div>
            <ul className="flex flex-col items-start w-full">
                {Links.map((link,index) => (
                    <li key={index} className="w-full bg-[--barground]">
                        <div className="flex items-center w-full h-12 px-6 hover:bg-gray-700 cursor-pointer z-10" onClick={() => handleMenuClick(index)}>
                            <span className="text-white">{link.title}</span>
                        </div>
                        {link.links ? (
                            <ul id={`${index}`} className={`${sideNavStyles.sidehidden}`}>
                                {link.links.map((link, index) => (
                                    <li key={index} className="w-full">
                                        <Link href={link.link} className="flex items-center w-full hover:bg-gray-700">
                                            <p className="text-sm w-full ps-10 py-1">{link.title}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </li>
                ))}
                {/* <li className="w-full">
                    <div className="flex items-center w-full h-12 px-6 hover:bg-gray-700 cursor-pointer" onClick={handleMenuClick}>
                        <span className="text-white">Genel İşlemler</span>
                    </div>
                </li> */}
                {/* <li className="w-full">
                    <ul id="den" className="max-h-0 overflow-hidden transition-all duration-1000 ease">
                        {Links.map((link, index) => (
                            <li key={index} className="w-full">
                                <Link href={link.link} className="flex items-center w-full hover:bg-gray-700">
                                    <p className="text-sm w-full ps-10 py-1">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li> */}
                {/* <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Ders ve Dönem İşlemleri</span>
                    </a>
                </li>
                <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Form İşlemleri</span>
                    </a>
                </li>
                <li className="w-full">
                    <Link href="/dashboard/#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">YÖKSİS İşlemleri</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link href="/dashboard/#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Başvuru İşlemleri</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link href="/dashboard/#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Kullanıcı İşlemleri</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link href="/dashboard/messages" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Mesajlar</span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
}