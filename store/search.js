import airports from 'airport-codes/airports.json'
import _ from 'lodash'

export const state = () => ({
  airports: [],
})

export const getters = {
  airports: state => state.airports,
}

export const mutations = {
  setFilteredAirports(state, payload) {
    state.airports = payload
  }
}

export const actions = {
  filterAirports: _.debounce(async ({ commit }, { search, loading }) => {
    search = search.toLowerCase()

    if (!search) {
      loading(false)
      return false
    }

    const filterAirports = new Promise(resolve => {
      const filter = airports.filter(
        airport =>
          airport.iata.toLowerCase().includes(search) ||
          airport.city.toLowerCase().includes(search) ||
          airport.country.toLowerCase().includes(search) ||
          airport.name.toLowerCase().includes(search)
      )

      resolve(filter)
    })

    commit('setFilteredAirports', await filterAirports)

    loading(false)
  }, 350)
}
