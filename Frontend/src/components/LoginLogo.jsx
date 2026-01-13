import { Link } from "react-router-dom";

const LoginLogo = ({ user }) => {
  const logo = user.user?.email[0].toUpperCase() || "l";
  return (
    <Link
      to="/user-space"
      className="bg-blue-200 border border-blue-300 rounded-full w-6 h-6 md:w-8 md:h-8 text-lg md:text-2xl font-bold flex items-center justify-center">
      {logo}
    </Link>
  );
};

export default LoginLogo;
