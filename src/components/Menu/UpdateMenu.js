import React, { useState, useEffect } from 'react';
import axios from 'axios';


import {useParams} from "react-router-dom";

const UpdateMenu = ({ itemId }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const { id } = useParams(); // Get the item ID from the URL params
    const [errors, setErrors] = useState({});
    // const [item, setItem] = useState({});
    useEffect(() => {
        // Fetch the specific item data based on ID
        console.log(id)
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/menu/${id}`); // Replace with your API endpoint
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name); // Update state with the fetched item data
                    setPrice(data.price); // Update state with the fetched item data
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            // Validate form fields
            const newErrors = {};

            if (!name) {
                newErrors.name = 'Name is required';
            } else newErrors.name= null

            if (!price) {
                newErrors.price = 'Price is required';
            } else if (price<=0) {
                newErrors.price = 'Prix Doit etre positif';
            } else if (isNaN(price)) {
                newErrors.price = 'Price must be a number';
            }
            else newErrors.price = null

            // Handle image validation if needed

            if (!errors.name && !errors.price) {
                console.log("no errors!")
             
             
                const response = await axios.put(`http://localhost:5000/api/menu/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then(data=>{
                    console.log(data.data)
                    window.location = "/menu-list"
                });
            } else {
                console.log(errors)
                setErrors(newErrors);
            }


            // console.log(response.data);
            // Handle success, redirect, or show a success message
        } catch (error) {
            console.error('Error updating item:', error);
            // Handle error, show an error message
        }
    };

    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card col-md-8 p-7">
        <div id="updateItem">
          <h2 className="mb-4">Update Menu</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">Nom :</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="form-label">Prix :</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="image" className="form-label">Image :</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
    
    );
};

export default UpdateMenu;
