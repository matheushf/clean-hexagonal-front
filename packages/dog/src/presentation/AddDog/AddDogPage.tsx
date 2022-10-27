import { Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormField,
  Grid,
  NameValueList,
  NameValuePair,
  PageHeader,
  RadioButtonGroup,
  Text,
  TextInput,
} from 'grommet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { validateSchema } from '@clean-front/shared';
import { useAddDog } from '../../application/add-dog/addDogHook';
import { dogInitialValues, DogSchema } from '../../domain/schema/dogValidationSchema';

function AddDogPage() {
  const { t } = useTranslation('addDog');
  const { dogs, onSave } = useAddDog();

  return (
    <div>
      <Grid
        rows={['auto', 'auto']}
        columns={['medium', 'auto']}
        pad={{ left: '100px', top: '10px' }}
        gap="medium"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'form', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header">
          <PageHeader
            title={t('title')}
            pad={{ bottom: '40px' }}
            parent={
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Text color="brand">{t('backButton')}</Text>
              </Link>
            }
          />
        </Box>

        <Box
          gridArea="form"
          border={{ size: '1px', color: 'neutral-2' }}
          pad={{ vertical: '20px', horizontal: '20px' }}
        >
          <Formik
            initialValues={dogInitialValues}
            isInitialValid={false}
            onSubmit={onSave}
            validate={(values) => validateSchema(values, DogSchema)}
          >
            {({ isSubmitting, isValid, handleChange, values }) => (
              <Form>
                <FormField name="saveOn" htmlFor="saveOn" label="Save On">
                  <RadioButtonGroup
                    id="saveOn"
                    name="saveOn"
                    options={[
                      {
                        label: t('saveOnMemory'),
                        value: 'memory',
                      },
                      {
                        label: t('saveOnStorage'),
                        value: 'storage',
                      },
                    ]}
                    onChange={handleChange}
                    value={values.saveOn}
                  />
                </FormField>
                <FormField name="name" htmlFor="name" label={t('nameLabel')}>
                  <TextInput id="name" name="name" onChange={handleChange} value={values.name} />
                </FormField>
                <FormField name="breed" htmlFor="breed" label={t('breedLabel')}>
                  <TextInput id="breed" name="breed" onChange={handleChange} value={values.breed} />
                </FormField>

                <Box align="center" margin={{ top: '40px' }}>
                  <Button
                    type="submit"
                    primary
                    label="Submit"
                    style={{ width: '80%' }}
                    disabled={isSubmitting || !isValid}
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        <Box gridArea="main" justify="center" align="center">
          <Box width="medium" background="dark-1" pad={{ vertical: '20px' }}>
            <NameValueList layout="grid" justify="center">
              {dogs?.map((dog, index) => (
                <>
                  <NameValuePair name={dog.name}>
                    <Text color="text-strong">{dog.breed}</Text>
                  </NameValuePair>
                  {index !== dogs.length - 1 && (
                    <Box width="90%" height="1px" background="dark-4" />
                  )}
                </>
              ))}
            </NameValueList>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export { AddDogPage };
