import { Typography, Container, Box, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import UserContext from "../context/user-context";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "symbol", headerName: "Symbol", width: 130 },
  { field: "current_price", headerName: "Price/eur", width: 130 },
  { field: "market_cap", headerName: "Market cap", width: 130 },
  { field: "market_cap_rank", headerName: "Rank", width: 130 },
  { field: "high_24h", headerName: "High 24h", width: 130 },
];

const MyCoins = () => {
  const userContext = useContext(UserContext);

  return (
    <Grid sx={{ backgroundColor: "#a9c9cc", padding: "4%" }}>
      <Container sx={{ marginTop: { md: "5%", xs: "15%" } }}>
        <Box sx={{ textAlign: "center", marginBottom: "2%" }}>
          <Typography variant="h4">My Coins</Typography>
        </Box>

        <Box>
          <DataGrid
            sx={{ backgroundColor: "#78ccc5", border: "2px solid black" }}
            rows={userContext.rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            onRowSelectionModelChange={(ids) =>
              userContext.setSelectedRows(ids)
            }
          />
        </Box>
        <Button
          sx={{ backgroundColor: "#6ca1ba", margin: "2% 0%", color: "black" }}
          onClick={() => userContext.handleDelete()}
        >
          Delete coins
        </Button>
      </Container>
    </Grid>
  );
};

export default MyCoins;
