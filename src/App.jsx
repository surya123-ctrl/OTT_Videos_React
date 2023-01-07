import React from "react";
import Card from "./Cards";
import data from "./SourceData";

const nCard = (x) => (
  <Card
    key={x.id}
    img_src={x.img_src}
    title={x.title}
    series_name={x.series_name}
    series_link={x.series_link}
  />
);

const sum = data.reduce((acc, curr) => {
  acc++;
  return acc;
}, 0);

const App = () => (
  <>
    <h1 className="heading_style">List of {sum} webseries</h1>
    {data.map(nCard)}
  </>
);
export default App;
