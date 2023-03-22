/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";
import { useEffect, useState } from "react";
// import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "examples/Charts/PieChart";

function UpcomingMeeting() {
  const [upcomingClass, setUpcomingClass] = useState([]);

  return (
    <Card className="h-100">
      {/* <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Recent All Order
        </SoftTypography>
      </SoftBox> */}
      <PieChart
        title="Today Sales"
        chart={{
          labels: ["Pant", "T-Shirt", "Shoe", "Women","Jacket"],
          datasets: {
            label: "Projects",
            backgroundColors: ["info", "primary", "dark", "secondary", "warning"],
            data: [15, 20, 12, 60,50],
          },
        }}
      />
    </Card>
  );
}

export default UpcomingMeeting;
