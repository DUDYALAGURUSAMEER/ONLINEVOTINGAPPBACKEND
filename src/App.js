import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter,Routes,Route} from "react-router-dom";
import CreateVoter from './components/CreateVoter';
import VotersList from './components/VotersList';
import EditVoter from './components/EditVoter';
import CreateParty from './components/CreateParty';
import PartyList from './components/PartyList';
import EditParty from './components/EditParty';
import IsVotedList from './components/IsVotedList';
import AdminProfile from './components/AdminProfile';
import LoginPage from './components/LoginPage';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import AdminsList from './components/AdminsList';
import CreateAdmin from './components/CreateAdmin';
import EditAdmin from './components/EditAdmin';
import About from './components/About';
import Navbar from './components/Navbar';
import Foot from './components/foot';
import Home from './components/Home';
import { UserResults,AdminsResult } from './components/AdminResults';
function App() {
  return (
    <div class=''>
      <HashRouter>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/foot' element={<Foot/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/Admin/AddVoter/:id' element={<CreateVoter/>}/>
            <Route path='/Admin/AddAdmin/:id' element={<CreateAdmin/>}/>
            <Route path='/Admin/VoterList/:id' element={<VotersList/>}/>
            <Route path='/Admin/AdminsList/:id' element={<AdminsList/>}/>
            <Route path='/Admin/EditVoter/:id' element={<EditVoter/>}/>
            <Route path='/Admin/EditAdmin/:id' element={<EditAdmin/>}/>
            <Route path='/Admin/AddParty/:id' element={<CreateParty/>}/>
            <Route path='/Admin/PartyList/:id' element={<PartyList/>}/>
            <Route path='/Admin/EditParty/:id' element={<EditParty/>}/>
            <Route path='/Admin/IsVotedList/:id' element={<IsVotedList/>}/>
            <Route path='/Admin/Results/:id' element={<AdminsResult/>}/>
            <Route path='/User/Results/:id' element={<UserResults/>}/>
            <Route path='/Admin/Profile/:id' element={<AdminProfile/>}/>
            <Route path='/Admin/Home/:id' element={<AdminHome/>}/>
            <Route path='/User/Home/:id' element={<UserHome/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;