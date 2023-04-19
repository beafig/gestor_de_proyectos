import Card from "./Card";
import '../../styles/layout/CardList.scss'

function CardList({ cardsToShowP }) {
  const card = cardsToShowP.map((eachCard, index) => {
    return (
      <li className="eachCard" key={index}>
        <Card data={eachCard} avatar={eachCard.image} />
      </li>
    );
  });
  return <ul className="ulCard">{card}</ul>;
}

export default CardList;
