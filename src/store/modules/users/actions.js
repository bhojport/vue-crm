import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SEARCH_FILTER,
  SEARCH_FILTER_BY_TYPE,
  SORT_USERS
} from '@/store/types/users'

export const actions = {
  addNewUser({ commit }, payload) {
    commit(ADD_USER, payload)
  },
  updateUser({ commit }, payload) {
    commit(UPDATE_USER, payload)
  },
  deleteUser({ commit }, payload) {
    commit(DELETE_USER, payload)
  },
  filterUsers( { commit }, payload) {
    commit(SEARCH_FILTER, payload)
  },
  filterUsersByType( { dispatch, commit }, payload) {
    const { filterType, search } = payload
    commit(SEARCH_FILTER_BY_TYPE, filterType)
    dispatch('filterUsers', search)
  },
  sortUsers( { commit }, payload) {
    commit(SORT_USERS, payload)
  }
}