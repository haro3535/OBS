import Image from 'next/image';



export default function Topbar() {
    return (
        <nav className="w-full flex items-center justify-end bg-[--barground] h-16 shadow-sm">
            <div className="py-2 px-4 flex items-center space-x-4">
                <div className='flex cursor-pointer'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        className=' svg-color '
                    >
                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
                    </svg>
                    <span className="relative flex h-3 w-3 z-10 ml-[-0.5rem]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                </div>
                <div className='flex items-center justify-center w-12 h-12 bg-[--barground] rounded-full shadow-md'>
                    <Image src="/pp.jpg" className='rounded-full' alt="Profile picture" width={50} height={50} quality={100}/>
                </div>
                

                <button type='button' className="text-[--forground] md:hidden focus:outline-none" title="Menu">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}