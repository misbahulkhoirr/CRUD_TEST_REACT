import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios';

class Mahasiswa extends Component {
        state={
          mahasiswa:[],
      }
    
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/mahasiswa')
        if (res.status === 200){
          this.setState({
            mahasiswa:res.data,
          });
        }
        // console.log('mahasiswa', this.state.mahasiswa)
    }
    
    deleteRow =async(e,id)=>{
      const res=await axios.delete(`http://127.0.0.1:8000/api/mahasiswa/${id}`);
      console.log(res);
       if (res.status === 200){
          console.log(res.data);
    
          // const posts = this.state.mahasiswa.filter(items => items.id !== id);
          // this.setState({ posts });
        }
    }

    render() {
   
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4>Data Mahasiswa</h4>
                  <Link to={'add-mahasiswa'} className="btn btn-primary btn-sm float-end">Tambah Mahasiswa</Link>
                </div>
                <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAMA</th>
                      <th>JURUSAN</th>
                      <th>ALAMAT</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>

                {
                  this.state.mahasiswa && this.state.mahasiswa.map((items) => {
                   return(
                      <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.nama}</td>
                        <td>{items.jurusan}</td>
                        <td>{items.alamat}</td>
                        <td>
                          <Link to={`edit-mahasiswa/${items.id}`} className="btn btn-success btn-sm"> Edit</Link>
                          <button onClick={(e) => this.deleteRow(e, items.id)} className="btn btn-danger btn-sm"> Hapus</button>
                        </td>
                      </tr>
                   )
                  })
                }
                  </tbody>
                </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Mahasiswa
