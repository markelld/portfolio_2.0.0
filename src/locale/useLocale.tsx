import { useIntl } from 'react-intl';

import { IUseLocale } from './useLocale.types';

const useLocale = (): IUseLocale => {
  const { formatMessage } = useIntl();

  return {
    getLocale: (key: string) => {
      return formatMessage({ id: key });
    },
  };
};

export default useLocale;