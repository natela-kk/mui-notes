import { Box, styled } from '@mui/material';

function WorkingArea() {
    const StyledBox = styled(Box)(({ theme }) => ({
        flex: 2,
        fontSize: '20px',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
    }))

    return ( 
        <StyledBox p={2}>WorkingArea</StyledBox>
        // <Box bgcolor="primary.dark" flex={2} p={2}>WorkingArea</Box>
     );
}

export default WorkingArea;