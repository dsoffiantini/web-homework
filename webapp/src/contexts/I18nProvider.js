import { createContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const I18nContext = createContext();

function I18nProvider({ children }) {
  const location = useLocation();
  const queryStringI18n = new URLSearchParams(location.search).get('i18n');
  const isI18n = queryStringI18n || location.pathname.includes('/i18n');

  return <I18nContext.Provider value={isI18n}>{children(isI18n)}</I18nContext.Provider>;
}

export default I18nProvider;
