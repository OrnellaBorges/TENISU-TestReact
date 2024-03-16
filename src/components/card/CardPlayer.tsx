export default function CardPlayer() {
  return (
    <div className="playerCard">
      <div className="playerCard__container-image ">
        <img className="player-image" src="" alt="" />
      </div>
      <div className="playerCard__content-resume">
        <h2>Player Name</h2>
        <ul className="statList">
          <li className="statList-item">
            Rank
            <span className="statList-info">#2</span>
          </li>
          <li className="statList-item">
            Points
            <span className="statList-info">11 015</span>
          </li>
          <li className="statList-item">
            Country
            <span className="statList-info">Serbia</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
