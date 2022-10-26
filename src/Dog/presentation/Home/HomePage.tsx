import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Image,
  Page,
  PageHeader,
} from 'grommet';
import { Favorite, Add } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHomeContext } from '../../application/home/homeContext';
import './Home.css';

function HomePage() {
  const { t } = useTranslation('home');
  const { dogs, onStar, favouriteDogs } = useHomeContext();

  return (
    <Page pad={{ horizontal: '20px', vertical: '20px' }}>
      <Box>
        <PageHeader title={t('title')} pad={{ bottom: '20px' }} />
      </Box>

      <Box margin={{ vertical: '20px' }} width="200px">
        <Link to="/new-dog" style={{ width: '100%' }}>
          <Button primary label={t('add')} hoverIndicator="dark-1" icon={<Add />} />
        </Link>
      </Box>

      <Grid columns="medium" gap="medium">
        {dogs?.map((dog) => {
          return (
            <Card background="dark-1" height="400px" key={dog.name}>
              <CardHeader pad="medium">
                <Link to={`/dog/${dog.id}`} style={{ width: '100%', height: '100%' }}>
                  {`${dog.name} >`}
                </Link>
              </CardHeader>

              <CardBody pad="small">
                <Link to={`/dog/${dog.id}`}>
                  <Image fit="contain" src={dog.image.url} alt="Dog" height="250px" width="100%" />
                </Link>
              </CardBody>

              <CardFooter pad={{ horizontal: 'small' }} background="dark-2">
                <Button
                  type="button"
                  icon={
                    <Favorite
                      color="red"
                      className={dog.isFavourite(favouriteDogs) ? 'favorite-icon-filled' : ''}
                    />
                  }
                  hoverIndicator
                  onClick={() => onStar(dog)}
                />
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Page>
  );
}

export default HomePage;
