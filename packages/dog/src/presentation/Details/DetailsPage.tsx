import React from 'react';
import { Box, Grid, Image, NameValueList, NameValuePair, PageHeader, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDetails } from '../../application/details/detailsHook';

function DetailsPage() {
  const { t } = useTranslation('details');
  const { dog } = useDetails();

  return (
    <Grid
      rows={['auto', 'auto']}
      columns={['medium', 'auto']}
      pad="small"
      gap="medium"
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [0, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="header">
        <PageHeader
          title={dog ? dog.name : '...'}
          pad={{ bottom: '40px' }}
          parent={
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text color="brand">{t('backButton')}</Text>
            </Link>
          }
        />
      </Box>

      <Box gridArea="main" pad="small">
        {dog && (
          <Box>
            <Box width="large" color="neutral-1">
              <NameValueList>
                <NameValuePair
                  name={
                    <Text color="light-1" weight="bold">
                      {t('name')}
                    </Text>
                  }
                >
                  <Text color="text-strong-light">{dog.name}</Text>
                </NameValuePair>
                {!!dog.breed_group && (
                  <NameValuePair
                    name={
                      <Text color="light-1" weight="bold">
                        {t('breedGroup')}
                      </Text>
                    }
                  >
                    <Text color="text-strong-light">{dog.breed_group}</Text>
                  </NameValuePair>
                )}
                <NameValuePair
                  name={
                    <Text color="light-1" weight="bold">
                      {t('temperament')}
                    </Text>
                  }
                >
                  <Text color="text-strong-light">{dog.temperament}</Text>
                </NameValuePair>
              </NameValueList>
            </Box>

            <Box margin={{ top: '30px' }}>
              <Image
                fit="contain"
                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                alt="Dog"
                width="100%"
              />
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

export default DetailsPage;
