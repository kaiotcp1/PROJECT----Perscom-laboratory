import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// Component
import NavbarE from './components/Navbar/Navbar';
import ProtectedPage from "./components/ProtectedRoute/ProtectedPage";
import Loader from './components/Loader/Loader';

// Pages
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Squad from './pages/Squad/Squad';
import DashBoard from './pages/DashBoard/DashBoard';
import SquadList from './pages/SquadList/SquadList';
import Soldier from './pages/Soldier/Soldier';


function App() {
  const isLoading = useSelector(state => state.loading.isLoading); // Renomeie a variável para isLoading
  return (
    <>
      {isLoading && <Loader />}
      <div className="App">
        <BrowserRouter>
          <NavbarE />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/profile' element={<ProtectedPage> <Profile /> </ProtectedPage>} />
            <Route path='/squad' element={<ProtectedPage> <Squad /> </ProtectedPage>} />
            <Route path='/dashboard' element={<ProtectedPage> <DashBoard /> </ProtectedPage>} />
            <Route path='/squad-list/:id' element={<ProtectedPage> <SquadList /> </ProtectedPage>} />
            <Route path='/soldier/:id' element={<ProtectedPage> <Soldier /> </ProtectedPage>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
