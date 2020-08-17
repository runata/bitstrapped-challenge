const React = require('react')

const Bonus = (props) => {
    const { rates, rate, base } = props
    console.log(rates, rate, base)
    return (
        <h1>
            {
                rates.rates[rate] && rates.rates[base] 
                    ? `${rate} to ${base} is ${calculateRate(rates.rates, rate, base)}`
                    : 'Requested rate or base are not found' 
            }
        </h1>
  )
}

const calculateRate = (rates, rate, base) => (Number(rates[rate]) / Number(rates[base])).toFixed(4)

module.exports = Bonus