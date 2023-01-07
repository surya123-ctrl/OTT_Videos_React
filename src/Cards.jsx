import Images from "./Images";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images img_src={props.img_src} />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.series_name}</h3>
            <a href={props.series_link} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
