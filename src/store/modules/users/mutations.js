import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SEARCH_FILTER,
  SEARCH_FILTER_BY_TYPE,
  SORT_USERS
} from '@/store/types/users'
import { utilSortBy } from '@/utils'

export const mutations = {
  [ADD_USER]:  (state, payload) => {
    state.users = state.filteredUsers = [payload, ...state.users]
  },
  [UPDATE_USER]: (state, payload) => {
    const { id, user } = payload
    state.users = [...state.users.slice(0,id), user, ...state.users.slice(id+1)]
  },
  [DELETE_USER]: (state, payload) => {
    state.users = state.users.filter((_, i) => i !== payload)
  },
  [SEARCH_FILTER]: (state, payload) => {
    // Bhojendra Note:
    // instead of changing filterType
    // I should have defined 'user' in the object rather than 'fullname'
    let { filterType } = state
    // if (filterType == 'user') { // done renaming
    //   filterType = 'fullname'
    // }
    // instead of search only payload,
    // I could also have passed filterType in the payload
    // and dispatched the action from filterUsers action.

    state.searched = true
    if(!payload) return state.filteredUsers = state.users
    state.filteredUsers = state.users.slice().filter((user) => {
      return user[filterType].toLowerCase().includes(payload.toLowerCase())
    })
    /* if(!payload) return state.users
    state.users = state.users.filter(user => {
      return user.fullname.toLowerCase().includes(payload.toLowerCase())
    }) */
  },
  [SEARCH_FILTER_BY_TYPE]: (state, payload) => {
    state.filterType = payload
  },
  [SORT_USERS]: (state, payload) => {
    const { field, order } = payload
    if(state.searched) { // sort filteredUsers
      utilSortBy(state.filteredUsers, field, order)
    } else { // sort users
      utilSortBy(state.users, field, order)
    }
  }
}