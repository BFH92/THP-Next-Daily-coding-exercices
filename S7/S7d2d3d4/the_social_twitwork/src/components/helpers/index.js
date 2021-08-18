import Cookies from 'js-cookie'

export const checkAuth = () => {
  if (Cookies.get('token')) {
    return true;
  }else {
    return false
  }
}