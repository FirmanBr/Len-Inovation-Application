import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router-dom'

import { history, Role } from './helpers';
import { authenticationService } from './services';
import { PrivateRoute } from './components';
import AdminPage from './AdminPage/AdminPage'
import CutiPage from './AdminPage/CutiPage'
import IzinPage from './AdminPage/IzinPage'
import Approval from './AdminPage/Approval'
import Status from './AdminPage/Status'
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'
import { AwesomeButton } from "react-awesome-button";

import image1 from './Image/bg.jpg'
import image2 from './Image/bg1.jpg'
import image3 from './Image/bg2.jpg'
import BackgroundSlider from 'react-background-slider'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        currentUser: null,
        isAdmin: false
    };
}

componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
    }));
}

logout() {
    authenticationService.logout();
    history.push('/login');
}

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
        
        <Router history={history}>
            <div>

            <BackgroundSlider
                images={[image1, image2, image3]}
                    duration={8}
                    transition={2}
                    
                />
                
                {currentUser &&
                    <nav className="navbar navbar-expand-lg navbar-light nav-bar-ghostwhite">
                        <div className="navbar-nav">
                            <Link to="/" color="secondary" className="nav-item nav-link"><AwesomeButton type="secondary">Home</AwesomeButton></Link>
                            <Link to="/admin" className="nav-item nav-link"><AwesomeButton type="secondary">Check Time</AwesomeButton></Link>
                            <Link to="/admin1" className="nav-item nav-link"><AwesomeButton type="secondary" >Cuti</AwesomeButton></Link>
                            <Link to="/admin2" className="nav-item nav-link"><AwesomeButton type="secondary">Izin Pribadi</AwesomeButton></Link>
                            <Link to="/admin4" className="nav-item nav-link"><AwesomeButton type="secondary">Status</AwesomeButton></Link>
                            {isAdmin && <Link to="/admin3" className="nav-item nav-link"><AwesomeButton type="secondary">Approval</AwesomeButton></Link>}
                            <Link onClick={this.logout} className="nav-item nav-link"><AwesomeButton type="secondary">Logout</AwesomeButton></Link>
                        </div>
                    </nav>
                }
                    <div className="container">
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute exact path="/admin"  component={AdminPage} />
                                <PrivateRoute exact path="/admin1"  component={CutiPage} />
                                <PrivateRoute exact path="/admin2"  component={IzinPage} />
                                <PrivateRoute path="/admin3" roles={[Role.Admin]} component={Approval} />
                                <PrivateRoute exact path="/admin4"  component={Status} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                     </div>
        </Router>
        
    );
}
}

export default App;
