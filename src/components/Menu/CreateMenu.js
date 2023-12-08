import React, { useState } from 'react';
import axios from 'axios';

const CreateMenu= () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const formData = new FormData();
          formData.append('name', name);
          formData.append('price', price);
          formData.append('image', image);
          // const newItem = { name, image, price };
          await axios.post('http://localhost:5000/api/menu', formData).then(response => {
              console.log(response.data);
              setName('');
              setImage('');
              setPrice(null);

              window.location = "/menu-list"

          }).catch(error => {
              console.log(error.response.data);

          });
          // Optionally: handle success or reset form fields
          setName('');
          setImage('');
          setPrice('');
      } catch (error) {
          // Handle error
          console.error('Error creating item:', error);
      }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card col-md-8 p-7">
      <div id="addItem">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom du Menu
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Entrez le menu "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prix" className="form-label">
              Prix
            </label>
            <input
              type="text"
              className="form-control"
              id="prix"
              placeholder="Entrez le prix"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="photo"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary">Ajouter un élément</button>
        </form>
      </div>
    </div>
  </div>
  

  );
};

export default CreateMenu;
