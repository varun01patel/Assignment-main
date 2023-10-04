import React from 'react';

const Table = () => {
  const analysisData = [
    { category: 'Correct Answers', count: 9 },
    { category: 'Wrong Answers', count: 1 },
    { category: 'Unanswered', count: 1 },
    { category: 'Skipped', count: 0 },
    { category: 'Out of time', count: 0 },
    { category: 'Time used', count: '2:30' },
  ];

  return (
    <div className="w-full max-w-screen-md mx-auto p-4 ">
      <table className="w-full border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border">Analysis</th>
            <th className="py-2 px-4 border"></th>
          </tr>
        </thead>
        <tbody>
          {analysisData.map((data, index) => (
            <tr key={index} className="bg-white">
              <td className="py-2 px-4 border">{data.category}</td>
              <td className="py-2 px-4 border">{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
