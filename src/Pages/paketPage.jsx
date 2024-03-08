import { useEffect, useState } from "react"
import client from "../Utils/client";
import { useParams } from "react-router-dom";

export const PaketPage = () => {

    const [pakets, setPakets] = useState([]);

    const token = useParams();

    useEffect(() => {
        client.get(`paket?${token}`).then(({data}) => {
            console.log(data.data);
            setPakets(data.data);
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
                            <h5>Master Paket</h5>
                        </div>
                        <div className="col-12 col-lg-6 text-start text-lg-end">
                            <button style={{backgroundColor: '#345EA8'}}     className="btn btn-primary">Tambah Master Paket</button>
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
                                    <th scope="col text-center">Jenis</th>
                                    <th scope="col">Harga Per Jam</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {pakets.map((paket) => (
                                    <tr class="">
                                        <td scope="row">{paket.Nama}</td>
                                        <td>{paket?.jenis?.Jenis ?? '-'}</td>
                                        <td>{paket.HargaPerJam}</td>
                                        <td>
                                            <a href="" className="btn btn-warning">Edit</a>
                                            <a href="" style={{marginRight: '-150px'}} className="ms-2 btn btn-danger">Hapus</a>
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