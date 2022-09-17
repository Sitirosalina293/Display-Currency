import React from 'react'
import useApi from './Api'
import './index.css'

function Currency() {
  const { data } = useApi()
  return (
    <>
      <body>
        <table>
          <thead >
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">We Buy</th>
              <th scope="col">Exchange Rate</th>
              <th scope="col">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {data.rates && Object.keys(data.rates).map((key, index) => (
              <tr key={index}>
                <th scope="row">{key}</th>
                <td>{(parseFloat(data.rates[key]) + data.rates[key] / 100 * 5).toFixed(4)}</td>
                <td>{parseFloat(data.rates[key]).toFixed(4)}</td>
                <td>{(parseFloat(data.rates[key]) - data.rates[key] / 100 * 5).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </ >
  )
}

export default Currency
