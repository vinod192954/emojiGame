// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isMistaked} = props

  return (
    <div className="navbar-container">
      <div className="emoji-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="img-custom"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="scores">
        {isMistaked ? (
          ''
        ) : (
          <>
            <p className="para">Score:{score}</p>
            <p className="para">Top Score:{topScore}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
