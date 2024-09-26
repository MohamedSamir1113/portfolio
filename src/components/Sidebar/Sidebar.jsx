import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
function Sidebar() {
    return (
        <div className="sidebar vh-100">
            <div className='container-fluid d-flex justify-content-center text-center align-items-center py-2'>
                <div className='py-5'>
                    <div className='userImg'></div>
                    <h5 className=''>Mohamed Samir</h5>
                    <p><span className='text-info'>Frontend Developer</span> in Cairo,Egypt</p>
                    <ul className='list-unstyled pt-2'>
                        <li><p className='d-inline'><Link to="/">Home</Link></p></li>
                        <li><p className='d-inline'>About</p></li>
                        <li><p className='d-inline'>Skills</p></li>
                        <li><p className='d-inline'>Experiece</p></li>
                        <li><p className='d-inline'>Work</p></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
