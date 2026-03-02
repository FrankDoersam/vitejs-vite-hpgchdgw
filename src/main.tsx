import { CssVarsProvider } from '@mui/joy/styles';
import { theme } from './theme';
import { UsersPage } from './UsersPage';

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <UsersPage />
    </CssVarsProvider>
  );
}

export default App;
