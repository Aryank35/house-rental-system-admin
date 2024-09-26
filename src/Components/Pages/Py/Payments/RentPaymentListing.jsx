import { useState } from "react";

const RentPaymentListing = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Aryan Kumar Mohapatra",
      phoneNumber: "9876543210",
      title: "January",
      paymentStatus: "Paid",
      fine: 0,
      paymentAmount: 5000,
      dueDate: "2024-01-01",
      dateOfPayment: "2024-01-01",
      roomNumber: "101",
      lastPaymentPending: 0,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      phoneNumber: "9765432109",
      title: "February",
      paymentStatus: "Pending",
      fine: 100,
      paymentAmount: 4500,
      dueDate: "2024-01-15",
      dateOfPayment: "",
      roomNumber: "102",
      lastPaymentPending: 1,
    },
    {
      id: 3,
      name: "Priya Das",
      phoneNumber: "9123456789",
      title: "February",
      paymentStatus: "Paid",
      fine: 0,
      paymentAmount: 5500,
      dueDate: "2024-02-01",
      dateOfPayment: "2024-02-01",
      roomNumber: "103",
      lastPaymentPending: 0,
    },
    {
      id: 4,
      name: "Sanjay Rao",
      phoneNumber: "9112345678",
      title: "February",
      paymentStatus: "Pending",
      fine: 200,
      paymentAmount: 4800,
      dueDate: "2024-03-01",
      dateOfPayment: "",
      roomNumber: "104",
      lastPaymentPending: 2,
    },
    {
      id: 5,
      name: "Anjali Patil",
      phoneNumber: "9001234567",
      title: "February",
      paymentStatus: "Paid",
      fine: 0,
      paymentAmount: 5000,
      dueDate: "2024-04-01",
      dateOfPayment: "2024-04-01",
      roomNumber: "105",
      lastPaymentPending: 0,
    },
    {
      id: 6,
      name: "Ravi Singh",
      phoneNumber: "9098765432",
      title: "January",
      paymentStatus: "Pending",
      fine: 300,
      paymentAmount: 5300,
      dueDate: "2024-05-01",
      dateOfPayment: "",
      roomNumber: "106",
      lastPaymentPending: 3,
    },
    {
      id: 7,
      name: "Neha Kapoor",
      phoneNumber: "9887654321",
      title: "February",
      paymentStatus: "Paid",
      fine: 0,
      paymentAmount: 4900,
      dueDate: "2024-06-01",
      dateOfPayment: "2024-06-01",
      roomNumber: "107",
      lastPaymentPending: 0,
    },
    {
      id: 8,
      name: "Manish Agarwal",
      phoneNumber: "9198765432",
      title: "January",
      paymentStatus: "Pending",
      fine: 400,
      paymentAmount: 5200,
      dueDate: "2024-07-01",
      dateOfPayment: "",
      roomNumber: "108",
      lastPaymentPending: 4,
    },
    {
      id: 9,
      name: "Sneha Mehta",
      phoneNumber: "9012345678",
      title: "February",
      paymentStatus: "Paid",
      fine: 0,
      paymentAmount: 5400,
      dueDate: "2024-08-01",
      dateOfPayment: "2024-08-01",
      roomNumber: "109",
      lastPaymentPending: 0,
    },
    {
      id: 10,
      name: "Ajay Kumar",
      phoneNumber: "9023456789",
      title: "January",
      paymentStatus: "Pending",
      fine: 500,
      paymentAmount: 5100,
      dueDate: "2024-09-01",
      dateOfPayment: "",
      roomNumber: "110",
      lastPaymentPending: 5,
    },
  ]);

  const [edit, setEdit] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [fine, setFine] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [dateOfPayment, setDateOfPayment] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [lastPaymentPending, setLastPaymentPending] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setEdit(id);
    setName(item.name);
    setPhoneNumber(item.phoneNumber);
    setTitle(item.title);
    setPaymentStatus(item.paymentStatus);
    setFine(item.fine);
    setDueDate(item.dueDate);
    setDateOfPayment(item.dateOfPayment);
    setRoomNumber(item.roomNumber);
    setLastPaymentPending(item.lastPaymentPending);
    setPaymentAmount(item.paymentAmount);
  };

  const handleSave = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          id,
          name,
          phoneNumber,
          title,
          paymentStatus,
          fine,
          paymentAmount,
          dueDate,
          dateOfPayment,
          roomNumber,
          lastPaymentPending,
        };
      }
      return item;
    });
    setData(updatedData);
    setEdit(null);
  };

  return (
    <div className="md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Rent Payment Listing</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Room Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Payment Pending</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Fine</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Payment Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date of Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Payment Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white hover:bg-indigo-100 transition-all">
                <td className="px-6 py-4">{edit === item.id ? <input type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} className="border-2 p-1 rounded-md" /> : item.roomNumber}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 p-1 rounded-md" /> : item.name}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border-2 p-1 rounded-md" /> : item.phoneNumber}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="number" value={lastPaymentPending} onChange={(e) => setLastPaymentPending(e.target.valueAsNumber)} className="border-2 p-1 rounded-md" /> : item.lastPaymentPending}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="number" value={fine} onChange={(e) => setFine(e.target.valueAsNumber)} className="border-2 p-1 rounded-md" /> : item.fine}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.valueAsNumber)} className="border-2 p-1 rounded-md" /> : item.paymentAmount}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 p-1 rounded-md" /> : item.title}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border-2 p-1 rounded-md" /> : item.dueDate}</td>
                <td className="px-6 py-4">{edit === item.id ? <input type="date" value={dateOfPayment} onChange={(e) => setDateOfPayment(e.target.value)} className="border-2 p-1 rounded-md" /> : item.dateOfPayment}</td>
                <td className="px-6 py-4">
                  {edit === item.id ? (
                    <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} className="border-2 p-1 rounded-md">
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                    </select>
                  ) : (
                    <span className={item.paymentStatus === "Paid" ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                      {item.paymentStatus}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {edit === item.id ? (
                    <button onClick={() => handleSave(item.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(item.id)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentPaymentListing;
