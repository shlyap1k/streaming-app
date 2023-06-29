import AuthService from '../../services/AuthService'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user.username, user.password).then(
        user => {
          commit('loginSuccess', user.data);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      return AuthService.logout().then(
        response => {
          commit('logout');
          return Promise.resolve(response)
        }
      )
    },
    register({ commit }, user) {
      return AuthService.signup(user.username, user.password, user.firstname, user.lastname).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    setProfileData({commit}) {
      return AuthService.profile().then(
        reponse => {
          commit('setProfileData', reponse.data.profile[0])
        })
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      localStorage.setItem('user', JSON.stringify(user))
      // $cookies.set('user123', JSON.stringify(user), '3d')
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
      localStorage.clear()
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    setProfileData(state, profile) {
      state.user = profile
    }
  }
};
