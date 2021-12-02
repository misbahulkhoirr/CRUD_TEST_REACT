import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


class AddMahasiswa extends Component {
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

//   changeNamaHandler= (event) => {
//     this.setState({nama: event.target.value});
// }

// changeJurusanHandler= (event) => {
//     this.setState({jurusan: event.target.value});
// }

// changeAlamatHandler= (event) => {
//     this.setState({alamat: event.target.value});
// }

  saveMahasiswa = async (e)=>{
    e.preventDefault();
    
    const res = await axios.post('http://127.0.0.1:8000/api/mahasiswa');
    if(res.status === 200){
      console.log(res.data.message);
      this.setState({
        nama:'',
        jurusan:'',
        alamat:''
      })
    }
    console.log('res', res)
  }

    render() {
      // const {nama, jurusan, alamat} = this.state
      // console.log(nama , jurusan, alamat, 'ThisState')
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
                <Form onSubmit={ this.saveMahasiswa }>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control  type="text" name="nama"  value={this.state.nama} onChange={this.handleInput}/> 
                  {/* onChange={this.changeNamaHandler} */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Jurusan</Form.Label>
                  <Form.Control  type="text" name="jurusan"  value={this.state.jurusan} onChange={this.handleInput}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control type="text" name="alamat"  value={this.state.alamat} as="textarea" rows={3} onChange={this.handleInput}/>
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

export default AddMahasiswa
