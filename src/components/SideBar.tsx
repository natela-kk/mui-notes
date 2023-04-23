import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography, styled } from '@mui/material';
import Note from './Note';

function SideBar() {
    const StyledBox = styled(Box)(({ theme }) => ({
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.light,
        // display: { xs: "none", sm: "block" },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    }))

    const StyledDivider = styled(Divider)(({ theme }) => ({
        marginLeft: '20px',
        marginRight: '20px',
        backgroundColor: theme.palette.secondary.dark,
    }))

    return (
        // <Box bgcolor="lightgreen" flex={1} p={2}>
        <StyledBox flex={1} p={2}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600', mb: '10px' }}>Сегодня</Typography>
            <StyledDivider sx={{ mr: '-16px', ml: '-16px', borderBottomWidth: 2 }}></StyledDivider>
            <List
                sx={{
                    '& .MuiListItemButton-root': {
                        transition: 'all 0.5s',
                    },
                    '&& .Mui-selected, && .Mui-selected:hover': {
                        bgcolor: 'secondary.dark',
                    },
                    '& .MuiListItemButton-root:hover': {
                        bgcolor: 'secondary.dark',
                        borderRadius: '10px',
                    },
                }}>
                <ListItem>
                    <Note />
                </ListItem>
                <StyledDivider variant="middle" />
                <ListItem>
                    <Note />
                </ListItem>
                <StyledDivider variant="middle" />
                <ListItem>
                    <Note />
                </ListItem>
                <StyledDivider variant="middle" />
                <ListItem>
                    <Note />
                </ListItem>
                <StyledDivider variant="middle" />
                <ListItem>
                    <Note />
                </ListItem>
            </List>
        </StyledBox >
        // {/* </Box> */}
    );
}

export default SideBar;