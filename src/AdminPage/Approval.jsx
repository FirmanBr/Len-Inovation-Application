import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Table } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { Form, Label, Input, Col } from 'reactstrap';
import { FormGroup } from '@material-ui/core';
import moment from 'moment'



class Approval extends Component {

  constructor(props,context) {
    super(props, context); 

    this.handleShowCuti = this.handleShowCuti.bind(this);
    this.handleCloseCuti = this.handleCloseCuti.bind(this);
    this.handleEditCuti = this.handleEditCuti.bind(this);
    this.radioChangeCuti =this.radioChangeCuti.bind(this);

    this.handleShowIzin = this.handleShowIzin.bind(this);
    this.handleCloseIzin = this.handleCloseIzin.bind(this);
    this.handleEditIzin = this.handleEditIzin.bind(this);
    this.radioChangeIzin =this.radioChangeIzin.bind(this);

    this.state = {
      selectedOptionCuti: '',
      selectedOptionIzin: ''
    }

}

  async componentDidMount() {
    let response = await fetch("http://localhost:4000/Cuti", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      }
    });
    let data = await response.json();
    this.setState({data})
  
  
    let response1 = await fetch("http://localhost:4000/IzinRead", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      }
    });
    let data1 = await response1.json();
    this.setState({data1})
  }

  handleCloseCuti() {
		this.setState({ show: false });
  }

  handleCloseIzin() {
		this.setState({ tampil: false });
	}

	handleShowCuti(val) {
		this.setState({ 
      show: true,
      Nik: val.Nik
    });
  }

  handleShowIzin(val1) {
		this.setState({ 
      tampil: true,
      Nik: val1.Nik
    });
  }
  
  NikCuti(e)
  {
    this.setState({Nik: e.target.value});
  }

  NikIzin(e)
  {
    this.setState({Nik: e.target.value});
  }

  radioChangeCuti(e) {
    this.setState({
      selectedOptionCuti: e.currentTarget.value
    });
  }

  radioChangeIzin(e) {
    this.setState({
      selectedOptionIzin: e.currentTarget.value
    });
  }
  

  async handleEditCuti (event) {

    event.preventDefault()

    var cutiApp = {

      Nik1 : this.state.Nik,
      Statuscuti : this.state.selectedOptionCuti
    }
    
    let DataCuti = await fetch("http://localhost:4000/Cuti", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      },
      body: JSON.stringify(cutiApp)
    });
    
    let hasilinputcuti = await DataCuti.json();
    window.location.reload();

  }

  async handleEditIzin (event) {

    event.preventDefault()

    var izinApp = {

      Nik : this.state.Nik,
      Status : this.state.selectedOptionIzin
    }
    
    let DataIzin = await fetch("http://localhost:4000/IzinRead", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      },
      body: JSON.stringify(izinApp)
    });
    
    let hasilinputizin = await DataIzin.json();
    window.location.reload();

  }


    render(){

      const {data} = this.state 
      const {data1} = this.state 
      console.log(this.state.data)

        return(
          <Card backgroundColor='transparent' className="text-left" style={{ height: '30.rem' }} >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom align="center">
              <b></b>Approval
            </Typography>
 
            <Typography variant="body2" component="p">    

            <Table id="data" align="center">
              <thead>
                <tr valign="middle">
                  <th>Nik</th>
                  <th>Nama</th>
                  <th>Divisi</th>
                  <th>Jabatan</th>
                  <th>Tanggal</th>
                  <th>Perihal</th>
                  <th>Approval</th>
                  <td><Button Button variant="outlined" color="primary" >PDF</Button></td>
                </tr>
                </thead>

                <tbody>
                {data  && data.values.map((val, key) => (  
                <tr>
                  <td>{val.Nik}</td>
                  <td>{val.Nama}</td>
                  <td>{val.Bagian}</td>
                  <td>{val.Jabatan}</td>
                  <td>{moment(val.TanggalIzin).format("DD-MM-YYYY")}</td>
                  <td>{val.Perihal}</td>
                  <td> { val.Statuscuti =='0' ? <Button Button variant="outlined" onClick={() => this.handleShowCuti(val)}>Submit</Button> : ("")} </td>
                </tr>
                ))}
                </tbody>

                <tbody>
                {data1  && data1.values.map((val1, key) => (    
                <tr>
                  <td>{val1.Nik}</td>
                  <td>{val1.Nama}</td>
                  <td>{val1.Bagian}</td>
                  <td>{val1.Jabatan}</td>
                  <td>{moment(val1.Tanggal).format("DD-MM-YYYY")}</td>
                  <td>{val1.Perihal}</td>
                  <td> { val1.Status =='0' ? <Button Button variant="outlined"  onClick={() => this.handleShowIzin(val1)} >Submit</Button> : ("")} </td>
                </tr>
                ))}
                </tbody>

              
            </Table>

            <Modal show={this.state.show} onHide={this.handleCloseCuti}>
              <Modal.Header closeButton>
                Check Time
              </Modal.Header>
              <Modal.Body>
                <Form  onSubmit={this.handleEditCuti} method="PUT">    
                  <FormGroup>
                    <Label for="Nik">Nik</Label>
                    <Input type="text" name="Nik" id="Nik" onChange={this.NikCuti} value={this.state.Nik}/>
                  </FormGroup>
                  
                  <Label for="Status" >Approval</Label> 
                  <FormGroup >
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="Status" value="1" checked={this.state.selectedOptionCuti === "1"} onChange={this.radioChangeCuti}/>{' '}
                        Yes
                        </Label>
                        <Label check>
                        <Input type="radio" name="Status" value="2" checked={this.state.selectedOptionCuti === "2"} onChange={this.radioChangeCuti} />{' '}
                        No
                        </Label>
                    </FormGroup>
                    </Col>
                   <Label></Label> 
                  </FormGroup>  

                  
          
                  <button  Button variant="outlined" color="primary" align="center">Submit</button>
                </Form>
              </Modal.Body>
            </Modal>

            <Modal show={this.state.tampil} onHide={this.handleCloseIzin}>
              <Modal.Header closeButton>
                Check Time
              </Modal.Header>
              <Modal.Body>
                <Form  onSubmit={this.handleEditIzin} method="PUT">    
                  <FormGroup>
                    <Label for="Nik">Nik</Label>
                    <Input type="text" name="Nik" id="Nik" onChange={this.NikIzin} value={this.state.Nik}/>
                  </FormGroup>
                  
                  <Label for="Status" >Approval</Label> 
                  <FormGroup >
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="Status" value="1" checked={this.state.selectedOptionIzin === "1"} onChange={this.radioChangeIzin}/>{' '}
                        Yes
                        </Label>
                        <Label check>
                        <Input type="radio" name="Status" value="2" checked={this.state.selectedOptionIzin === "2"} onChange={this.radioChangeIzin} />{' '}
                        No
                        </Label>
                    </FormGroup>
                    </Col>
                   <Label></Label> 
                  </FormGroup>  
                  <button  Button variant="outlined" color="primary" align="center">Submit</button>
                </Form>
              </Modal.Body>
            </Modal>






            </Typography>

          </CardContent>
        </Card>
        )
    }
}

export default Approval