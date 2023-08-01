const Card = (props) => {

    
    return (
        <div key={props.id} className="bg-white dib br1 pa3 grow tc shadow-5 bw2 ma3">
            <img className="db w-100 w5-ns h5-ns br2 br--top" src={props.image} alt={props.name}></img>
            <div>
                <h4>Name: {props.name}</h4>
                <h4>Occupation: {props.job}</h4>
            </div>
        </div>
    )
}

export default Card;