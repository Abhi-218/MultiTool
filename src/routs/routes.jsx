


import { createBrowserRouter  } from 'react-router-dom'
import App from '../App';
import Password from '../componant/password';
import Params from '../componant/Params';
import Currencychanger from '../componant/Currencychanger/Currencychanger'
import Todo from '../componant/TodoList/Todo';
import Counter from '../componant/counter';


const router=createBrowserRouter([
  {
   path : '/',
   element : <App/>,
     children:[{
        path : '/password',
        element : <Password/>,
     },
    {
      path : '/currency',
      element : <Currencychanger/>
    },
    {
      path : '/:username',
      element : <Params/>
    },
    {
      path : '/counter',
      element : <Counter/>
    },
    {
      path : '/todo',
      element : <Todo/>
    }
  ]
  }

])
export default router;