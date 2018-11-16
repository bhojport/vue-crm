export const getters = {
  // Bhojendra Note:
  // used underscore to those which now I think not needed in the views
  // but just assigning an underscore is not to be a private property

  // _getUsers: state => state.users,
  // _getFilteredUsers: state => state.filteredUsers,
  // _isSearched: state => state.searched,
  // getUsersList: state => state._isSearched ? state._getFilteredUsers : state._getUsers

  // ouch, preceeding code is invalid, just need as:

  getUsersList: state => state.searched ? state.filteredUsers : state.users,
}