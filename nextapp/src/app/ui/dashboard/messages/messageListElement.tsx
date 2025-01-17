import Image from "next/image";


interface MessageListElementProps {
    imgUrl: string;
    name: string;
    lastMessage: string;
}

export default function MessageListElement({ imgUrl, name, lastMessage }: MessageListElementProps){
    return (
        <li className="w-full flex items-center justify-between p-4 bg-[--barground]">
            <div className='flex items-center justify-center w-12 h-12 bg-[--barground] rounded-full shadow-md'>
                <Image src={imgUrl} className='rounded-full' alt="Picture" width={50} height={50} quality={100}/>
            </div>
            <div className='flex flex-col ml-4'>
                <h3 className='text-[--forground] font-semibold'>{name}</h3>
                <p className='text-[--forground]'>{lastMessage}</p>
            </div>
        </li>
    );
}