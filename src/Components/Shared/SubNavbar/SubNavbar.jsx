import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div>
      <div className="navbar w-[100%] ">
        <div className="navbar-start w-full container mx-auto">
          <ul className="menu menu-horizontal px-1 text-base ">
            <li>
              <NavLink to={"/leaderboard"}> <MdDashboard />LeaderBoard</NavLink>
            </li>
            <li>
              <details>
                <summary>Historical Trading</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to={"/data"}>Data</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/data"}>Data</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Historical Chart</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Scanners</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Alerts</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Basic Backtest</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Basic Backtest</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Advance Backtest</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> Pricing</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}> My Earnings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
