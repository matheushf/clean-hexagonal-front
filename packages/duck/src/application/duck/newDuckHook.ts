import { useTransition as useNavigation } from '@remix-run/react';

export function useNewDuck() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return { isSubmitting }
}