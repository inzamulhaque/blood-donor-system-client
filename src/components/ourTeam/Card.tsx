import "./ourTeam.css";

const Card = () => {
  return (
    <>
      <div className="teamCard">
        <div className="cardImageWrapper">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="admin picture"
            className="cardImage"
          />
        </div>
        <h3 className="cardName">MD Inzamul Haque</h3>
        <p className="cardDesignation">Chief Administrator</p>
      </div>
    </>
  );
};

export default Card;
