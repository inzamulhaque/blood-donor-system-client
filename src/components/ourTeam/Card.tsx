import "./ourTeam.css";

interface ICardProps {
  imgUrl: string;
  name: string;
  designation: string;
  socialLink: string;
}

const Card = ({ imgUrl, name, designation, socialLink }: ICardProps) => {
  return (
    <>
      <div className="teamCard">
        <div className="cardImageWrapper">
          <img src={imgUrl} alt="admin picture" className="cardImage" />
        </div>
        <a href={socialLink} target="_blank">
          <h3 className="cardName">{name}</h3>
        </a>
        <p className="cardDesignation">{designation}</p>
      </div>
    </>
  );
};

export default Card;
