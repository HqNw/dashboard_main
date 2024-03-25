import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import VuiBox from "components/VuiBox";

const YourComponent = () => {
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/getreadingdata');
        console.log('Data fetched:', response.data);
        
        setFetchData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchDataFromAPI();
  }, []); // Empty array means the effect runs only once after the component mounts

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <VuiBox sx={{ height: "310px" }}>

    {fetchData ? (
        <LineChart
          lineChartData={fetchData}
          lineChartOptions={lineChartOptionsDashboard} // Assuming lineChartOptionsDashboard is defined somewhere
        />
      ): (
        <p>Loading...</p>
      )}
      
    </VuiBox>
  );
};


export default YourComponent;
