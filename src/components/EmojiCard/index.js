// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {Emoji, updateScores, key} = props
  const {id, emojiName, emojiUrl} = Emoji

  const onClickChange = () => {
    updateScores(id)
  }

  return (
    <button className="emoji-object" type="button">
      <li onClick={onClickChange}>
        <img src={emojiUrl} alt={emojiName} />
      </li>
    </button>
  )
}

export default EmojiCard
