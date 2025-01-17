

interface DashboxProps {
    textContent: {
        title: string;
    };
}

export default function Dashbox({textContent}: DashboxProps) {
    return (
        <div className="w-full">
            <h3 className="p-1 text-md font-semibold">{textContent.title}</h3>
            <div className="p-6 bg-gray-500 rounded-xl shadow-md">
                
                <p className=" text-foreground">10,000</p>
            </div>
        </div>
    );
}