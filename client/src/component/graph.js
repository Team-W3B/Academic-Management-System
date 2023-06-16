import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1학년1학기',
    전공평점: 0.0,
    평균평점: 3.9,
    // amt: 2400,
  },
  {
    name: '1학년2학기',
    전공평점: 4.1,
    평균평점: 4.2,
    // amt: 2210,
  },
  {
    name: '2학년1학기',
    전공평점: 4.5,
    평균평점: 3.9,
    // amt: 2290,
  },
  {
    name: '2학년2학기',
    전공평점: 2.9,
    평균평점: 3.3,
    amt: 2000,
  },
  {
    name: '3학년1학기',
    전공평점: 4.5,
    평균평점: 3.7,
    amt: 2181,
  },
  {
    name: '3학년2학기',
    전공평점: 4.5,
    평균평점: 4.2,
    // amt: 2500,
  },
  {
    name: '4학년1학기',
    전공평점: 4.3,
    평균평점: 4.3,
    // amt: 2100,
  },
  {
    name: '4학년2학기',
    전공평점: 4.5,
    평균평점: 4.4,
    // amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="전공평점" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="평균평점" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
