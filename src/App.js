import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Children } from 'react';


function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {Children}
        {/* <Home />
        <NavBar /> */}
      </LocalizationProvider>

    </div>
  );
}

export default App;
