import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Landing = () => <p>Landing</p>
const SurveyNew = () => <p>New Survey</p>
const Dashboard = () => <p>Dashboard</p>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;