import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contextAPI/index.jsx'
import { ToastContainer } from 'react-toastify';
import { SocketProvider } from './contextAPI/socketContext.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SocketProvider>
      <StrictMode>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"

        />
      </StrictMode>
    </SocketProvider>
  </AuthProvider>
)
