import { AppBar, Box, Button, IconButton, InputBase, styled, Toolbar } from '@mui/material';
import { DeleteOutline, FormatListBulleted, GridView, NoteAltOutlined, Search } from '@mui/icons-material';
function TopBar() {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
    })

    const SearchBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignSelf: 'center',
        padding: "0 10px",
        width: "30%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "transparent",
        border: '1px solid red',
        borderColor: theme.palette.secondary.dark,
    }))

    const LeftBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        padding: '0 15px',
        // [theme.breakpoints.up("sm")]: {
        //     display: "flex",
        // },
    }))

    const RightBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        flex: 2,
        display: "flex",
        justifyContent: "space-between",
        padding: '0 15px',
    }))

    const IconButtonCentered = styled(IconButton)(({ }) => ({
        alignSelf: 'center',
    }))

    return (
        <AppBar position="sticky">
            <StyledToolbar disableGutters={true}>
                <LeftBox>
                    <Box sx={{ display: "flex" }}>
                        <IconButtonCentered>
                            <FormatListBulleted color='secondary' />
                        </IconButtonCentered>
                        <IconButtonCentered>
                            <GridView color="secondary" />
                        </IconButtonCentered>
                    </Box>
                    <IconButtonCentered>
                        <DeleteOutline color="secondary" />
                    </IconButtonCentered>
                </LeftBox>
                <RightBox >
                    <Box sx={{ display: "flex", gap: "40px" }}>
                        <IconButtonCentered>
                            <NoteAltOutlined color="secondary" />
                        </IconButtonCentered>
                        <IconButtonCentered size="small" color="secondary">
                            Aa
                        </IconButtonCentered>
                    </Box>
                    <SearchBox>
                        <InputBase inputProps={{ sx: { color: "secondary.main" } }} color="secondary" placeholder="Поиск" startAdornment={<Search color="secondary" sx={{ mr: "5px" }} />} />
                    </SearchBox>
                </RightBox>
            </StyledToolbar>
        </AppBar>
    );
}

export default TopBar;