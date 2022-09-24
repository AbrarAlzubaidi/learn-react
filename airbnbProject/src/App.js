import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GridImages from './components/GridImages';
import Intro from './components/Intro';
import data from './data';
import Card from './components/Card';
function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            // ! when the child component recieve it it will look like: prosp.img
            // * rather than passing each prop (so much line of code) we use:
            //item={item}
            // ! when the child component recieve it it will look like: props.item.coverImg
            // * if we still want to pass them each props by itself we can do it by 
            // * spreading the object
            {...item}
            // ! when the child component recieve it it will look like: prosp.img

        />
    )
  })  
  return (
    <div className="App">
      <Navbar/>
      <GridImages/>
      <Intro/>
      <div class='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
