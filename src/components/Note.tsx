import { Box, ListItemButton, ListItemText, Typography, styled } from '@mui/material';

function Note() {

    const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: '10px',
        color: theme.palette.secondary.light,
    }))
    const text = {
        color: "red"
    };
    return (
        <StyledListItemButton>
            <ListItemText
                primaryTypographyProps={{ fontSize: '18px', fontWeight: '600' }}
                primary="Фолди"
                secondaryTypographyProps={{ color: 'secondary.light' }}
                secondary={
                <Box sx={{display: 'flex', gap: '10px'}}>
                  <Typography>17:35</Typography>
                    <Typography sx={{ color: 'secondary.main' }}>Нет дополнительного текста</Typography>
                  
                </Box>}
            />
            {/* <Box sx={{ display: "flex", gap: "10px" }}> */}
            {/* <ListItemText primary="Time" /> */}
            {/* <ListItemText primary="Note" sx={{ color: 'secondary.main' }} /> */}
            {/* </Box> */}
        </StyledListItemButton>
    );
}

export default Note;