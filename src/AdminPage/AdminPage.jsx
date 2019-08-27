import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Table } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { Form, Label, Input } from 'reactstrap';
import { FormGroup } from '@material-ui/core';
import { updateExpression } from '@babel/types';
import { HardwareRouter } from 'material-ui/svg-icons';



class AdminPage extends Component {

  constructor(props) {
    super(props);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.lognik = this.lognik.bind(this);
    this.logreason = this.logreason.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      api: []
    }
  }

  handleClose() {
		this.setState({ show: false });
	}

	handleShow(val) {
		this.setState({ 
      show: true,
      Nik: val.Nik
    });
	}

  lognik(e)
  {
    this.setState({Nik: e.target.value});
  }

  logreason(e)
  {
    this.setState({Reason: e.target.value});
  }


  async componentDidMount() {
    let response = await fetch("http://localhost:4000/Time", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      }
    });
    let data = await response.json();
    this.setState({data})
  }

  async handleEdit(event) {

    
    event.preventDefault()
    var checktime = {

      Nik : this.state.Nik,
      Reason : this.state.Reason

    }
  
    let DataWaktu = await fetch("http://localhost:4000/Time", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic"
      },
      body: JSON.stringify(checktime)
    });
    
    let hasilinput = await DataWaktu.json();
    window.location.reload();
  
    
  }


  render(){

    console.log(this.state.data)
    const {data} = this.state 
    
    return( 
<div>

<Card backgroundColor='transparent' className="text-left" style={{ height: '30.rem' }} >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom align="center">
              <b></b>Check Time
            </Typography>
 
            <Typography variant="body2" component="p"> 

           
            <Table id="TableTime">
              <thead>
                <tr>
                  <th>Nik</th>
                  <th>Masuk</th>
                  <th>Pulang</th>
                  <th>Reason</th>
                  <th>View</th>
                </tr>
                </thead>

                <tbody>
                {data  && data.values.map((val, key) => (
                <tr>
                  <td>{val.Nik} </td>
                  <td>{val.Masuk} </td>
                  <td>{val.Pulang} </td>
                  <td>{val.Reason} </td>
                  <td>
                    { val.Reason ? ("") :(<Button Button variant="outlined" color="primary" onClick={() => this.handleShow(val)}>Update</Button>)}
                  </td>
                </tr>
                ))}
                </tbody> 

            </Table>            

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                Check Time
              </Modal.Header>
              <Modal.Body>
                <Form  onSubmit={this.handleEdit} method="PUT">    
                  <FormGroup>
                    <Label for="Nik">Nik</Label>
                    <Input disabled type="text" name="Nik" id="Nik" onChange={this.lognik} value={this.state.Nik}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="Reason">Reason</Label>
                    <Input type="textarea" name="Reason" id="Reason"onChange={this.logreason} value={this.state.Reason}   />
                    <Label ></Label>
                  </FormGroup>
                  <button  Button variant="outlined" color="primary" align="center">Submit</button>
                </Form>
              </Modal.Body>
            </Modal>  

            </Typography>
          </CardContent>
        </Card>
</div>
        )
    }
}

export default AdminPage                       
