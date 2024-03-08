import { useEffect, useState } from "react"
import client from "../Utils/client";
import { useParams } from "react-router-dom";

export const DiskonPage = () => {

    const [diskons, setDiskon] = useState([]);

    const token = useParams();

    useEffect(() => {
        client.get(`diskon?${token}`).then(({data}) => {
            console.log(data.data);
            setDiskon(data.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);

    return (
        <div className="container">
            <div class="card mt-5">
                <div class="card-body">
                    <div class="card-title row">
                        <div className="col-12 col-lg-6">
                            <h5>Master Potongan Harga</h5>
                        </div>
                        <div className="col-12 col-lg-6 text-start text-lg-end">
                            <button style={{backgroundColor: '#345EA8'}}     className="btn btn-primary">Tambah Master Kode Potongan Harga</button>
                        </div>
                    </div>

                    <div
                        class="table-responsive mt-5"
                    >
                        <table
                            class="table"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Nama</th>
                                    <th scope="col text-center">Kode</th>
                                    <th scope="col">Presentase</th>
                                    <th scope="col">Maksimal</th>
                                    <th scope="col">Berlalku Sampai</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {diskons.map((diskon) => (
                                    <tr class="">
                                        <td scope="row">{diskon.Nama}</td>
                                        <td>{diskon.Kode}</td>
                                        <td>{diskon.Presentase}</td>
                                        <td>{diskon.Maksimal}</td>
                                        <td>{diskon.BerlakuSampai}</td>
                                        <td>
                                            <a href="" className="btn btn-warning">Edit</a>
                                            <a href="" style={{marginRight: '-60px'}} className="ms-2 btn btn-danger">Hapus</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}