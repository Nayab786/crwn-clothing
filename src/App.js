import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;





// import React from 'react';
// import { Route, Link } from 'react-router-dom';

// import './App.css';

// const HomePage = props => {
//   console.log(props.history);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics </button>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = props => {
//   console.log(props.history);
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link><div/>
//       <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link><div/>
//       <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
//     </div>
//   );
// };

// const TopicDetail = props => {
//   console.log(props.history);
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Route exact path='/' component={HomePage} />
//       <Route exact path='/topics' component={TopicsList} />
//       <Route exact path='/blog/asdqw/topics' component={TopicsList} />
//       <Route path='/topics/:topicId' component={TopicDetail} />
//       <Route exact path='/blog/topics' component={TopicsList} />
//       <Route path='/blog/topics/:topicId' component={TopicDetail} />
//     </div>
//   );
// }

// export default App;