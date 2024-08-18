import React, { useEffect, useState } from "react";
import DoughnutGraph from "../../components/doughnutGraph";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  Typography,
  Tabs,
  Tab,
  Checkbox,
} from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { cards } from "../../utils/cards";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
  const [cardsData, setCardsData] = useState([...cards]);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState({
    cloudAccount: false,
    riskAssessment: false,
  });
  const handleClose = () => setOpen(false);
  const handleAddWidget = () => {
    setOpen(true);
  };
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCheckBox = (e, checkboxName) => {
    setSelectedValue((prev) => ({
      ...prev,
      [checkboxName]: e.target.checked,
    }));
  };
  const handleConfirm = () => {
    const newCards = [...cardsData];
    if (selectedValue.cloudAccount) {
      const newCard = {
        id: cardsData.length + 1,
        name: "Cloud Accounts",
        backgroundColor: ["#5578ff", "#e1ebff"],
        hoverbackgroundColor: ["#e1ebff"],
        data: [50, 50],
        labels: ["Connected (2)", "Not Connected (2)"],
        totalCount: 2,
      };
      newCards.push(newCard);
    }
    if (selectedValue.riskAssessment) {
      const newCard = {
        id: cardsData.length + 1,
        name: "Cloud Account Risk Assessment",
        backgroundColor: ["#19a55a", "#f6d42e", "#b9140f", "c8cddc"],
        hoverbackgroundColor: ["#19a55a", "#f6d42e", "#b9140f", "c8cddc"],
        data: [50, 30, 12, 8],
        labels: [
          "Passed(7253)",
          "Warning (682)",
          "Failed (1672)",
          "Not available(36)",
        ],
        totalCount: 4,
      };
      newCards.push(newCard);
    }
    setCardsData(newCards);
    setOpen(false);
  };
  const handleCancel = () => {
    setSelectedValue(() => ({
      cloudAccount: false,
      riskAssessment: false,
    }));
    setOpen(false);
  };
  const handleDeleteCard = (i) => {
    const newCard = cardsData?.filter((val, index) => index !== i);
    if (newCard) {
      setCardsData(newCard);
    }
  };

  return (
    <div>
      <Box
        sx={{
          background: "#f0f5fa",
          // padding: "20px 80px",
          padding:{xxs:"0px 0px",md:"20px 80px",lg:"20px 80px",xl:"20px 80px"},
          // width:'100%',
          height: {
            xs: "100vh",
            md: "100vh",
            sm: "100vh",
            lg: "100vh",
            xl: "100vh",
          },
        }}
      >
        {/* Header */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: {
                // xs: "10px",
                xxs:"15px",
                md: "20px",
                sm: "20px",
                lg: "20px",
                xl: "20px",
              },
              fontFamily: "Open Sans",
              fontWeight: 700,
            }}
          >
            CNAPP Dashboard
          </Typography>
          <Box sx={{ display: "flex", marginRight:{xxs:"0px",lg:"25px",md:"25px",xl:"25px",sm:"25px" } }}>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "#fff",
                color: "#636e7c",
                // margin: "0px 15px 0px 0px",
                marginRight:{xxs:"0px",md:"15px"},
                padding: { xxs: "5px",md:"10px" },
                fontSize: { xxs: "10px",md:"14px" },
                "&:hover": {
                  color: "#fff",
                },
              }}
              onClick={() => {
                handleAddWidget();
              }}
            >
              Add Widget +
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "#fff",
                color: "#636e7c",
                margin: "0px 15px 0px 0px",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              <LoopIcon />
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "#fff",
                color: "#636e7c",
                display: {
                  xs: "none",
                  md: "none",
                  sm: "none",
                  lg: "block",
                  xl: "block",
                },
                margin: "0px 15px 0px 0px",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              <MoreVertIcon />
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "#fff",
                color: "#636e7c",
                margin: "0px 15px 0px 0px",
                display: {
                  xs: "none",
                  md: "none",
                  sm: "none",
                  lg: "block",
                  xl: "block",
                },
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <AccessTimeFilledIcon sx={{ color: "#14147d" }} />
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
                sx={{ width: "120px", height: "25px", outLine: "none" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Last 2 days</MenuItem>
                <MenuItem value={20}>Weekly</MenuItem>
                <MenuItem value={30}>Monthly</MenuItem>
              </Select>
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontWeight: 700,

              marginLeft: "10px",
            }}
          >
            CSPM Executive Dashboard
          </Typography>
        </Box>

        {/* Cards */}

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {cardsData?.map((card, i) => {
            return (
              <Box
                sx={{
                  // width:"425px",
                  width: {
                    md: "400px",
                    sm: "420px",
                    xs: "350px",
                    lg: "400px",
                    xl: "425px",
                  },
                  height: "200px",
                  borderRadius: "10px",
                  background: "#fff",
                  margin: "10px",
                }}
                key={card.id}
              >
                <Box
                  sx={{
                    padding: "8px 5px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Open Sans",
                      fontWeight: 700,

                      marginLeft: "10px",
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Open Sans",
                      fontWeight: 700,

                      marginRight: "10px",
                    }}
                  >
                    <CloseIcon
                      onClick={() => {
                        handleDeleteCard(i);
                      }}
                      sx={{ cursor: "pointer", fontSize: "18px" }}
                    />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "250px",
                      md: "350px",
                      sm: "300px",
                      lg: "350px",
                      xl: "425px",
                    },
                    height: { xs: "120px", md: "150px", lg: "120px" },
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 40, sm: 50, md: 50, lg: 40, xl: 40 },
                      left: { xs: 50, sm: 60, md: 80, lg: 90, xl: 120 },
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        marginLeft: "10px",
                        fontSize: "13px",
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                      }}
                    >
                      {card.totalCount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontFamily: "Open Sans",
                        fontWeight: 500,
                      }}
                    >
                      Total
                    </Typography>
                  </Box>
                  <DoughnutGraph
                    backgroundColor={card.backgroundColor}
                    hoverbackgroundColor={card.hoverbackgroundColor}
                    dataSet={card.data}
                    labels={card.labels}
                  />
                </Box>
              </Box>
            );
          })}
          <Box
            sx={{
              width: { md: "400px", sm: "400px", xs: "100%", lg: "400px" },
              height: "200px",
              borderRadius: "10px",
              background: "#fff",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e8ecec",
                color: "#bcc1c7",
                fontSize: "12px",
                fontFamily: "Open Sans",
                fontWeight: 700,
              }}
              onClick={() => {
                handleAddWidget();
              }}
            >
              Add Widget +
            </Button>
          </Box>
        </Box>

        {/* Popup-Modal */}

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              width: {xxs:"300px",md:600,lg:600,xl:600},
              height: "100vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              // p: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background: "#14147d",
                padding: "10px",
              }}
            >
              <Typography variant="p" sx={{ color: "#fff" }}>
                Add Widget
              </Typography>
              <Typography variant="p">
                <CloseIcon
                  onClick={() => {
                    handleClose();
                  }}
                  sx={{ cursor: "pointer", color: "#fff" }}
                />
              </Typography>
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="p">
                Personalise your dashboard by adding the following widget
              </Typography>
            </Box>
            {/* Tabs */}
            <Box>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="CSPM" {...a11yProps(0)} />
                <Tab label="CWPP" {...a11yProps(1)} />
                <Tab label="Image" {...a11yProps(2)} />
                <Tab label="Ticket" {...a11yProps(3)} />
              </Tabs>
              {/* Tab Panels */}
              <Box>
                <TabPanel value={tabValue} index={0}>
                  <Box
                    sx={{
                      border: "1px solid",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Checkbox
                      checked={selectedValue.cloudAccount}
                      onChange={(e) => handleCheckBox(e, "cloudAccount")}
                    />
                    <Typography variant="p">Cloud Accounts</Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      checked={selectedValue.riskAssessment}
                      onChange={(e) => handleCheckBox(e, "riskAssessment")}
                    />
                    <Typography variant="p">
                      Cloud Account Risk Assessment
                    </Typography>
                  </Box>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <Typography>No Data</Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                  <Typography>No Data</Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                  <Typography>No Data</Typography>
                </TabPanel>
              </Box>
            </Box>
            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 20px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0f1941",
                  color: "#bcc1c7",
                  fontSize: "12px",
                  fontFamily: "Open Sans",
                  fontWeight: 700,
                  marginRight: "10px",
                }}
                onClick={() => {
                  handleCancel();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0f1941",
                  color: "#FFF",
                  fontSize: "12px",
                  fontFamily: "Open Sans",
                  fontWeight: 700,
                }}
                onClick={() => {
                  handleConfirm();
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Dashboard;
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
