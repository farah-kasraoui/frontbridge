import React, { useState } from 'react';
import axios from 'axios'; // Importez axios pour effectuer des requêtes HTTP
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', userData);
      setMessage('Utilisateur créé avec succès');
      console.log('Utilisateur créé :', response.data);
      // Réinitialisez les valeurs du formulaire après la création de l'utilisateur
      setUserData({ firstname: '', lastname:'' });
    } catch (error) {

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <MDBContainer fluid>

    <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

    <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
      <MDBCardBody className='p-5 text-center'>

        <h2 className="fw-bold mb-5">Register now</h2>
<form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1'type="text"
          name="firstname"
          placeholder="firstname"
          value={userData.firstname}
          onChange={handleChange}
          required/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type="text"
          name="lastname"
          placeholder="lastname"
          value={userData.lastname}
          onChange={handleChange}
          required/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='mobile' id='form1'
             type="text"
                name="mobile"
                placeholder="mobile"
                value={userData.mobile}
                onChange={handleChange}
                required/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Email-Adress' id='form1' type="email"
          name="email"
          placeholder="Adresse email"
          value={userData.email}
          onChange={handleChange}
          required/>
          </MDBCol>
        </MDBRow>

     
        <MDBInput wrapperClass='mb-2' label='Password' id='form1' type='password'

              name="password"
              placeholder="Mot de passe"
              value={userData.password}
              onChange={handleChange}
              required/> 

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='w-100 mb-4' size='md' type="submit">sign up</MDBBtn>
        </form>
        {/* {message && <p>{message}</p>} */}
        <div className="text-center">

          {/* <p>or sign up with:</p>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn> */}

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
    // <div>
    //   <h2>Créer un nouvel utilisateur</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="firstname"
    //       placeholder="firstname"
    //       value={userData.firstname}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       name="lastname"
    //       placeholder="lastname"
    //       value={userData.lastname}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       name="mobile"
    //       placeholder="mobile"
    //       value={userData.mobile}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Adresse email"
    //       value={userData.email}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Mot de passe"
    //       value={userData.password}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br />
    //     <button type="submit">Créer</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
    
  );
};

export default CreateUser;
