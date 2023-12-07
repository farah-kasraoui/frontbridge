import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';

import axios from 'axios';

const LoginAdmin = () => {
  const [adminData, setAdminData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const loginAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/loginadmin', adminData);
      setMessage('Connexion réussie en tant qu\'administrateur');
      console.log('Connexion réussie en tant qu\'administrateur :', response.data);
      setAdminData({ email: '', password: '' });
      // Redirection ou action à effectuer après la connexion réussie
      window.location.href = '/dashboard-admin';
    } catch (error) {
      setMessage(`Erreur : ${error.message}`);
      console.error('Erreur lors de la connexion en tant qu\'administrateur :', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAdmin();
  };

  return (

<MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-100'>

    <MDBCol md='4'>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='4'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-3'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0"></span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Admin Registration</h5>
<form onSubmit={handleSubmit}>
          <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg'   
         type="email"
          name="email"
          placeholder="Adresse email"
          value={adminData.email}
          onChange={handleChange}
          required
          requiredsize="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg'  type="password"
          name="password"
          placeholder="Mot de passe"
          value={adminData.password}
          onChange={handleChange}
          required />

        <MDBBtn className="mb-4 px-7" color='dark' size='lg'  type="submit">connect</MDBBtn>
        </form>
        {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
        {/* <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/user" style={{color: '#393f81'}}>Register here</a></p> */}

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
);




    // <div>
    //   <h2>Connexion Administrateur</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Adresse email"
    //       value={adminData.email}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Mot de passe"
    //       value={adminData.password}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <button type="submit">Se connecter</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>


};


export default LoginAdmin;

