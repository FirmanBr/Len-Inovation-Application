import React from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import image1 from '../Image/bg.jpg'
import image2 from '../Image/bg1.jpg'
import image3 from '../Image/bg2.jpg'
import BackgroundSlider from 'react-background-slider'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticationService } from '../services';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";



const toHome = props => <Link to="/login" {...props} />;


class LoginPage extends React.Component {

    constructor(props,context) {
        super(props, context); 

        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            redirectToReferrer: false, 
        }

        this.hkandleChange = this.handleChange.bind(this);
    }

    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}


    handleChange = async (event) => {
        
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        
        await this.setState({
          [ name ]: value,
        });
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
       }

      render() {
          return (
            <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().required('Username is required'),
                password: Yup.string().required('Password is required')
            })}
            onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                setStatus();
                authenticationService.login(username, password)
                    .then(
                        user => {
                            const { from } = this.props.location.state || { from: { pathname: "/" } };
                            this.props.history.push(from);
                        },
                        error => {
                            setSubmitting(false);
                            setStatus(error);
                        }
                    );
            }}

            render={({ errors, status, touched, isSubmitting }) => (
              <div> 
                    <BackgroundSlider
                        images={[image1, image2, image3]}
                        duration={8}
                        transition={2}
                    />
                    
                    <nav className="navbar navbar-expand-lg ">
                        <Button color="secondary"  component={toHome}>
                            Home
                        </Button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupporstedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                        <li className="nav-item nav-li">
                            <Button color="secondary" onClick={this.handleShow}>
                            Login
                            </Button>
                        </li>
                        </ul>
                    </div>

                    <Modal show={this.state.show} onHide={this.handleClose}>
					    <Modal.Header closeButton>
						    LOGIN
					    </Modal.Header>
					<Modal.Body>
                    
                    <Form>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                            {isSubmitting &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                    </div>
                            
                    {status &&
                        <div className={'alert alert-danger'}>{status}</div>
                    }
                        
                    </Form>
                    </Modal.Body>
				</Modal>
            </nav>

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
        
            )}
            
            />
           
          )
          
      }
}

export default LoginPage;