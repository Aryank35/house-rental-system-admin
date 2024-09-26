import { useState } from 'react';

const Complaints = () => {
    const [data, setData] = useState([
        { id: 1, roomNumber: '201', name: 'Amit Sharma', phoneNumber: '9876543210', query: 'Loud music from neighboring room affecting sleep', dateOfQuery: '2023-03-15', queryStatus: 'Unresolved' },
        { id: 2, roomNumber: '202', name: 'Priya Nair', phoneNumber: '8765432109', query: 'Leaking faucet in bathroom not repaired despite request', dateOfQuery: '2023-03-18', queryStatus: 'Unresolved' },
        { id: 3, roomNumber: '203', name: 'Rahul Verma', phoneNumber: '7654321098', query: 'Issue with rent payment not reflecting in system', dateOfQuery: '2023-03-20', queryStatus: 'Resolved' },
        { id: 4, roomNumber: '204', name: 'Sneha Gupta', phoneNumber: '6543210987', query: 'Noise from construction work nearby causing disturbance', dateOfQuery: '2023-03-25', queryStatus: 'Unresolved' },
        { id: 5, roomNumber: '205', name: 'Vikram Singh', phoneNumber: '5432109876', query: 'Ceiling fan malfunctioning, not cooling properly', dateOfQuery: '2023-03-28', queryStatus: 'Unresolved' },
        { id: 6, roomNumber: '206', name: 'Ananya Bose', phoneNumber: '4321098765', query: 'Payment for electricity bill not updated on the portal', dateOfQuery: '2023-04-01', queryStatus: 'Resolved' },
        { id: 7, roomNumber: '207', name: 'Rajesh Patel', phoneNumber: '3210987654', query: 'Loud television in adjacent room disturbing at night', dateOfQuery: '2023-04-05', queryStatus: 'Unresolved' },
        { id: 8, roomNumber: '208', name: 'Kavita Reddy', phoneNumber: '2109876543', query: 'Water leakage from air conditioner causing dampness', dateOfQuery: '2023-04-08', queryStatus: 'Unresolved' },
        { id: 9, roomNumber: '209', name: 'Suresh Mehta', phoneNumber: '1098765432', query: 'Incorrect rent amount reflected in the latest invoice', dateOfQuery: '2023-04-12', queryStatus: 'Resolved' },
        { id: 10, roomNumber: '210', name: 'Neha Deshmukh', phoneNumber: '9988776655', query: 'Frequent power outages during night causing inconvenience', dateOfQuery: '2023-04-15', queryStatus: 'Unresolved' },
      ]);
      
  const handleStatusChange = (id, status) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, queryStatus: status };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Complaints and Queries</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Room Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Phone Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Query</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date of Query</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Query Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-700">{item.roomNumber}</td>
                <td className="px-6 py-4 text-gray-700">{item.name}</td>
                <td className="px-6 py-4 text-gray-700">{item.phoneNumber}</td>
                <td className="px-6 py-4 text-gray-700">{item.query}</td>
                <td className="px-6 py-4 text-gray-700">{item.dateOfQuery}</td>
                <td className="px-6 py-4">
                  <select
                    value={item.queryStatus}
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="Unresolved">Unresolved</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded-lg ${
                      item.queryStatus === 'Resolved'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {item.queryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaints;
