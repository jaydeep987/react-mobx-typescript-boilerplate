import { Typography } from '@material-ui/core';
import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { PageContent } from '~components/page-content/page-content';
import { PageHeader } from '~components/page-header/page-header';

const RouteError: React.FunctionComponent<RouteErrorProps> = (props: RouteErrorProps): JSX.Element => {
  const { errorText, t } = props;

  return (
    <div>
      <PageHeader headerTitle={t('pageHeadTitle.routeError')} />
      <PageContent>
        <Typography variant="h4">
          {t('routeError.text')}
        </Typography>
        {errorText}
      </PageContent>
    </div>
  );
};

interface RouteErrorProps extends WithTranslation {
  /** Error text to show in page */
  errorText: string;
}

const TranslatedComponent = withTranslation()(RouteError);

export {
  TranslatedComponent as RouteError,
};
