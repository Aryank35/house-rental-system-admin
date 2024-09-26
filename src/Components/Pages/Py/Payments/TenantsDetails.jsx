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
  

  const [isEditing, setIsEditing] = useState(false);
  const [currentTenant, setCurrentTenant] = useState(null);
  const [tenantForm, setTenantForm] = useState({
    roomNumber: '',
    name: '',
    phoneNumber: '',
    address: '',
    rentAmount: 0,
    securityDeposit: 0,
    numberOfMembers: 0,
    dateOfAdmission: ''
  });

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
    setIsEditing(true);
    setCurrentTenant(tenant);
    setTenantForm(tenant); // Populate form with selected tenant data
  };

  const handleSave = () => {
    setIsEditing(false);
    const updatedTenants = tenants.map((tenant) => {
      if (tenant.id === currentTenant.id) {
        return { ...tenant, ...tenantForm };
      }
      return tenant;
    });
    setTenants(updatedTenants);
    resetForm();
  };

  const handleAdd = () => {
    const newTenantId = Math.max(...tenants.map((tenant) => tenant.id)) + 1;
    const newTenant = { id: newTenantId, ...tenantForm };
    const updatedTenants = [...tenants, newTenant];
    setTenants(updatedTenants);
    resetForm();
  };

  const handleDelete = (tenant) => {
    const updatedTenants = tenants.filter((t) => t.id !== tenant.id);
    setTenants(updatedTenants);
  };

  const handleNewTenantClick = () => {
    setIsEditing(false);
    resetForm(); // Reset the form for new tenant
  };

  const resetForm = () => {
    setTenantForm({
      roomNumber: '',
      name: '',
      phoneNumber: '',
      address: '',
      rentAmount: 0,
      securityDeposit: 0,
      numberOfMembers: 0,
      dateOfAdmission: ''
    });
    setCurrentTenant(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Tenant Management</h1>

      {/* Combined Form for Adding or Editing Tenant */}
      

      <table className="w-full table-auto border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Room Number</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Rent Amount</th>
            <th className="px-4 py-2 border">Security Deposit</th>
            <th className="px-4 py-2 border">Members</th>
            <th className="px-4 py-2 border">Admission Date</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id} className="bg-white hover:bg-gray-100 transition duration-200">
              <td className="px-4 py-2 border">{tenant.roomNumber}</td>
              <td className="px-4 py-2 border">{tenant.name}</td>
              <td className="px-4 py-2 border">{tenant.phoneNumber}</td>
              <td className="px-4 py-2 border">{tenant.address}</td>
              <td className="px-4 py-2 border">{tenant.rentAmount}</td>
              <td className="px-4 py-2 border">{tenant.securityDeposit}</td>
              <td className="px-4 py-2 border">{tenant.numberOfMembers}</td>
              <td className="px-4 py-2 border">{tenant.dateOfAdmission}</td>
              <td className="px-4 py-2 border">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
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
      <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-2xl font-bold mb-2 text-center">{isEditing ? 'Edit Tenant' : 'Add Tenant'}</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Inputs for tenant details */}
            {Object.entries(tenantForm).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type={key === 'dateOfAdmission' ? 'date' : key.includes('Amount') || key.includes('Members') ? 'number' : 'text'}
                  value={value}
                  onChange={(e) => {
                    const newValue = key.includes('Amount') || key.includes('Members') ? parseInt(e.target.value) : e.target.value;
                    setTenantForm({ ...tenantForm, [key]: newValue });
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            {isEditing ? (
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save Changes
              </button>
            ) : (
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAdd}
              >
                Add Tenant
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleNewTenantClick}
        >
          Add New Tenant
        </button>
      </div>
    </div>
  );
};

export default TenantDetails;
