const React = require('react')

const Index = (props) => {
  return <div>
      <h1>
          Thank you for checking out my code challenge solution!
      </h1>
      <ul>
          <li>
            <a href={`${props.baseUrl}/all`}>All currency rates endpoint</a>
          </li>
          <li>
            <a href={`${props.baseUrl}/one/CAD`}>Specific currency rate endpoint</a>
          </li>
          <li>
            <a href={`${props.baseUrl}/CAD?base=USD`}>BONUS: any currency rate with any base</a>
          </li>
      </ul>
  </div>
}

module.exports = Index