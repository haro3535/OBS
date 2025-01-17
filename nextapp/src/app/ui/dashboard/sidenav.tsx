import Link from "next/link";


export default function Sidenav() {
    return (
        <nav className="flex flex-col w-64 h-full bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-white">Dashboard</h1>
            </div>
            <ul className="flex flex-col items-start w-full">
                <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Home</span>
                    </a>
                </li>
                <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Users</span>
                    </a>
                </li>
                <li className="w-full">
                    <a href="#" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Settings</span>
                    </a>
                </li>
                <li className="w-full">
                    <Link href="/dashboard/messages" className="flex items-center w-full h-12 px-6 hover:bg-gray-700">
                        <span className="text-white">Messages</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}