// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsList, onAmountDeduct} = props

  const {value} = denominationsList

  const onAmount = () => {
    onAmountDeduct()
  }

  return (
    <li className="list-container">
      <button type="button" className="button-styling" onClick={onAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
