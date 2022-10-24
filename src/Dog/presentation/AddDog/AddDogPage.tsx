import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { validateSchema } from '../../../shared/infra/schemaValidator';
import { useAddDog } from '../../application/add-dog/addDogHook';
import { DogSchema } from '../../domain/schema/dogValidationSchema';

function AddDogPage() {
  const { t } = useTranslation('addDog');
  const { dogs, onSave } = useAddDog();

  return (
    <div>
      <h3>AddDogPage</h3>

      <Formik
        initialValues={{
          name: '',
        }}
        isInitialValid={false}
        onSubmit={onSave}
        validate={(values) => validateSchema(values, DogSchema)}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <label htmlFor="name">{t('nameLabel')}</label>
            <Field id="name" name="name" placeholder="Bob" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              {t('button')}
            </button>
          </Form>
        )}
      </Formik>

      {dogs?.map((dog) => (
        <div key={dog.name}>{dog.name}</div>
      ))}
    </div>
  );
}

export { AddDogPage };
