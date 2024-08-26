import CareersPage from './components/CareersPage';
import SolutionsPage from './components/Solutions';
import ContactPage from './components/Contact';
import HomeMainSection from './components/HomeMainSection';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ProvenSuccess from './components/ProvenSuccess';
import InsideDenali from './components/InsideDenali'
import HomePage from './components/HomePage'; 
import Apply from './components/Apply'; 
import CareerOpportunities from './components/CareerOpportunities';
import CareerList from './components/CareerList';
import Results from './components/Results';
import SolutionsDisplay from './components/SolutionsDisplay';
import SolutionsHome from './components/SolutionsHome';
import SolutionsList from './components/SolutionsList';
import NoCareers from './components/NoCareers';
import SendResume from './components/sendResume';
import { SpeedInsights } from '@vercel/speed-insights/react';



import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<HomePage />} />
    <Route path = "/HomeMainSection" element = {<HomeMainSection/>} />
    <Route path = "/Header" element = {<Header/>} />
    <Route path = "/Footer" element = {<Footer/>} />
    <Route path ="/CareersPage" element = {<CareersPage/>} />
    <Route path ="/Solutions" element = {<SolutionsPage/>} />
    <Route path ="/Contact" element = {<ContactPage/>} />
    <Route path ="/AboutUs" element = {<AboutUs/>}/>
    <Route path ="/ProvenSuccess" element = {<ProvenSuccess/>}/>  
    <Route path ="/InsideDenali" element = {<InsideDenali/>}/>
    <Route path ="/CareerOpportunities" element = {<CareerOpportunities/>}/>
    <Route path="/apply/:jobTitle" element={<Apply />} />
    <Route path ="/CareerList" element = {<CareerList/>}/>
    <Route path ="/Results" element = {<Results/>}/>
    <Route path="/SolutionsDisplay/:solutionId" element={<SolutionsDisplay/>} />
    <Route path="/SolutionsList/:solutionId" element={<SolutionsList/>} />
    <Route path ="/NoCareers" element = {<NoCareers/>}/> 
    <Route path ="/SolutionsHome" element = {<SolutionsHome/>}/> 
    <Route path ="/SendResume" element = {<SendResume/>}/> 

  </Routes>
  </BrowserRouter>
  );
  <SpeedInsights />
}

export default App;
//