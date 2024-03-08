import { useEffect, useState } from "react"
import client from "../Utils/client";
import { useParams } from "react-router-dom";
import { FaTrash, FaEdit } from 'react-icons/fa';

export const KomputerPage = () => {

    const [komputers, setKomputer] = useState([]);

    const token = useParams();

    useEffect(() => {
        client.get(`komputer?${token}`).then(({data}) => {
            console.log(data.data);
            setKomputer(data.data);
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
                            <h5>Master Komputer</h5>
                        </div>
                        <div className="col-12 col-lg-6 text-start text-lg-end">
                            <button style={{backgroundColor: '#345EA8'}}     className="btn btn-primary">Tambah Master Komputer</button>
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
                                    <th scope="col">Nomor</th>
                                    <th scope="col text-center">Merek</th>
                                    <th scope="col">Jenis</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {komputers.map((komputer) => (
                                    <tr class="">
                                        <td scope="row">{komputer.Nomor}</td>
                                        <td>{komputer.Merek}</td>
                                        <td>{komputer.jenis.Jenis}</td>
                                        <td>
                                            <a href=""><FaEdit /></a>
                                            <a href="" style={{marginRight: '-150px'}} className="ms-2 btn-dark"><FaTrash /></a>
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