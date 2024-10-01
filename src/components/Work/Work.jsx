import { useState } from 'react'
import styles from './Work.module.css'
function Work() {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className="container py-5 mt-lg-0 mt-3 d-flex justify-content-center vh-100">
            <div className='w-75 pt-md-5 mt-md-5'>
                <p className={`${styles.workTitle}`}>My Work</p>
                <h2 className={`${styles.workHeading}`}>RECENT WORK</h2>


                <ul className="nav nav-pills my-4 d-flex " id="pills-tab" role="tablist">
                    <li className="nav-item " role="presentation">
                        <button className="nav-link bg-transparent active " id="pills-all-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all"
                            aria-selected="true">Graphic Design</button>
                    </li>
                    <li className="nav-item text-black" role="presentation">
                        <button className="nav-link bg-transparent" id="pills-brand-tab" data-bs-toggle="pill" data-bs-target="#pills-brand"
                            type="button" role="tab" aria-controls="pills-brand" aria-selected="false">Apps</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link bg-transparent" id="pills-web-tab" data-bs-toggle="pill" data-bs-target="#pills-web"
                            type="button" role="tab" aria-controls="pills-web" aria-selected="false">Software</button>
                    </li>


                </ul>



                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab"
                        tabIndex="0">

                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-1-C4nS0eD8.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-2-D-4H1m4L.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-3-pR2ZEVY9.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-4-tHccITd-.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {!isShown && <>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-5-lAucr__a.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-6-DFW03AZ3.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>}


                        </div>

                        <button className='btn btn-primary my-3' onClick={() => setIsShown(!isShown)}>Show {!isShown ? "less" : "More"}</button>
                    </div>

                    <div className="tab-pane fade" id="pills-brand" role="tabpanel" aria-labelledby="pills-profile-brand"
                        tabIndex="0">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-1-C4nS0eD8.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-2-D-4H1m4L.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-3-pR2ZEVY9.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-4-tHccITd-.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {!isShown && <>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-5-lAucr__a.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-6-DFW03AZ3.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>}


                        </div>

                        <button className='btn btn-primary my-3' onClick={() => setIsShown(!isShown)}>Show {!isShown ? "less" : "More"}</button>
                    </div>

                    <div className="tab-pane fade" id="pills-web" role="tabpanel" aria-labelledby="pills-contact-web"
                        tabIndex="0">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-1-C4nS0eD8.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-2-D-4H1m4L.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-3-pR2ZEVY9.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.portItem}`}>
                                    <img src="img-4-tHccITd-.jpg"  className="w-100" alt="" />
                                    <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                        <div>
                                            <a href="" className='text-white fs-5'>Work 1</a>
                                            <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                        </div>

                                        <div className="port-con d-flex justify-content-evenly">
                                            <div className={`${styles.portIconBox} me-1`}>
                                                <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>100</a>
                                            </div>
                                            <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                <a href="" className='text-black'>49</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {!isShown && <>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-5-lAucr__a.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`${styles.portItem}`}>
                                        <img src="img-6-DFW03AZ3.jpg"  className="w-100" alt="" />
                                        <div className={`${styles.portLayer} d-flex justify-content-evenly align-items-start ps-3 flex-column`}>
                                            <div>
                                                <a href="" className='text-white fs-5'>Work 1</a>
                                                <p className='pt-3' style={{ color: "#ffffffb3" }}>animation</p>
                                            </div>

                                            <div className="port-con d-flex justify-content-evenly">
                                                <div className={`${styles.portIconBox} me-1`}>
                                                    <i className="fa-solid fa-share-nodes fs-6 d-flex justify-content-center align-items-center"></i>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1 me-1`}>
                                                    <i className="fa-regular fa-eye fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>100</a>
                                                </div>
                                                <div className={`${styles.portIconBox} d-flex p-0 px-1`}>
                                                    <i className="fa-regular fa-heart fs-6 d-flex justify-content-center align-items-center"></i>
                                                    <a href="" className='text-black'>49</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>}


                        </div>

                        <button className='btn btn-primary my-3' onClick={() => setIsShown(!isShown)}>Show {!isShown ? "less" : "More"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
