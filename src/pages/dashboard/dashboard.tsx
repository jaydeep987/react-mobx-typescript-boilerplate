import { Typography } from '@material-ui/core';
import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { PageContent } from '~components/page-content/page-content';
import { PageHeader } from '~components/page-header/page-header';
import * as photo1 from '~img/photo1.jpg';
import * as photo2 from '~img/photo2.jpg';

/** Dashboard to be shown as default page (on route /) */
const Dashboard: React.FunctionComponent<DashboardProps> = (props: DashboardProps): JSX.Element => {
  const { t } = props;

  return (
    <div>
      <PageHeader headerTitle={t('pageHeadTitle.dashboard')} />
      <PageContent>
        <Typography variant="h3" className="text">
          {t('dashboard.text')}
        </Typography>
        <div>
          <img className="photo1" src={photo1} alt="photo1" />
        </div>
        <div>
          <img className="photo2" src={photo2} alt="photo2" />
        </div>
      </PageContent>
    </div>
  );
};

const TranslatedDashboard = withTranslation()(Dashboard);

export {
  TranslatedDashboard as Dashboard,
};

type DashboardProps = WithTranslation;
