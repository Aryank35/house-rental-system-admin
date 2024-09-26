import { useState, useEffect } from 'react';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedNotices = localStorage.getItem('notices');
    if (storedNotices) {
      setNotices(JSON.parse(storedNotices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notices', JSON.stringify(notices));
  }, [notices]);

  const handleAddNotice = () => {
    if (editMode) {
      const updatedNotices = notices.map((notice, index) => {
        if (index === editIndex) {
          return { title, date, description };
        }
        return notice;
      });
      setNotices(updatedNotices);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setNotices([...notices, { title, date, description }]);
    }
    setTitle('');
    setDate('');
    setDescription('');
  };

  const handleEditNotice = (index) => {
    const notice = notices[index];
    setTitle(notice.title);
    setDate(notice.date);
    setDescription(notice.description);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = notices.filter((notice, i) => i !== index);
    setNotices(updatedNotices);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Notice Board</h1>
      <form className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="button"
          onClick={handleAddNotice}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editMode ? 'Update Notice' : 'Add Notice'}
        </button>
      </form>
      <ul>
        {notices.map((notice, index) => (
          <li key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{notice.title}</h2>
            <p className="text-sm font-medium mb-2">{notice.date}</p>
            <p className="text-gray-600">{notice.description}</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => handleEditNotice(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteNotice(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;