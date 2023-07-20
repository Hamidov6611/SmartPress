import { Button, Card, Grid, styled, useTheme } from "@mui/material";
import { Fragment, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../layout/admin-layout";
import "../index.css";
import EditModal from "../components/edit/editModal.jsx";
import AddModal from "../components/add/addModal";
import DeleteModal from "../components/delete/deleteModal";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": {
      "& th": {
        paddingTop: "20px",
        paddingBottom: "20px",
        border: "1px solid #222A45",
        borderRadiusTop: "10px",
        background: "#21576F",
        color: "white",
        fontWeight: "500",
        fontSize: "16px",
      },
    },
  },
  "& tbody": {
    "& tr": {
      "& td": {
        paddingLeft: "10px",
        border: "1px solid #222A45",
        fontWeight: "400",
        fontSize: "15px",
      },
    },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
];

const AdminYunalishlar = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [admin, setAdmin] = useState([]);
  const [isshow, setIsShow] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let isAdmin = Cookies.get("admin");
    if (isAdmin?.length > 0) {
      setAdmin(JSON.parse(isAdmin));
    } else {
      setAdmin([]);
    }
  }, []);

  const editHandler = () => {
    setIsShow(true);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const confirmationHandler = () => toast.success("Tasdiqlandi");

  return admin?.login ? (
    <AdminLayout title={"Dashboard"}>
      <Fragment>
        <Box width="100%" paddingX={4} paddingY={5} overflow="auto">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
              padding: 0,
            }}
          >
            {/* <h1>Yoshlarni ro'yxatga olish</h1> */}
            <p className={`text-[24px] font-montserrat`}>Example</p>
            <div>
              <IconButton
                sx={{ color: "#CFB08B" }}
                onClick={() => setIsAdd(true)}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
              <IconButton
                sx={{ marginRight: "30px", color: "#CFB08B" }}
                // onClick={() => setFilterShowModal(true)}
              >
                <FilterAltIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
          <StyledTable sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ width: "3%" }}
                  sx={{ fontSize: "16px" }}
                >
                  #
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "12%" }}
                >
                  F. I. O
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "12%" }}
                >
                  F. I. O
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "12%" }}
                >
                  F. I. O
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "12%" }}
                >
                  F. I. O
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "12%" }}
                >
                  F. I. O
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", width: "10%" }}
                >
                  Harakatlar
                </TableCell>
              </TableRow>
            </TableHead>
            {isshow && <EditModal setIsShow={setIsShow} />}
            {isAdd && <AddModal setIsAdd={setIsAdd} />}
            {isRemove && <DeleteModal setIsRemove={setIsRemove} />}
            <TableBody>
              {subscribarList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => {
                  let a = index + 1;
                  return (
                    <TableRow key={a}>
                      <TableCell align="center">{a}</TableCell>
                      <TableCell align="center">
                        <b>УСМОНОВ</b>
                        <br />
                        <b> Мироншоҳ </b>
                        <br />
                        <b>Рўзимурод ўғли</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>УСМОНОВ</b>
                        <br />
                        <b> Мироншоҳ </b>
                        <br />
                        <b>Рўзимурод ўғли</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>УСМОНОВ</b>
                        <br />
                        <b> Мироншоҳ </b>
                        <br />
                        <b>Рўзимурод ўғли</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>УСМОНОВ</b>
                        <br />
                        <b> Мироншоҳ </b>
                        <br />
                        <b>Рўзимурод ўғли</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>УСМОНОВ</b>
                        <br />
                        <b> Мироншоҳ </b>
                        <br />
                        <b>Рўзимурод ўғли</b>
                      </TableCell>

                      <TableCell align="center">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "5px",
                          }}
                        >
                          <IconButton
                            className="eyeBtn"
                            sx={{
                              color: "#fff",
                              height: "40px",
                              width: "40px",
                              background: "red",
                              borderRadius: "6px",
                            }}
                            onClick={() => setIsRemove(true)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>

                          <IconButton
                            onClick={editHandler}
                            className="editBtn"
                            sx={{
                              color: "#fff",
                              height: "40px",
                              width: "40px",
                              background: "#facd02",
                              borderRadius: "6px",
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={subscribarList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>
      </Fragment>
    </AdminLayout>
  ) : (
    navigate("/admin-login")
  );
};

export default AdminYunalishlar;
