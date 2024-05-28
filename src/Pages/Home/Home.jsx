import Navbar from "../../Components/Shared/Navbar/Navbar";
import SubNavbar from "../../Components/Shared/SubNavbar/SubNavbar";
import Leaderboard from "../Dashboard/Leaderboard/Leaderboard";
// import SubNavbar from "../../Components/Shared/SubNavbar/SubNavbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SubNavbar></SubNavbar>
            <div>
                <Leaderboard></Leaderboard>
            </div>
            
        </div>
    );
};

export default Home;