import { MdSearch } from "react-icons/md";
import ListWithTable from "./ListWithTable/ListWithTable";

const Leaderboard = () => {
  return (
    <div className="container mx-auto py-10">
      <div>
        <h3 className="text-xl text-gray-500 pb-4"> Back to home</h3>
        <h1 className="text-4xl font-medium">Leaderboard</h1>
      </div>
      <div className="flex  justify-between mt-16">
        <div className="w-[50%] flex justify-between items-center">
          <div className="w-[40%]">
            <h4 className="text-base font-medium">Basic Backtest</h4>
          </div>
          <div className="flex-1">
            <form className="relative">
              <div className=" ">
                <input
                  type="text"
                  placeholder="Search here"
                  className="bg-[#f4f4fd] py-2 px-4 w-full h-12 rounded-full "
                />
                <div className="absolute right-4 top-3">
                  <MdSearch size={25} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="text-lg font-semibold py-2 border-[1px] px-4 rounded-l-full bg-[#f4f4fd]">Slippage</p>
            <p className="text-lg font-semibold py-2 border-[1px] px-4 rounded-r-full bg-[#f4f4fd]">0</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ListWithTable></ListWithTable>
      </div>
    </div>
  );
};

export default Leaderboard;
