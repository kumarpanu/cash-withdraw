// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onAmountDeduct = value => {
    console.log(value)
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="inside-container">
          <div className="logo-name">
            <p className="name">S</p>
            <h1 className="full-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <h1 className="balance">Your Balance</h1>
            <h1 className="balance-amount">{amount}</h1>
          </div>

          <h1 className="withdraw">Withdraw</h1>
          <h1 className="rupees-text">CHOOSE SUM (IN RUPEES)</h1>
          <ul className="unordered-list">
            {denominationsList.map(eachList => (
              <DenominationItem
                denominationsList={eachList}
                key={eachList.id}
                onAmountDeduct={this.onAmountDeduct}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
