import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../Authintecation/Login";
import NavigationLogin from "../Authintecation/NavigationLogin";
import Register from "../Authintecation/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Terms from "../Tarms_Conditions/Terms";
import Main from "../layouts/Main";
import NewsLayOut from "../layouts/NewsLayOut";
import News from "../pages/newsData/News";
import NewsData1 from "../pages/newsData/newsData1";

const router = createBrowserRouter([
    {
        path:'/',
        element:<NavigationLogin></NavigationLogin>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: 'newsdata1',
        element: <Main></Main>,
        children: [
    
            {
                path: ':id',
                element: <NewsData1></NewsData1>,
                loader: ({params}) => fetch(`https://newsbackend-kv3rcu0vd-mdsujait2004-gmailcom.vercel.app/news/${params.id}`)
            }
        ]
    },

    
    {
        path: 'news',
        element: <NewsLayOut></NewsLayOut>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute> ,
                loader:({params}) => fetch(`https://newsbackend-kv3rcu0vd-mdsujait2004-gmailcom.vercel.app/newsData/${params.id}`)
            }
        ]
    }
])
export default router;