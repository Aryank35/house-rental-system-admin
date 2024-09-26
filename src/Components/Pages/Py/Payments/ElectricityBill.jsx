import { useState, useEffect } from 'react';

const TenantDetails = () => {
  const [tenants, setTenants] = useState([
    {
      id: 1,
      roomNumber: '101',
      name: 'Rahul Kumar',
      phoneNumber: '1234567890',
      address: '123 Main St',
      rentAmount: 1000,
      securityDeposit: 500,
      numberOfMembers: 2,
      dateOfAdmission: '2022-01-01',
      billMonth: 'September 2024',
      totalBill: 1000,
      dueDate: '2024-09-30',
      paymentStatus: 'Paid'
    },
    {
      id: 2,
      roomNumber: '102',
      name: 'Priya Singh',
      phoneNumber: '9876543210',
      address: '456 Elm St',
      rentAmount: 1200,
      securityDeposit: 600,
      numberOfMembers: 3,
      dateOfAdmission: '2022-02-01',
      billMonth: 'September 2024',
      totalBill: 1200,
      dueDate: '2024-09-30',
      paymentStatus: 'Pending'
    },
    {
      id: 3,
      roomNumber: '103',
      name: 'Rohan Patel',
      phoneNumber: '5551234567',
      address: '789 Oak St',
      rentAmount: 1500,
      securityDeposit: 750,
      numberOfMembers: 4,
      dateOfAdmission: '2022-03-01',
      billMonth: 'September 2024',
      totalBill: 1500,
      dueDate: '2024-09-30',
      paymentStatus: 'Paid'
    },
    {
      id: 4,
      roomNumber: '104',
      name: 'Aisha Khan',
      phoneNumber: '9012345678',
      address: '321 Maple St',
      rentAmount: 1800,
      securityDeposit: 900,
      numberOfMembers: 5,
      dateOfAdmission: '2022-04-01',
      billMonth: 'September 2024',
      totalBill: 1800,
      dueDate: '2024-09-30',
      paymentStatus: 'Pending'
    },
    {
      id: 5,
      roomNumber: '105',
      name: 'Suresh Jain',
      phoneNumber: '1112223333',
      address: '456 Pine St',
      rentAmount: 2000,
      securityDeposit: 1000,
      numberOfMembers: 6,
      dateOfAdmission: '2022-05-01',
      billMonth: 'September 2024',
      totalBill: 2000,
      dueDate: '2024-09-30',
      paymentStatus: 'Paid'
    }
  ]);
  

  const [editMode, setEditMode] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState(null);

  useEffect(() => {
    const storedTenants = localStorage.getItem('tenants');
    if (storedTenants) {
      setTenants(JSON.parse(storedTenants));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tenants', JSON.stringify(tenants));
  }, [tenants]);

  const handleEdit = (tenant) => {
    setEditMode(true);
    setSelectedTenant(tenant);
  };

  const handleSave = () => {
    const updatedTenants = tenants.map((tenant) =>
      tenant.id === selectedTenant.id ? selectedTenant : tenant
    );
    setTenants(updatedTenants);
    setEditMode(false);
    setSelectedTenant(null);
  };

  const handleDelete = (tenant) => {
    const updatedTenants = tenants.filter((t) => t.id !== tenant.id);
    setTenants(updatedTenants);
  };

  return (
    <div className="max-w-7xl mx-auto py-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Tenant Electricity Billing Details</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Room Number</th>
            <th className="px-4 py-2">Tenant Name</th>
            <th className="px-4 py-2">Bill Month</th>
            <th className="px-4 py-2">Total Amount</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{tenant.roomNumber}</td>
              <td className="px-4 py-2 border-b">{tenant.name}</td>
              <td className="px-4 py-2 border-b">{tenant.billMonth}</td>
              <td className="px-4 py-2 border-b">{tenant.totalBill}</td>
              <td className="px-4 py-2 border-b">{tenant.phoneNumber}</td>
              <td className="px-4 py-2 border-b">{tenant.dueDate}</td>
              <td className="px-4 py-2 border-b">{tenant.paymentStatus}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
                  onClick={() => handleEdit(tenant)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDelete(tenant)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode && selectedTenant && (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Edit Tenant Details</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Room Number</label>
                <input
                  type="text"
                  value={selectedTenant.roomNumber}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, roomNumber: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tenant Name</label>
                <input
                  type="text"
                  value={selectedTenant.name}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, name: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bill Month</label>
                <input
                  type="text"
                  value={selectedTenant.billMonth}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, billMonth: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                <input
                  type="number"
                  value={selectedTenant.totalBill}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, totalBill: parseInt(e.target.value) })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={selectedTenant.phoneNumber}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, phoneNumber: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  value={selectedTenant.dueDate}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, dueDate: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Status</label>
                <select
                  value={selectedTenant.paymentStatus}
                  onChange={(e) =>
                    setSelectedTenant({ ...selectedTenant, paymentStatus: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TenantDetails;
