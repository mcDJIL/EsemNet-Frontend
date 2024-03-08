import { sessionName } from "../Constants/localStorage"
import komputer from '../Assets/images/online-test.png'

export const DashboardPage = () => {

    const name = localStorage.getItem(sessionName);

    const date = new Date();

    return (

        <>
            
            <section className="transaksi-container pt-5 pb-5">
                <div className="container">
                    <div className="transaksi-header d-flex " style={{justifyContent: 'space-between'}}>
                        <div className="">
                            <h5 className="fw-bold">Selamat Datang, {name}</h5>
                        </div>
                        <div className="">
                            <h5>{date.toLocaleDateString()} | {date.toLocaleTimeString()}</h5>
                        </div>
                    </div>

                    <div class="card mt-4" style={{borderRadius: '0px'}}>
                        <div class="card-header" style={{backgroundColor: '#EEDBCB', borderRadius: '0px'}}>
                            <ul class="nav nav-pills card-header-pills" >
                                <li>TRANSAKSI HARI INI</li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div className="card-title d-flex align-items-center" style={{justifyContent: 'space-between'}}>
                                <h5 style={{fontWeight: '600'}}>6 Komputer Terpakai</h5>
                                <button className="btn btn-primary" style={{backgroundColor: '#345EA8'}}>Tambah Transaksi</button>
                            </div>

                            <div className="komputer mt-4">
                                <div className="row" style={{gap: '40px'}}>
                                    <div className="col-12 col-lg-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-2">
                                        <div
                                            class="card text-white" style={{width: '200px'}}
                                        >
                                            <div style={{backgroundColor: '#345EA8'}} className="card-header d-flex justify-content-center">
                                                <img class="card-img-top " style={{width: '100px'}} src={komputer} alt="Title" />
                                            </div>
                                            <div class="card-body text-black">
                                                <h5 class="card-title">Komputer 1</h5>
                                                <p class="card-text">2 Jam</p>
                                                <h4 className="fw-bold">00:54:23</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )    
}