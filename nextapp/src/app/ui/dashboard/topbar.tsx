"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';


export default function Topbar() {
    return (
        <nav className="w-full flex items-center justify-end bg-[--barground] h-16 shadow-sm">
            <div className="py-2 px-4 flex items-center space-x-4">
                <div>
                    <Dropdown label="" className='mt-5 ml-[-1.5vw] bg-barground border-gray-900' dismissOnClick={false} renderTrigger={() => 
                        <button type='button' title='notifications' id="dropdownNotificationButton" className="relative mr-3 inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                            </svg>
                            <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
                        </button>
                        }>
                        <Dropdown.Header className='text-center text-textcolor'>
                            Notification
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href="/dashboard/messages" className='bg-barground hover:bg-bargroundhover'>
                            <div className="flex-shrink-0">
                                <Image className="rounded-full w-11 h-11" src="/pp.jpg" width={50} height={50} alt="Jese image" />
                                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                                </svg>
                                </div>
                            </div>
                            <div className="w-full ps-3">
                                <div className="text-textcolor max-w-80 text-sm mb-1.5">New message from <span className="font-semibold text-textcolor">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                                <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider className='bg-gray-600 my-0'/>
                        <Dropdown.Item as={Link} href="/dashboard/messages" className='bg-barground hover:bg-bargroundhover'>
                            <div className="flex-shrink-0">
                                <Image className="rounded-full w-11 h-11" src="/pp.jpg" width={50} height={50} alt="Jese image" />
                                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                                </svg>
                                </div>
                            </div>
                            <div className="w-full ps-3">
                                <div className="text-textcolor max-w-80 text-sm mb-1.5">New message from <span className="font-semibold text-textcolor">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                                <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider className='bg-gray-600 my-0'/>
                        <Dropdown.Item className='bg-barground hover:bg-bargroundhover flex items-center justify-center text-textcolor'>
                            <div className="inline-flex items-center ">
                                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                                View all
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
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