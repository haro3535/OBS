
interface DashboxProps {
    title: string;
    children: React.ReactNode;
}


export default function Dashbox({title, children}: DashboxProps){
    return (
        <div className="w-full">
            <h3 className="p-1 text-md font-semibold">{title}</h3>
            <div className="p-6 bg-gray-500 rounded-xl shadow-md text-[--forground]">
                {children}
            </div>
        </div>
    );
}