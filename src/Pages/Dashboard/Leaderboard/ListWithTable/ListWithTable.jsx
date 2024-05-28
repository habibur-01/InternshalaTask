import { IoTrendingUpOutline } from "react-icons/io5";

const ListWithTable = () => {
  const num = [0, 1, 2, 3, 4];
  return (
    <div>
      <div className="overflow-x-auto py-10 bg-base-100 rounded-lg shadow-md">
        <table className="table ">
          {/* head */}
          <thead className=" text-lg font-bold">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win %(Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>38456</td>
              <td>319.56</td>
              <td>0.65</td>
              <td>500</td>
              <td>View</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>36584</td>
              <td>315.64</td>
              <td>0.64</td>
              <td>480</td>
              <td>View</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>34568</td>
              <td>305.00</td>
              <td>0.63</td>
              <td>450</td>
              <td>View</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>32584</td>
              <td>309.56</td>
              <td>0.62</td>
              <td>400</td>
              <td>View</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>35448</td>
              <td>290.56</td>
              <td>0.61</td>
              <td>300</td>
              <td>View</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <IoTrendingUpOutline color="green" className="inline-flex" />{" "}
                3.99
              </td>
              <td>38100</td>
              <td>219.56</td>
              <td>0.60</td>
              <td>--</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex my-10 text-right">
        <div className="mr-4">
          <button className="btn bg-red-300">Prev</button>
        </div>
        <div>
          {num?.map((number, index) => (
            <button key={index} className="btn px-4 mr-4">
              {number}
            </button>
          ))}
        </div>
        <div>
          <button className="btn bg-green-300">Next</button>
        </div>

      </div>
    </div>
  );
};

export default ListWithTable;
