import { title } from "process";
import Dashbox from "../ui/dashboard/dashbox";
import CalenderModule from "../ui/dashboard/calendermodule";

export default function Page() {
    return (
        <div className="space-y-6">
            <Dashbox title="Takvim" children={CalenderModule()}/>
            <Dashbox title="Duyurular" children={"Duyuruları buradan yapabilirsiniz!"}/>
            <div className="grid grid-cols-2 gap-6">
                <Dashbox title="Bölüm 1" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
                <Dashbox title="Bölüm 2" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Dashbox title="Bölüm 3" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
                <Dashbox title="Bölüm 4" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
                <Dashbox title="Bölüm 5" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Dashbox title="Bölüm 6" children={
                    <div className="h-40">
                        "Buraya ne geleceği sonrasında belirlenebilir"
                    </div>
                }/>
                <div className="grid grid-cols-1 gap-6">
                    <Dashbox title="Bölüm 7" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
                    <Dashbox title="Bölüm 8" children={"Buraya ne geleceği sonrasında belirlenebilir"}/>
                </div>
            </div>
        </div>
    );
}