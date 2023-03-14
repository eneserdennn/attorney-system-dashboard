// material-ui
import { styled } from '@mui/material/styles';

// project import
import ComponentSkeleton from "../components-overview/ComponentSkeleton";
import MainCard from "../../components/MainCard";
import {EditOutlined} from "@ant-design/icons";
import dayjs from "dayjs";



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients} from "../../redux/store/reducers/fetchClients";
import { selectAllClients, selectStatus, selectError } from "../../redux/store/reducers/clients";

import { DataGrid } from "@material-ui/data-grid";
import { Grid, Stack, Typography } from '@mui/material';

// styles
const IFrameWrapper = styled('iframe')(() => ({
    height: 'calc(100vh - 210px)',
    border: 'none'
}));
function Client() {
    const dispatch = useDispatch();
    const clients = useSelector(selectAllClients);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchClients());
            console.log(clients);
        }
        console.log(clients);
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const columns = [
        { field: "_id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "surname", headerName: "Surname" },
        { field: "email", headerName: "E Mail", flex: 1 },
        { field: "phone", headerName: "Phone", flex: 1 },

        { field: "city", headerName: "City", flex: 1 },
        { field: "username", headerName: "User Name", flex: 1 },
        {
            field: "createdAt",
            headerName: "Created Time",
            flex: 1,
            renderCell: (params) => dayjs(params.row.createdAt).format("DD/MM/YYYY "),
        },
        {
            field: "actions",
            headerName: "Edit/Delete",
            type: "actions",
            renderCell: (params) => (
                <EditOutlined
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }}
                    onClick={() => {

                    }}
                />
            ),
        },
    ];

    const rows = clients.map((item) => ({ ...item, id: item._id }));


    return (
        <MainCard border={false}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="h6">Client</Typography>
                <div style={{ height: 400}}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </Stack>
        </MainCard>

    );
}

export default Client;
