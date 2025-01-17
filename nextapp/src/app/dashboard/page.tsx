import { title } from "process";
import Dashbox from "../ui/dashboard/dashbox";

export default function Home() {
    return (
        <>
            <Dashbox textContent={{ title: "Duyurular" }}/>
        </>
    );
}