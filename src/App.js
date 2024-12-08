import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Devices from "./Pages/Devices";
import Settings from "./Pages/Settings";
import { UserProvider } from "./Context/UserContext";
import { WebSocketProvider } from './Context/WebSocketContext';
import Cookies from 'js-cookie';
import Unauthorized from "./Pages/Unauthorized";


const ProtectedRoute = ({ allowedRoles,children }) => {
  const token = Cookies.get('authToken');
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
  if (!token) { 
    return <Navigate to="/" replace />;
  }
   
  if (user && allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

   return children;
};

function App() {
  return (
    <UserProvider>
      <WebSocketProvider>
        <Router>
           <Navbar />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['user','admin']}><Dashboard /></ProtectedRoute>} />
                  <Route path="/devices" element={<ProtectedRoute allowedRoles={['admin']}><Devices /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute allowedRoles={['user','admin']}><Settings /></ProtectedRoute>} />
                  <Route path="/unauthorized" element={<Unauthorized />} />
                  <Route path="*" element={<Unauthorized />} />
                </Routes>
        </Router>
      </WebSocketProvider>
    </UserProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Pages/Login";
// import Signup from "./Pages/SignUp";
// import Navbar from "./Components/Navbar";
// import Dashboard from "./Pages/Dashboard";
// import Devices from "./Pages/Devices";
// import Settings from "./Pages/Settings";
// import { UserProvider } from "./Context/UserContext";
// import { WebSocketProvider } from './Context/WebSocketContext';
// import Cookies from 'js-cookie';

// const ProtectedRoute = ({ role, children }) => {
//   const token = Cookies.get('authToken');
  
//   // 🛠️ Only redirect user role to /dashboard if the token is present (logged in)
//   if (token && role === 'user' && window.location.pathname !== '/dashboard') {
//     return <Navigate to="/dashboard" />;
//   }

//   // Return the children if token is present
//   return token ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <UserProvider>
//       <WebSocketProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="*" element={
//               <>
//                 <Navbar />
//                 <Routes>
//                   <Route path="/dashboard" element={<ProtectedRoute role="user"><Dashboard /></ProtectedRoute>} />
//                   <Route path="/devices" element={<ProtectedRoute role="admin"><Devices /></ProtectedRoute>} />
//                   <Route path="/settings" element={<ProtectedRoute role="admin"><Settings /></ProtectedRoute>} />
//                 </Routes>
//               </>
//             } />
//           </Routes>
//         </Router>
//       </WebSocketProvider>
//     </UserProvider>
//   );
// }

// export default App;
