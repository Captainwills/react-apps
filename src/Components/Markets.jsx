
export default function Markets(props){
    return(
      <ul>
      <div className={props.className}>
        <img src={props.image} alt="..."/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      </ul>
    );
  }