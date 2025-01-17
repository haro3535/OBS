import { title } from "process";
import Dashbox from "../ui/dashboard/dashbox";
import CalenderModule from "../ui/dashboard/calendermodule";

export default function Page() {
    return (
        <div className="space-y-6">
            <Dashbox title="Takvim" children={CalenderModule()}/>
            <Dashbox title="Duyurular" children={"Duyuruları buradan yapabilirsiniz!"}/>
        </div>
    );
}