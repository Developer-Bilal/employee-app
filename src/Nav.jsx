import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link" to="/">
            Home
          </link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/GroupedTeamMembers">
            Teams
          </link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
