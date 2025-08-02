  // Dummy authentication data for different user roles
export const users = [
  // Admin users
  {
    id: 1,
    email: 'admin@tumbuhkita.id',
    password: 'admin123',
    nama: 'Administrator',
    role: 'Admin',
    telepon: '081234567890'
  },
  
  // Orang Tua users
  {
    id: 2,
    email: 'orangtua1@email.com',
    password: 'orangtua123',
    nama: 'Siti Rahmah',
    role: 'Orang Tua',
    telepon: '081234567891',
    jumlahAnak: '2'
  },
  {
    id: 3,
    email: 'orangtua2@email.com',
    password: 'orangtua123',
    nama: 'Budi Santoso',
    role: 'Orang Tua',
    telepon: '081234567892',
    jumlahAnak: '1'
  },
  
  // Posyandu users
  {
    id: 4,
    email: 'posyandu1@email.com',
    password: 'posyandu123',
    nama: 'Dewi Sartika',
    role: 'Posyandu',
    telepon: '081234567893'
  },
  {
    id: 5,
    email: 'posyandu2@email.com',
    password: 'posyandu123',
    nama: 'Rina Wijaya',
    role: 'Posyandu',
    telepon: '081234567894'
  },
  
  // Tenaga Kesehatan users
  {
    id: 6,
    email: 'kesehatan1@email.com',
    password: 'kesehatan123',
    nama: 'dr. Anita Wijaya',
    role: 'Kesehatan',
    telepon: '081234567895'
  },
  {
    id: 7,
    email: 'kesehatan2@email.com',
    password: 'kesehatan123',
    nama: 'dr. Budi Santoso',
    role: 'Kesehatan',
    telepon: '081234567896'
  }
];

// Function to authenticate user
export const authenticateUser = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

// Function to get user by ID
export const getUserById = (id) => {
  return users.find(u => u.id === id) || null;
};

// Function to get users by role
export const getUsersByRole = (role) => {
  return users.filter(u => u.role === role);
}; 