import './App.css'
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Beranda from './assets/pages/Beranda';
import DashboardOrangTua from './assets/pages/DashboardOrtu';
import DashboardAdmin from './assets/pages/DashboardAdmin';
import DashboardTenagaKesehatan from './assets/pages/DashboardTenagaKesehatan';
import ForumDiskusi from './assets/pages/ForumDiskusi';
import DashboardPosyandu from './assets/pages/DashboardPosyandu';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard-ortu" element={
          <ProtectedRoute requiredRole="Orang Tua">
            <DashboardOrangTua />
          </ProtectedRoute>
        } />
        <Route path="/dashboard-Admin" element={
          <ProtectedRoute requiredRole="Admin">
            <DashboardAdmin />
          </ProtectedRoute>
        } />
        <Route path="/dashboard-kesehatan" element={
          <ProtectedRoute requiredRole="Kesehatan">
            <DashboardTenagaKesehatan />
          </ProtectedRoute>
        } />
        <Route path="/dashboard-posyandu" element={
          <ProtectedRoute requiredRole="Posyandu">
            <DashboardPosyandu />
          </ProtectedRoute>
        } />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        {/* Route default, misal: */}
        <Route path="*" element={<Beranda />} />
      </Routes>
    </AuthProvider>
  );
}

export default App
