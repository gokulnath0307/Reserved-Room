import './App.css';
import AdminPage from './components/Admin/AdminPage'
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <div>
        {(
          window.location.pathname === '/admin' ||
          window.location.pathname === '/admin/dashboard' ||
          window.location.pathname === '/admin/userdetails'
         // window.location.pathname === '/booking'
        ) ?
          <AdminPage /> : <Header />
        }
        <Routes>
          <Route path='/' element={<Table />} />

          
          
        </Routes>
      </div>

    </div>
  );
}

export default App;
