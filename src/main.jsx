import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Internship from './assets/Components/Internship.jsx'
import Mentorship from './assets/Components/Mentorship.jsx'
import Jobs from './assets/Components/Jobs.jsx'
import Practice from './assets/Components/Practice.jsx'
import Competitions from './assets/Components/Comptitions.jsx'
import Auth from './assets/Components/Signup.jsx'
import SubmitJobForm from './assets/Components/jobsubmit.jsx'


// Create router with routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/internships",
    element: <Internship />,
  },
  {
    path: "/mentorships",
    element: <Mentorship />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/competitions",
    element: <Competitions />,
  },
  {
    path: "/jobsubmit",
    element: <SubmitJobForm />,
  },
  {
    path: "/business",
    element: <Auth />,
  },
  // Add more routes as needed
  // {
  //   path: "/practice",
  //   element: <Practice />,
  // },

  {
    path: "*",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)