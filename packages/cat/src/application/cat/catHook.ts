import { onMounted, ref } from 'vue';
import { Repository } from '../../adapter/repository'
import { CatE } from '../../domain/entity'

export function useCats() {
  const cats = ref<CatE[]>([])
  
  onMounted(async () => {
    const response = await Repository.cat.getCats();
    cats.value = response;
  })

  return { cats }
}