import {router} from './components/Router'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
