import React, { useState } from 'react';

const PageNumberSelector = () => {
  const [selectedPageNumber, setSelectedPageNumber] = useState('');

  const handlePageNumberChange = (e) => {
    setSelectedPageNumber(e.target.value);
  };

  return (
    <div className="flex px-2">
      <label htmlFor="pageNumberSelector" className="text-sm  text-gray-700 flex items-center">
        Rows per page:
      </label>
      <select
        id="pageNumberSelector"
        name="pageNumber"
        className=" p-3 text-gray-500"
        onChange={handlePageNumberChange}
        value={selectedPageNumber}
      >
       
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        {/* Add more options as needed */}
      </select>

      {selectedPageNumber && (
        <p className="flex items-center px-2 text-gray-500">
          {selectedPageNumber}-{selectedPageNumber} of {selectedPageNumber}
        </p>
      )}
    </div>
  );
};

export default PageNumberSelector;
