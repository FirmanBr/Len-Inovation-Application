import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Logo from '../Image/logo.png';
import Image from 'react-bootstrap/Image'
import { Col  ,Form, Label, Input } from 'reactstrap';
import { userService, authenticationService } from '../services';
import Button from '@material-ui/core/Button';

class CutiPage extends Component {

  constructor(props) {
    super(props);

    this.ChangeNik1 = this.ChangeNik1.bind(this);
    this.ChangeUsername1 = this.ChangeUsername1.bind(this);
    this.ChangeJabatan1 = this.ChangeJabatan1.bind(this);
    this.ChangeBagian1 = this.ChangeBagian1.bind(this);
    this.ChangeDirektorat1 = this.ChangeDirektorat1.bind(this);
    this.ChangeTahun = this.ChangeTahun.bind(this);
    this.ChangeSelama = this.ChangeSelama.bind(this);
    this.ChangeTanggalIzin = this.ChangeTanggalIzin.bind(this);
    this.ChangeSampaiIzin = this.ChangeSampaiIzin.bind(this);
    this.ChangeAlamatCuti = this.ChangeAlamatCuti.bind(this);
    this.ChangePerihal = this.ChangePerihal.bind(this);
    this.ChangeStatuscuti = this.ChangeStatuscuti.bind(this);
    this.handleData = this.handleData.bind(this);

    this.state = {
    }

}

ChangeNik1(e)
{
  this.setState({Nik1: e.target.value});
}
ChangeUsername1(e)
{
  this.setState({Username1: e.target.value});
}
ChangeJabatan1(e)
{
  this.setState({Jabatan1: e.target.value});
}
ChangeBagian1(e)
{
  this.setState({Bagian1: e.target.value});
}
ChangeDirektorat1(e)
{
  this.setState({Direktorat1: e.target.value});
}
ChangeTahun(e)
{
  this.setState({Tahun: e.target.value});
}
ChangeSelama(e)
{
  this.setState({Selama: e.target.value});
}
ChangeTanggalIzin(e)
{
  this.setState({TanggalIzin: e.target.value});
}
ChangeSampaiIzin(e)
{
  this.setState({SampaiIzin: e.target.value});
}
ChangeAlamatCuti(e)
{
  this.setState({AlamatCuti: e.target.value});
}
ChangePerihal(e)
{
  this.setState({Perihal: e.target.value});
}
ChangeStatuscuti(e)
{
  this.setState({Statuscuti: e.target.value});
}

async handleData(event) {
    
  event.preventDefault()
  var input = {

    Nik1 : this.state.Nik1,
    Username1 : this.state.Username1,
    Jabatan1 : this.state.Jabatan1,
    Bagian1 : this.state.Bagian1,
    Direktorat1 : this.state.Direktorat1,
    Tahun : this.state.Tahun,
    Selama : this.state.Selama,
    TanggalIzin : this.state.TanggalIzin,
    SampaiIzin : this.state.SampaiIzin,
    AlamatCuti : this.state.AlamatCuti,
    Perihal : "cuti",
    Statuscuti : "0"

  }

  let Post = await fetch("http://localhost:4000/Cuti", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic"
    },
    body: JSON.stringify(input)
  });
  
  let hasilinput = await Post.json();
  window.location.reload();

}


    render(){


        return(
            <Card backgroundColor='#333' className="text-left" style={{ height: '30.rem' }} >
            <CardContent>
              <Typography variant="body2" component="p"> 

              <Form  onSubmit={this.handleData} method="POST">
              <table bgcolor="#80bfff" width="100%"  align="center">
              <tr>
                <td  width="70%" align="left" rowspan="3"><Image src={Logo} width={80} height={55} mode='fit' /> </td>
                <td  align="left"><b> <font size="+1">PT.LEN INDUSTRI (PERSERO)</font></b></td>
              </tr>
              <tr>
                <td  align="justify"><b><font size="1">Electronics for industry and infrastructure</font></b></td>
              </tr>
              <tr>
                <td valign="top"><b>---------------------------------------------------------</b></td>
              </tr>
              </table>  

              <table  width="100%"  align="center">
              <tr>
                <td  width="70%" align="left" rowspan="4"></td>
                <td  align="justify"><b><font size="1">Kepada Yth:</font></b></td>
              </tr>
              <tr>
                <td  align="justify"><b><font size="1">Bapak Direktur Utama</font></b></td>
              </tr>
              <tr>
                <td  align="justify"><b><font size="1">PT.Len Industri (PERSERO)</font></b></td>
              </tr>
              <tr>
                <td  align="justify"><b><font size="1">Jalan Soekarno Hatta no. 442 Bandung</font></b></td>
              </tr>
              </table>  

              <Typography  color="textSecondary" gutterBottom align="left" ><b>  1. Yang bertanda tangan dibawah ini :</b></Typography>
              
              <table id="table1" align="center" width="400" width="100%"  >
              <tr  valign="middle"  height="50">
                <th width="20%"><Label for="exampleUsername1" sm={1}>Nama</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Username1" id="Username1" onChange={this.ChangeUsername1} value={this.state.Username1}  />
                  </Col>
                </th>
              </tr>
              <tr valign="middle"  height="50">
                <th><Label for="exampleNik1" sm={1}>Nik</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Nik1" id="Nik1" onChange={this.ChangeNik1} value={this.state.Nik1} />
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="exampleJabatan1" sm={1}>Jabatan</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Jabatan1" id="Jabatan1" onChange={this.ChangeJabatan1} value={this.state.Jabatan1}/>
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="exampleBagian1" sm={1}>Bagian</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Bagian1" id="Bagian1" onChange={this.ChangeBagian1} value={this.state.Bagian1}/>
                  </Col>
                </th>
              </tr>
              <tr valign="middle" height="50">
                <th><Label for="exampleDirektorat1" sm={1}>Direktorat</Label></th>
                <th>:</th>
                <th>
                  <Col sm={400}>
                  <Input type="text" name="Direktorat1" id="Direktorat1" onChange={this.ChangeDirektorat1} value={this.state.Direktorat1}/>
                  </Col>
                </th>
              </tr>
            </table>

            <table  id="table2" align="center" width="401" width="100%" >
              <tr  valign="middle"  height="50">
                <th width="35%">
                  <Label for="exampleTahun" sm={12}> 
                    <Typography  color="textSecondary" gutterBottom align="left" ><b>  
                      2. Dengan ini mengajukan permintaan cuti tahun</b>
                    </Typography>
                  </Label>
                </th>
                <th width="20%">
                  <Col sm={10}>
                    <Input type="text" name="Tahun" id="Tahun"  onChange={this.ChangeTahun} value={this.state.Tahun}/>
                  </Col>
                </th>
                <th width="5%">
                  <Label for="exampleSelama" sm={11}> 
                    <Typography  color="textSecondary" gutterBottom align="left" ><b>  
                      Selama</b>
                    </Typography>
                  </Label>
                </th>
                <th width="20%">
                  <Col sm={10}>
                    <Input type="text" name="Selama" id="Selama"  onChange={this.ChangeSelama} value={this.state.Selama}/>
                  </Col>
                </th>
              </tr>

              <tr valign="middle"  height="50">
                <th width="35%">
                  <Label for="exampleStart" sm={11}> 
                    <Typography  color="textSecondary" gutterBottom align="left" ><b>  
                      Mulai Tanggal</b>
                    </Typography>
                  </Label>
                </th>

                <th width="20%">
                  <Col sm={10}>
                    <Input type="date" name="TanggalIzin" id="TanggalIzin"  onChange={this.ChangeTanggalIzin} value={this.state.TanggalIzin}/>
                  </Col>
                </th>

                <th width="5%">
                  <Label for="exampleSampai" sm={11}> 
                    <Typography  color="textSecondary" gutterBottom align="left" ><b>  
                      Sampai</b>
                    </Typography>
                  </Label>
                </th>

                <th width="20%">
                  <Col sm={10}>
                    <Input type="date" name="SampaiIzin" id="SampaiIzin" onChange={this.ChangeSampaiIzin} value={this.state.SampaiIzin} />
                  </Col>
                </th>
              </tr>
            </table>

            <Typography  color="textSecondary" gutterBottom align="left" ><b>  3. Selama Menjalankan cuti alamat saya adalah di :</b></Typography>
            <Input type="text" name="AlamatCuti" id="AlamatCuti" onChange={this.ChangeAlamatCuti} value={this.state.AlamatCuti}/>
            <Input hidden type="text" name="Perihal" id="Perihal" onChange={this.ChangePerihal} value="cuti"/>
            <Input hidden type="text" name="Statuscuti" id="Statuscuti" onChange={this.ChangeStatuscuti} value="0"/>
            <Typography  color="textSecondary" gutterBottom align="left" ><b>  4. Demikian permintaan ini saya buat sebagaimana mestinya. </b></Typography>
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

export default CutiPage