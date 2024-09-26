import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

function MainLayout() {
    return (
        <>
            <div className="row m-0">
                <div className="col-md-2 p-0">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-0">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default MainLayout
