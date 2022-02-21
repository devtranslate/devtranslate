import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/Global.styles';
import { getTheme } from '../src/theme/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const getFontFamily = () => <link href="/static/fonts/CeraRoundPro.css" rel="stylesheet" />;

const withThemeProvider = (storyFn) => {
  return (
    <ThemeProvider theme={getTheme()}>
      {getFontFamily()}
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  )
};

export const decorators = [withThemeProvider];

