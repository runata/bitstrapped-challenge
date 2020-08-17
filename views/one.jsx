const React = require('react')

const OneRate = (props) => {
    return (
        <h1>
            {
                props.rates.rates[props.name] || 'Requested rate is not found'
            }
        </h1>
  )
}

module.exports = OneRate