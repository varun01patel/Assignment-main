import React from 'react';
import PieChart from './PieChart';
// import { Chart } from "react-google-charts";
import Table from './TAble';


const RightBar = () => {
  return (
    <div className='w-[1600px] border border-l-2 border-black'>
      <div className='flex justify-center bg-[#41a3e5] text-[24px] p-3'>
        <h1>Results</h1>
      </div>
      <div>
        <h1 className='font-bold m-4'>Results</h1>
        <h2 className='font-semibold m-4'>Score: 74%</h2>
        <div className='-mt-5 '>
        

<PieChart />
          
         
        </div>
    <Table/>
      </div>
    </div>
  );
};


export default RightBar;
