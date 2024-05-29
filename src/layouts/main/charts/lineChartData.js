import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add import statement for axios
import LineChart from "layouts/main/charts/LineChart";
// import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Grid from "@mui/material/Grid";
import Slider from '@mui/material/Slider';




const water_graph = () => {
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);
  const [n, setN] = useState(20);
  const [lineChartOptionsDashboard, setLineChartOptionsDashboard] = useState(null);
  const handleSliderChange = (event, value) => {
    setN(value);
    console.log('Slider value:', value);
  };

  const fetchDataFromAPI = async () => {
    try {
      let num = n;
      let url = `http://0.0.0.0:5000/api/getreadingdata?n=${num}`;
      console.log('Fetching data from:', url);

      const response = await axios.get(url);

      console.log('Data fetched:', response.data);
      const lineChartOptionsDashboard = {
        chart: {
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: response.data[0].map((item) => item),
      
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: true,
          },
        },
        yaxis: {
         
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          strokeDashArray: 5,
          borderColor: "#56577A",
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
          },
          colors: ["#0075FF", "#2CD9FF"],
        },
        colors: ["#0075FF", "#2CD9FF"],
      };
      setLineChartOptionsDashboard(lineChartOptionsDashboard);
      setFetchData([response.data[1]]);

    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {

      fetchDataFromAPI();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [n]);



  return (
    <VuiBox >
      <Grid container spacing={1}>
      <Grid item xs={12} lg={12} xl={12}>
        <VuiTypography variant="button" color="#c8cfca" fontWeight="bold">
          sample count: {n}{"  "}
        </VuiTypography>
      </Grid> 
      <Grid item xs={12} lg={12} xl={12}>
        <VuiBox>
          <VuiTypography>
            <VuiBox sx={{ width: "200px" }}>

              <Slider
                defaultValue={20}
                step={10}
                marks
                min={10}
                max={100}
                onChange={handleSliderChange}
              />
            </VuiBox>
          
          </VuiTypography>
        </VuiBox>
      </Grid>
      </Grid>

    {fetchData ? (
      <VuiBox sx={{ height: "310px" }}>
            <LineChart
              lineChartData={fetchData}
              lineChartOptions={lineChartOptionsDashboard} // Assuming lineChartOptionsDashboard is defined somewhere
            />          
        </VuiBox>
      ): (
        <p>Loading...</p>
      )}
      
    </VuiBox>
  );
};


export default water_graph;
