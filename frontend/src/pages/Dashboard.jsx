import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { logout } from '../store/authSlice';
function Dashboard() {
const { user } = useSelector((state) => state.auth);
const dispatch = useDispatch();
const navigate = useNavigate();
const handleLogout = () => {
dispatch(logout());
toast.success('Logged out successfully');
navigate('/login');
};
return (
<div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50">
<nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-2xl">🍕</span>
<h1 className="text-xl font-bold text-gray-800">Pizza Delivery</h1>
</div>
<div className="flex items-center gap-4">
<span className="text-gray-700">Hi, {user?.name}</span>
<button
         onClick={handleLogout}
         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
       >
Logout
</button>
</div>
</nav>
<main className="max-w-4xl mx-auto p-6">
    <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {user?.name}! 👋</h2>
      <p className="text-gray-600 mb-6">
        {user?.isVerified
          ? "Your account is verified. You're all set to order pizza!"
          : "📧 Please check your email and verify your account to start ordering."}
      </p>
      <div className="bg-gray-50 rounded-lg p-6 text-left">
        <h3 className="font-semibold text-gray-800 mb-3">Account Info</h3>
        <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
        <p className="text-gray-600"><strong>Role:</strong> {user?.role}</p>
        <p className="text-gray-600">
          <strong>Verified:</strong> {user?.isVerified ? '✅ Yes' : '❌ Not yet'}
        </p>
      </div>
      <p className="text-gray-400 mt-8 text-sm">🚧 Pizza builder coming on Day 5!</p>
    </div>
  </main>
</div>
);
}
export default Dashboard;