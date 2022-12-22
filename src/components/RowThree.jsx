import { Box, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GeographyChart from "./GeographyChart";
import BarChart from "./BarChart";
import { mockTransactions } from "../data/mockData";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const RowThree = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125" />
          <Typography variant="h5" fontWeight="600" mt="10px">
            $73,290 revenue generated
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sale Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
          Geography Based Traffic
        </Typography>
        <Box height="250px" mt="-20px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};

export default RowThree;
