import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import bgImg from "../assets/bg.png";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import backBtn from '../assets/backBtn.png';

const FarmerMyStock = () => {  
  const [riceStock, setRiceStock] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRiceId, setSelectedRiceId] = useState<number | null>(null);

  const location = useLocation();
  
  // Ensure RiceStock exists or use an empty array if not
  const riceStockFromState = location.state?.RiceStock || [];

  const navigate = useNavigate();
  
  // State for adding new rice
  const [newRiceType, setNewRiceType] = useState("");
  const [newPricePerKg, setNewPricePerKg] = useState("");
  const [newQuantityKg, setNewQuantityKg] = useState("");

  const { user } = useContext(UserContext) || {};

  // Function to fetch stock from the backend
  async function getStock() {
    if (!user || !user.id) {
      console.error("User not found.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/stock/${user.id}`
      );

      const stockData = response.data.map((stock) => {
        const { id, pricePerKg, quantityKg, riceType } = stock;
        return {
          id,
          pricePerKg,
          quantityKg,
          riceType,
        };
      });

      setRiceStock(stockData);
    } catch (error) {
      console.error("Error fetching stock:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Check if stock was passed via state, otherwise fetch it
    if (riceStockFromState.length > 0) {
      setRiceStock(riceStockFromState);
      setLoading(false);
    } else {
      getStock();
    }
  }, [user]);

  const handleUpdateClick = (id: number) => {
    setSelectedRiceId(id);
  };

  // Function to handle input changes for existing stock
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    stockId: number
  ) => {
    const { name, value } = e.target;

    setRiceStock((prevRiceStock) =>
      prevRiceStock.map((stock) =>
        stock.id === stockId ? { ...stock, [name]: value } : stock
      )
    );
  };

  // Function to handle input changes for new rice type
  const handleNewRiceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "riceType") setNewRiceType(value);
    else if (name === "pricePerKg") setNewPricePerKg(value);
    else if (name === "quantityKg") setNewQuantityKg(value);
  };

  // Function to add new rice type
  const addRice = async () => {
    try {
      const riceData = {
        riceType: newRiceType,
        pricePerKg: newPricePerKg,
        quantityKg: newQuantityKg,
      };

      const response = await axios.post(
        `http://localhost:8080/stock/add-ricestock/user/${user?.username}`,
        riceData
      );

      if (response.status === 200) {
        alert("Rice added successfully!");
        getStock(); // Refresh the stock after adding
        // Clear the input fields
        setNewRiceType("");
        setNewPricePerKg("");
        setNewQuantityKg("");
      }
    } catch (err) {
      console.error("Error adding rice:", err);
      alert("Failed to add rice");
    }
  };

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // If there's a history, go back
    } else {
      navigate("/"); // Otherwise, go to a default route
    }
  };

  return (
    <div
      className="flex flex-col w-screen h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <NavBar topic="My Stock" />

      <button onClick={goBack} className="mt-2 ml-[4%]">
        <img
          src={backBtn}
          alt="Back Button"
          className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
        />
      </button>

      <div className="flex flex-col ml-[20%] mr-[5%] mt-14 gap-1">
        <h1 className="text-[30px] font-semibold">Add Rice Type</h1>
        <div className="grid grid-cols-3 mx-[10%] gap-2 mt-5">
          <div>
            <p className="text-[20px]">Rice Type</p>
            <input
              className="h-10 mt-2 bg-white bg-opacity-50 border border-black rounded-lg"
              type="text"
              name="riceType"
              value={newRiceType}
              onChange={handleNewRiceInputChange}
            />
          </div>
          <div>
            <p className="text-[20px]">Price (per kg)</p>
            <input
              className="h-10 mt-2 bg-white bg-opacity-50 border border-black rounded-lg"
              type="text"
              name="pricePerKg"
              value={newPricePerKg}
              onChange={handleNewRiceInputChange}
            />
          </div>
          <div>
            <p className="text-[20px]">Quantity (kg)</p>
            <input
              className="h-10 mt-2 bg-white bg-opacity-50 border border-black rounded-lg"
              type="text"
              name="quantityKg"
              value={newQuantityKg}
              onChange={handleNewRiceInputChange}
            />
            <button
              className="ml-[10%] bg-slate-900 px-5 py-1 rounded-lg text-[20px] text-white"
              onClick={addRice}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="items-center justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : riceStock.length > 0 ? (
            <table className="rounded-lg shadow-md mx-auto mt-[5%] text-[20px] w-[70%]">
              <thead>
                <tr className="bg-slate-700 bg-opacity-60">
                  <th className="px-6 py-4 text-left border border-gray-300"></th>
                  <th className="px-6 py-4 text-left border border-gray-300">
                    Rice Type
                  </th>
                  <th className="px-6 py-4 text-left border border-gray-300">
                    Price (per kg)
                  </th>
                  <th className="px-6 py-4 text-left border border-gray-300">
                    Quantity (kg)
                  </th>
                  <th className="px-6 py-4 text-left border border-gray-300"></th>
                </tr>
              </thead>
              <tbody>
                {riceStock.map((stock, index) => (
                  <tr
                    key={stock.id}
                    className="transition-colors duration-300 bg-white border-black bg-opacity-40"
                  >
                    <td className="px-6 py-4 border border-gray-300">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                      {stock.riceType}
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                      {selectedRiceId === stock.id ? (
                        <input
                          type="text"
                          name="pricePerKg"
                          value={stock.pricePerKg}
                          onChange={(e) => handleInputChange(e, stock.id)}
                          className="p-1 border border-gray-300 rounded"
                        />
                      ) : (
                        stock.pricePerKg
                      )}
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                      {selectedRiceId === stock.id ? (
                        <input
                          type="text"
                          name="quantityKg"
                          value={stock.quantityKg}
                          onChange={(e) => handleInputChange(e, stock.id)}
                          className="p-1 border border-gray-300 rounded"
                        />
                      ) : (
                        stock.quantityKg
                      )}
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                      {selectedRiceId === stock.id ? (
                        <button
                          onClick={() => handleUpdateClick(stock.id)}
                          className="text-green-600"
                        >
                          Save
                        </button>
                      ) : (
                        <button onClick={() => handleUpdateClick(stock.id)}>
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No rice stock available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerMyStock;
