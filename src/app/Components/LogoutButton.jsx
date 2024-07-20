import { logout } from "../utils/authUtils";


const LogoutButton = () => {
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      console.log("Logout successful!");    
       await logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-pink-600 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
    >
      Logout
    </button>
  );
};
}
export default LogoutButton;