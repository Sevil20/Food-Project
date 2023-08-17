import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
// import { NavigationProvider } from './components/NavigationContext';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const basename = '/food-project'; // Set your basename here

  return (
    <Router basename={basename}>
        <Navbar />
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/about" Component={} /> */}
          {/* Add more routes as needed */}
    </Router>
  );
};

export default App;
