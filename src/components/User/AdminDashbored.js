import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard-data');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du tableau de bord :', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
 
    </div>
  );
};

export default DashboardAdmin;
