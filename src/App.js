import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from './components/Login/login';
import Register from './components/Login/register';
import Dashboard from './components/Dashboard/dashboard';

import UpdateVendorInfo from './components/VendorInfo/UpdateVendorInfo';

import PlayAreas from './components/Playarea/playareas';
import AddPlayArea from './components/Playarea/addPlayArea';

import Events from './components/Events/events';
import AddPartyHall from './components/Events/addpartyhall';

import SchoolsList from './components/Schools/schoolsList';
import AddSchools from './components/Schools/addschools';
import schoolDetails from './components/Schools/schoolDetails';
import PreSchoolsList from './components/PreSchools/preschoolList';
import AddPreSchools from './components/PreSchools/addpreschools';

import SeasonalCamp from './components/SeasonalCamp/seasonalcamplist';
import AddSeasonalCamp from './components/SeasonalCamp/addcamp';

import CreativeActivities from './components/CreativeActivities/creativeactivities';
import AddTutions from './components/CreativeActivities/addTutions';
import AddSports from './components/CreativeActivities/addSports';
import AddMusic from './components/CreativeActivities/addmusic';
import AddDance from './components/CreativeActivities/adddance';
import AddYoga from './components/CreativeActivities/addyoga';
import AddDrawing from './components/CreativeActivities/adddrawing';
import AddSpiritual from './components/CreativeActivities/addspiritual';

import Finance from './components/Finance/Finance';

import UserList from './components/UserInfo/userlist';
import UserDetails from './components/UserInfo/userdetails';

import VendorList from './components/VendorInfo/vendorlist';
import VendorDetails from './components/VendorInfo/vendordetails';
import UpdateVendor from './components/VendorInfo/updatevendor';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/UpdateVendorInfo" exact component={UpdateVendorInfo} />
          <Route path="/dashboard" exact component={Dashboard} />

          <Route path="/playareas" exact component={PlayAreas} />
          <Route path="/addplayarea" exact component={AddPlayArea} />

          <Route path="/events" exact component={Events} />
          <Route path="/addpartyhall" exact component={AddPartyHall} />

          <Route path="/addschools" exact component={AddSchools} />
          <Route path="/schoolsList" exact component={SchoolsList} />
          <Route path="/schooldetails/:id/" exact component={schoolDetails} />
          <Route path="/preschoolslist" exact component={PreSchoolsList} />
          <Route path="/addpreschool" exact component={AddPreSchools} />
          
          <Route path="/seasonalcamp" exact component={SeasonalCamp} />
          <Route path="/addcamp" exact component={AddSeasonalCamp} />

          <Route path="/creativeactivities" exact component={CreativeActivities} />
          <Route path="/addtution" exact component={AddTutions} />
          <Route path="/addsports" exact component={AddSports} />
          <Route path="/addmusic" exact component={AddMusic} />
          <Route path="/adddance" exact component={AddDance} />
          <Route path="/addyoga" exact component={AddYoga} />
          <Route path="/adddrawing" exact component={AddDrawing} />
          <Route path="/addspiritual" exact component={AddSpiritual} />

          <Route path="/finance" exact component={Finance} />

          <Route path="/userlist" exact component={UserList} />
          <Route path="/userdetails" exact component={UserDetails} />
          <Route path="/vendorlist" exact component={VendorList} />
          <Route path="/vendordetails" exact component={VendorDetails} />
          <Route path="/updatevendor" exact component={UpdateVendor} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
