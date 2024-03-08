import { useEffect, useState } from "react"
import client from "../Utils/client";
import { useParams } from "react-router-dom";

export const MemberPage = () => {

    const [members, setMember] = useState([]);

    const token = useParams();

    useEffect(() => {
        client.get(`member?${token}`).then(({data}) => {
            console.log(data.data);
            setMember(data.data);
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
                            <h5>Master Member</h5>
                        </div>
                        <div className="col-12 col-lg-6 text-start text-lg-end">
                            <button style={{backgroundColor: '#345EA8'}}     className="btn btn-primary">Tambah Master Member</button>
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
                                    <th scope="col text-center">Telepon</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {members.map((member) => (
                                    <tr class="">
                                        <td scope="row">{member.Nama}</td>
                                        <td>{member.Telepon}</td>
                                        <td>{member.Alamat}</td>
                                        <td>{member.MasihAktif}</td>
                                        <td>
                                            <a href="" className="btn btn-warning">Edit</a>
                                            <a href="" style={{marginRight: '-80px'}} className="ms-2 btn btn-danger">Hapus</a>
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