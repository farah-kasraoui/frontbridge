import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const ListMenu = () => {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const confirmDeleteItem = (itemId) => {
        setConfirmDelete(itemId);
    };

    const cancelDelete = () => {
        setConfirmDelete(null);
    };


    useEffect(() => {
        // Fetch items from the server upon component mount
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/menu');
            setItems(response.data); // Assuming response.data contains the list of items
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5000/api/menu/${itemId}`);
            // If successful, update the items state to reflect the change
            setItems(items.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
    const handleConfirmDelete = () => {
        if (confirmDelete) {
            handleDelete(confirmDelete);
            setConfirmDelete(null);
        }
    };

    const handleSort = (key) => {
        if (sortBy === key) {
            // If already sorting by this key, reverse the order
            setSortBy(`-${key}`);
        } else {
            setSortBy(key);
        }
    };

    const sortedItems = sortBy ? [...items].sort((a, b) => {
        const key = sortBy.startsWith('-') ? sortBy.substring(1) : sortBy;
        return sortBy.startsWith('-') ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key]);
    }) : items;

    return (
       
        <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h2 className="col-md-10">Menu-List</h2>
            <Link to={`/create-menu`} style={{ textAlign: "left" }} className="btn btn-success me-2 col-md-2">
              Create
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th style={{ cursor: "pointer" }} onClick={() => handleSort('image')}>Image</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Contenu de la liste */}
              {sortedItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.name}
                      className="card-img-top"
                      style={{ width: '50px' }}
                      title={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} DT</td>
                  <td>
                    <Link to={`/update-menu/${item._id}`} className="btn btn-primary me-2">
                      Update
                    </Link>
                    <button onClick={() => confirmDeleteItem(item._id)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modèle de confirmation de suppression */}
      {confirmDelete && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={cancelDelete}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this item?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmDelete && <div className="modal-backdrop fade show"></div>}
    </div>
  
    );
};

export default ListMenu ;

