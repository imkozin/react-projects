import Card from './Card';

const CardList = (props) => {
    const {robots} = props;
    return (
        robots.map((user, i) => {
            return <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
        }));
}

export default CardList;