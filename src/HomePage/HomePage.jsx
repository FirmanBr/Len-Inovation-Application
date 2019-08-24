import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { userService, authenticationService } from '../services';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        return (
            <div>
                <div align="right">
                    <Card className="text-left" style={{ width: '25rem' }} >
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                            <b></b>EFISIENSI
                            </Typography>
 
                            <Typography variant="body2" component="p">            
                            <br />
                            {'"ukuran tingkat penggunaan sumber daya dalam suatu proses. Semakin hemat/sedikit penggunaan sumber daya, maka prosesnya dikatakan semakin efisien. Proses yang efisien ditandai dengan perbaikan proses sehingga menjadi lebih murah dan lebih cepat."'}
                        </Typography>
                        </CardContent>
                    </Card>
                </div>

                <p></p>

                <div align="right">
                    <Card className="text-left" style={{ width: '25rem' }} >
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                <b></b>Efektivitas 
                            </Typography>
                                
                            <Typography variant="body2" component="p">            
                                <br />
                                {'"ukuran tingkat pemenuhan output atau tujuan proses. Semakin tinggi pencapaian target atau tujuan proses maka dikatakan proses tersebut semakin efektif. Proses yang efektif ditandai dengan perbaikan proses sehingga menjadi lebih baik dan lebih aman."'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <p></p>
                <div align="right">
                <Card className="text-left" style={{ width: '25rem' }} >
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom>
                        <b></b>Kesimpulan 
                        </Typography>

                        <Typography variant="body2" component="p">            
                            <br />
                            {'"Jadi keduanya semakna tapi beda antara Efisiensi dan Efektivitas akan tetapi keduanya saling menunjang          "'}
                        </Typography>
                    </CardContent>
                </Card>
                </div>
            </div>
        );
    }
}

export default HomePage