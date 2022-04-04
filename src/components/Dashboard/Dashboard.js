import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis, AreaChart, Area, Scatter, Bar, ComposedChart } from 'recharts';

const Dashboard = () => {
     const data = [
          {
               "month": "Mar",
               "investment": 100000,
               "sell": 241,
               "revenue": 10401
          },
          {
               "month": "Apr",
               "investment": 200000,
               "sell": 423,
               "revenue": 24500
          },
          {
               "month": "May",
               "investment": 500000,
               "sell": 726,
               "revenue": 67010
          },
          {
               "month": "Jun",
               "investment": 500000,
               "sell": 529,
               "revenue": 40405
          },
          {
               "month": "Jul",
               "investment": 600000,
               "sell": 601,
               "revenue": 50900
          },
          {
               "month": "Aug",
               "investment": 700000,
               "sell": 670,
               "revenue": 61000
          }
     ]
     return (
          <div>
               <div className='grid grid-cols-2 px-28 my-10'>
                    <div>
                         <h1 className='font-serif text-green-600 text-2xl mb-4'>Investment VS Revenue</h1>
                         <LineChart width={450} height={400} data={data}>
                              <Line dataKey={'investment'}></Line>
                              <Line dataKey={'sell'}></Line>
                              <Line dataKey={'revenue'}></Line>
                              <Legend />
                              <Tooltip />
                              <CartesianGrid strokeDasharray="1" />
                              <YAxis />
                              <XAxis dataKey={'month'} />
                         </LineChart >

                    </div>
                    <div>
                         <h1 className='font-serif text-green-600 text-2xl mb-4'>Investment VS Revenue</h1>
                         <PieChart width={500} height={400}>
                              <Pie data={data} dataKey="investment" outerRadius={50} fill="#8884d8" label />
                              <Pie data={data} innerRadius={50} outerRadius={80} fill="#82ca9d" label />
                              <Pie data={data} innerRadius={50} outerRadius={80} fill="purple" label />
                              <Tooltip />
                         </PieChart>

                    </div>

                    <div>
                         <h1 className='font-serif text-green-600 text-2xl my-4'>Investment VS Revenue</h1>
                         <AreaChart width={450} height={400} data={data}>
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Area dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                              {/* <Bar dataKey="investment" barSize={20} fill="#413ea0" /> */}
                              <Area dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                              <Area dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                              <Tooltip />
                         </AreaChart>
                    </div>
                    <div>
                         <h1 className='font-serif text-green-600 text-2xl my-4'>Investment VS Revenue</h1>
                         <ComposedChart width={450} height={400} data={data}>
                              <CartesianGrid />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Area type="monotone" dataKey="month" fill="#8884d8" stroke="#8884d8" />
                              <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                              <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                              <Scatter type="monotone" dataKey="revenue" fill="red" />
                         </ComposedChart>
                    </div>
               </div>
          </div>

     );
};

export default Dashboard;