<template>
  <InputField :search-handler="airportSearch" :options="origins" />
</template>

<script>
import { useActions } from '@u3u/vue-hooks'
import { createComponent, ref } from '@vue/composition-api'
import InputField from '@/components/InputField.vue'

export default createComponent({
  components: { InputField },

  setup() {
    const actions = useActions('search', ['filterAirports'])

    function airportSearch(search, loading) {
      loading(true)
      actions.filterAirports({ search, loading })
    }

    return { airportSearch, origins: ref(['search', ['airports']]) }
  }
})
</script>
