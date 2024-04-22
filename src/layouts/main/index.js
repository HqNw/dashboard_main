// import Grid from "@mui/material/Grid";
// import { Card, LinearProgress, Stack } from "@mui/material";



// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
// import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";

// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";

// import colors from "assets/theme/base/colors";


// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
// import LineChart from "layouts/main/charts/linechart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";


import WaterGraph from "layouts/main/charts/lineChartData";
import ControllerComponent from "layouts/main/control/controller";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Slider from '@mui/material/Slider';
import socketIOClient from 'socket.io-client';


function main() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  const SocketServerUrl = 'ws://0.0.0.0:5002';


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={2} display='flex' flexDirection='row'>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money", fontWeight: "regular" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "total sales" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} xl={7}>
            <Card>
              <VuiBox sx={{ height: "100%" }}>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Water Level
                </VuiTypography>
                <WaterGraph />
              </VuiBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} xl={5}>
            <VuiBox container>
              <VuiBox mb={3}>
                <Grid container spacing={1}>
                  <Grid item sx={{ height: "100%", width: 400}}>
                    <Card>
                      <VuiBox sx={{ height: "100%", width: "100%"}}>
                        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                          control panel
                        </VuiTypography>
                        <ControllerComponent serverUrl={SocketServerUrl} />
                      </VuiBox>
                    </Card>
                  </Grid>
                </Grid>
              </VuiBox>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}


export default main;