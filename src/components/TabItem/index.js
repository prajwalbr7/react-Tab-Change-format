import './index.css'

const TabItem = props => {
  const {tabDetails, onClickChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const Change = () => {
    onClickChange(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={Change}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
