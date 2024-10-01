// Sidebar.js
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css'
function Sidebar({ isExpanded, setIsExpanded,width}) {
    return (
        <>
            <div className={`sidebar ${isExpanded ? width : ""} position-fixed top-0 bottom-0`}>
                <div className="container-fluid d-flex justify-content-center text-center align-items-center py-2">
                    <div className="py-5">
                        <div className="userImg"></div>
                        <h5 className="">Mohamed Samir</h5>
                        <p>
                            <span className="text-info">Frontend Developer</span> in Cairo, Egypt
                        </p>
                        <ul className="list-unstyled pt-2">
                            <li>
                                <p className="d-inline">
                                    <Link onClick={() => setIsExpanded(false)} style={{ textDecoration: "none", color: "black" }} to="/">
                                        Home
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className="d-inline">
                                    <Link onClick={() => setIsExpanded(false)} style={{ textDecoration: "none", color: "black" }} to="/about">
                                        About
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className="d-inline">
                                    <Link onClick={() => setIsExpanded(false)} style={{ textDecoration: "none", color: "black" }} to="/skills">
                                        Skills
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <Link onClick={() => setIsExpanded(false)} style={{ textDecoration: "none", color: "black" }} to="/experience">
                                    <p className="d-inline text-black">Experience</p>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setIsExpanded(false)} style={{ textDecoration: "none", color: "black" }} to="/work">
                                    <p className="d-inline text-black">WORK</p>
                                </Link>
                            </li>
                        </ul>
                        {/* Toggle Button */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
