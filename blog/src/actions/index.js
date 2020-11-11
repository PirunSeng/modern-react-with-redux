import _ from 'lodash'
import jsonPlaceHolder from '../apis/jsonplaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts')

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}

// non-memoize version
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

// memoize version
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`)

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// })

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // if we just call fetchPosts(), it's just return a dispatch func.
  // that's why we need to dispatch it.
  await dispatch(fetchPosts())

  // way 1
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)))
  
  // equivalent to way 1 above
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}
