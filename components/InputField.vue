<template>
  <div style="width: 300px">
    <VSelect
      :options="selectOptions"
      :filterable="options.length > 0"
      @search="searchHandler"
    >
      <template slot="no-options">
        <p class="p-3">Start typing to find your result...</p>
      </template>
      <template slot="option" slot-scope="option">
        <div class="d-center">
          {{ option }}
        </div>
      </template>
      <template slot="selected-option" slot-scope="option">
        <div class="selected d-center">
          {{ option }}
        </div>
      </template>
    </VSelect>

    {{ selectOptions }}
  </div>
</template>

<script>
import VSelect from 'vue-select'
import { useGetters } from '@u3u/vue-hooks'
import { createComponent, ref, computed } from '@vue/composition-api'

import 'vue-select/dist/vue-select.css'

export default createComponent({
  components: { VSelect },

  props: ['searchHandler', 'options'],

  setup({ options }) {
    const selectOptions = computed(() => useGetters(...options)[options[1][0]].value)

    return { selectOptions }
  }
})
</script>