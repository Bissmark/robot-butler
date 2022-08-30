import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Signup } from './database/Signup'
import { Dashboard } from './database/Dashboard'
import { AuthProvider } from '../contexts/Auth'
import { Login } from './database/Login'
import { PrivateRoute } from './database/PrivateRoute'

export function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}