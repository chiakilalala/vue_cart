import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const URL = 'https://awiclass.monoame.com/api/command.php?type=get&name=movies'
/* eslint-disable */
export default new Vuex.Store({
    state: {
        movies: [],
        carts: []
    },
    getters: {
        movieInCart(state) {
            return state.carts.length;
        },
        priceseIncart(state) {
            return state.carts.reduce((acc, movie) => {
                return acc + movie.price
            }, 0)
        },
        isMovieInCart: state => movie => ( //確認movie
            state.carts.findIndex(({ price }) => (
                price === movie.price
            )) !== -1 //不是-1 代表有找到喔
        )
    },
    mutations: {
        API_SUCESS(state, data) {
            state.movies = data
        },
        addToCart(state, movie) {
            state.carts.push(movie);

        }
    },
    actions: {
        fetchMovies({ commit }) {
            fetch(URL).then(re => re.json())
                .then((res) => {
                    commit('API_SUCESS', res)
                    console.log(res)
                })
        }
    },
    modules: {}
})