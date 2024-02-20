import { Outlet } from "react-router-dom"; 



function Section() {
    return (
        <div className="section-container">
            <Outlet />
        </div>
    )
}

export default Section