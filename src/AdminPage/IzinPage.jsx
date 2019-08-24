import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Col  ,Form, FormGroup, Label, Input } from 'reactstrap';
import { userService, authenticationService } from '../services';
import Logo from '../Image/logo.png';
import Image from 'react-bootstrap/Image'


class IzinPage extends Component {

  constructor(props) {
    super(props);

    this.ChangeNik = this.ChangeNik.bind(this);
    this.ChangeNama = this.ChangeNama.bind(this);
    this.ChangeJabatan = this.ChangeJabatan.bind(this);
    this.ChangeBagian = this.ChangeBagian.bind(this);
    this.ChangeDirektorat = this.ChangeDirektorat.bind(this);
    this.ChangeKeterangan = this.ChangeKeterangan.bind(this);
    this.ChangeTanggal = this.ChangeTanggal.bind(this);
    this.ChangeJam = this.ChangeJam.bind(this);
    this.ChangeStatus = this.ChangeStatus.bind(this);
    this.ChangePerihal = this.ChangePerihal.bind(this);
    this.handleDataIzin = this.handleDataIzin.bind(this);


    this.state = {

    };
}

ChangeNik(e)
{
  this.setState({Nik: e.target.value});
}
ChangeNama(e)
{
  this.setState({Nama: e.target.value});
}
ChangeJabatan(e)
{
  this.setState({Jabatan: e.target.value});
}
ChangeBagian(e)
{
  this.setState({Bagian: e.target.value});
}
ChangeDirektorat(e)
{
  this.setState({Direktorat: e.target.value});
}
ChangeKeterangan(e)
{
  this.setState({Keterangan: e.target.value});
}
ChangeTanggal(e)
{
  this.setState({Tanggal: e.target.value});
}
ChangeJam(e)
{
  this.setState({Jam: e.target.value});
}
ChangeStatus(e)
{
  this.setState({Status: e.target.value});
}
ChangePerihal(e)
{
  this.setState({Perihal: e.target.value});
}

async handleDataIzin(event) {
    
  event.preventDefault()
  var inputizin = {

    Nik : this.state.Nik,
    Nama : this.state.Nama,
    Jabatan : this.state.Jabatan,
    Bagian : this.state.Bagian,
    Direktorat : this.state.Direktorat,
    Keterangan : this.state.Keterangan,
    Tanggal : this.state.Tanggal,
    Jam : this.state.Jam,
    Perihal : "izin pribadi",
    Status : "0"

  }

  let PostIzin = await fetch("http://localhost:4000/IzinRead", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic"
    },
    body: JSON.stringify(inputizin)
  });
  
  let hasilinput = await PostIzin.json();
  console.log(inputizin)
  console.log(PostIzin)
  window.location.reload();

}


    render(){
      const { currentUser } = this.state;
        return( 
          <Card  className="text-left" style={{ height: '80.rem' }} >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom >

            <table>
              <tr>
                <td rowspan="2"><Image src={Logo} width={80} height={55} mode='fit' /> </td>
                <td><b>PT.LEN INDUSTRI (PERSERO)</b></td>
              </tr>
              <tr>
                <td><b>JL.Soekarno Hatta no 442 Bandung</b></td>
              </tr>
            </table>

            <div></div>

            <Typography  color="textSecondary" gutterBottom align="center" ><b> SURAT PERMOHONAN IZIN PRIBADI</b></Typography>
            <Typography  color="textSecondary" gutterBottom align="left" ><b> yang bertanda tangan dibawah ini :</b></Typography>
            
            </Typography>


            <Typography  color="textSecondary" gutterBottom align="left" >         
            
            <Form onSubmit={this.handleDataIzin} method="POST">

            <table align="center" width="400">
              <tr valign="middle"  height="50">
                <th ><Label for="exampleUsername" sm={1}>Nama</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Nama" id="Nama" onChange={this.ChangeNama} value={this.state.Nama}/>
                  </Col>
                </th>
              </tr>
              <tr valign="middle"  height="50">
                <th><Label for="exampleNik" sm={1}>Nik</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Nik" id="Nik" onChange={this.ChangeNik} value={this.state.Nik}/>
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="exampleJabatan" sm={1}>Jabatan</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Jabatan" id="Jabatan" onChange={this.ChangeJabatan} value={this.state.Jabatan}/>
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="Bagian" sm={1}>Bagian</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Bagian" id="Bagian"onChange={this.ChangeBagian} value={this.state.Bagian} />
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="exampleDirektorat" sm={1}>Direktorat</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Direktorat" id="Direktorat" onChange={this.ChangeDirektorat} value={this.state.Direktorat}/>
                  </Col>
                </th>
              </tr>
            </table>
            
            <Typography  color="textSecondary" gutterBottom align="left" ><b> dengan ini mengajukan permohonan sebagai berikut</b></Typography>
            <FormGroup>
              <Input type="textarea" name="Keterangan" id="Keterangan" onChange={this.ChangeKeterangan} value={this.state.Keterangan}/>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleTanggal" sm={2}>Pada Tanggal</Label>
                  <Col sm={4}>
                    <Input type="date" name="Tanggal" id="Tanggal" onChange={this.ChangeTanggal} value={this.state.Tanggal} />
                  </Col>
                <Label for="exampleSampai" sm={1}>Jam</Label>
                <Col sm={5}>
                    <Input type="time" name="Jam" id="Jam" onChange={this.ChangeJam} value={this.state.Jam}/>
                  </Col>
              </FormGroup>
              <Typography  color="textSecondary" gutterBottom align="left" ><b> Demikian permohonan saya, atas perhatiannya diucapkan terima kasih</b></Typography>
              <Input hidden type="text" name="Status" id="Status" onChange={this.ChangeStatus} value="0"/>
              <Input hidden type="text" name="Perihal" id="Perihal"  onChange={this.ChangePerihal} value="Izin Pribadi"/>
              <div align="center">
              <button outline color="primary" size="sm" align="right"><b>Mengajukan</b></button>
              </div>
            </Form>

            </Typography>

          </CardContent>
        </Card>
        )
    }
}

export default IzinPage                       
