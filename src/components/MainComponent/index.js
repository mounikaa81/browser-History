import './index.css'

const MainComponent = props => {
  const {obj, func} = props
  const {domainUrl, timeAccessed, id, logoUrl, title} = obj

  const onCLickBtn = () => {
    func(id)
  }

  return (
    <li className="main">
      <p>{timeAccessed}</p>
      <div className="super">
        <div className="sub">
          <img className="poo" alt="domain logo" src={logoUrl} />
          <p className="para">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          type="button"
          className="bt"
          data-testid="delete"
          onClick={onCLickBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default MainComponent
