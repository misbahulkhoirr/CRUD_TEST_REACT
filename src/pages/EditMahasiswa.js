import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


class EditMahasiswa extends Component {
  state={
    nama:'',
    jurusan:'',
    alamat:''
  }
  handleInput= (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  updateMahasiswa = async (e)=>{
    e.preventDefault();
    
    const res = await axios.put('http://127.0.0.1:8000/api/mahasiswa',this.state);
    if(res.data.status === 200){
      console.log(res.data.message);
      this.setState({
        nama:'',
        jurusan:'',
        alamat:''
      })
    }
  }

    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-1">
              <div className="card">
                <div className="card-header">
                  <h4>Tambah Mahasiswa</h4>
                  <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                </div>
                <div className="card-body">
                <Form onSubmit={this.updateMahasiswa}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control  type="text" name="nama" onChange={this.handleInput} value={this.state.name} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Jurusan</Form.Label>
                  <Form.Control  type="text" name="jurusan" onChange={this.handleInput} value={this.state.name} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control type="text" name="alamat" onChange={this.handleInput} value={this.state.name} as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default EditMahasiswa
