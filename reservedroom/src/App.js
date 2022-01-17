import './App.css';
import { Route, Routes } from 'react-router-dom'
import AdminPage from './components/Admin/AdminPage'
import Calendar from './components/Forms/calendar';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <div>
        {(
          window.location.pathname === '/admin' ||
          window.location.pathname === '/admin/dashboard' ||
          window.location.pathname === '/admin/homepage'||
          window.location.pathname === '/booking'
        ) ?
          <AdminPage /> : <Header />
        }
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/booking' element={<Calendar />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
