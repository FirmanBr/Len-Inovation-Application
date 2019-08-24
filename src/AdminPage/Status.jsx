import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Table } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import QRcode from 'qrcode.react';
import moment from 'moment'


class Status extends Component {

  constructor(props,context) {
    super(props, context); 


    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
    }

}

handleClose() {
this.setState({ show: false });
}

handleShow() {
this.setState({ show: true });
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


    render(){

      const {data} = this.state 
      const {data1} = this.state 




        return(
          <Card backgroundColor='transparent' className="text-left" style={{ height: '30.rem' }} >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom align="center">
              <b></b>Status
            </Typography>
 
            <Typography variant="body2" component="p">            
            
            <Table align="center">
              <thead>
                <tr valign="middle">
                  <th>Tanggal</th>
                  <th>Perihal</th>
                  <th>Detail</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
              {data  && data.values.map((val, key) => (  
                <tr>
                  <td>{moment(val.TanggalIzin).format("DD-MM-YYYY")}</td>
                  <td>{val.Perihal }</td>
                  <td><Button Button variant="outlined" color="primary" onClick={this.handleShow} >View</Button></td>
                  <td> { val.Statuscuti =='0' ? <Button Button variant="outlined" >Pending</Button> : val.Statuscuti =='1' ? <Button Button variant="outlined" color="primary" >berhasil</Button> :<Button Button variant="outlined" color="secondary" >Gagal</Button>} </td>
                </tr>
              ))}  
              </tbody>

              <tbody>
              {data1  && data1.values.map((val1, key) => (  
                <tr>
                  <td>{moment(val1.Tanggal).format("DD-MM-YYYY")}</td>
                  <td>{val1.Perihal }</td>
                  <td><Button Button variant="outlined" color="primary" onClick={this.handleShow} >View</Button></td>
                  <td> { val1.Status =='0' ? <Button Button variant="outlined" >Pending</Button> : val1.Statuscuti =='1' ? <Button Button variant="outlined" color="primary">berhasil</Button> :<Button Button variant="outlined" color="secondary">Gagal</Button>} </td>
                </tr>
              ))}  
              </tbody>


            </Table>

            <Modal show={this.state.show} onHide={this.handleClose}>
					    <Modal.Header closeButton>
					    	QR Code Scan
					    </Modal.Header>
					    <Modal.Body>
                <QRcode value="https://www.len.co.id/download/Company%20Profile%20PT%20Len%20Industri%20(Persero)%20-%20(02-09-2015).pdf" />
              </Modal.Body>
            </Modal>  
            </Typography>

          </CardContent>
        </Card>
        )
    }
}

export default Status