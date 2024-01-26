import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import Homepage from './components/Homepage/Homepage';
import Jobspage from './components/JobsPage/Jobspage';
import JobsPage2 from './components/JobsPage2/JobsPage2';
import { useDispatch } from 'react-redux';
import { getUserFetchAction } from './redux/actions';
import { useEffect } from 'react';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/me`
  const token = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
      'Content-Type': 'application/json'
    },
  }
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getUserFetchAction(apiUrl, token))
  },[])

  return (
    <BrowserRouter>
      <div className="App">   
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/jobspage' element={<Jobspage />} />
          <Route path='/jobspage2/:searchquery' element={<JobsPage2 />} />
          <Route path='/profile/:user' element={<ProfilePage/>}/>
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;