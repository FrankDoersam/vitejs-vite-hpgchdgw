import { CssVarsProvider } from '@mui/joy/styles';
import UsersPage from './UsersPage';
import theme from './lib/theme';


function App() {
  return (
    <CssVarsProvider  theme={theme}>
      <UsersPage />
    </CssVarsProvider>
  );
}

export default App;