const React = require('react')

const AllRates = (props) => {
    return (
        <table>
            <tr>
                <th>Currency</th>
                <th>Exchange Rate</th>
            </tr>
            {
                Object.entries(props.rates.rates).map(([key, value]) => <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>)
            }
        </table>
  )
}

module.exports = AllRates