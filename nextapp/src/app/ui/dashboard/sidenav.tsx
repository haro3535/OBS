import Link from "next/link";


// const SideBarElement = ({title, children}) => {
//     return(
//         <div>

//         </div>
//     );
// }


export default function Sidenav() {
    return (
        <nav className="flex flex-col w-64 h-full bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-white">İzmir Ekonomi Üniversitesi</h1>
            </div>
            <ul className="flex flex-col items-start w-full">
                <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Genel İşlemler</span>
                    </a>
                </li>
                <li className="w-full">
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
                </li>
            </ul>
        </nav>
    );
}