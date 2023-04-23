import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import SideBar from './components/SideBar';
import WorkingArea from './components/WorkingArea';
import TopBar from './components/TopBar';

function App() {
  return (
    <Box>
      <TopBar />
      <Stack direction="row" justifyContent="space-between">
        <SideBar />
        <WorkingArea />
      </Stack>
    </Box>
  )
}

export default App
