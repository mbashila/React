import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold">SmartMedCare</h1>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/Sign-In">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
