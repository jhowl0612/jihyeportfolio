import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  // Store 선언하기 전에 vuex를 연결하기. 노드 미들웨어와 비슷하다?
// 이때 this.$store 기능이 생긴다
// Vue.use(axios) 하면 this.axios가 생긴다.

export const SET_WINNER = 'SET_WINNER';     // import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN } from './store';
export const CLICK_CELL = 'CLICK_CELL';     // 그냥 임포트는 임포트시 이름을 그대로 적어야 하고 중괄호로 감싸야 함
export const CHANGE_TURN = 'CHANGE_TURN';   // 대신 한 줄에 여러 개 가져올 수 있음
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({     // import store from './store'; 이건 앞쪽 store를 임의지정 이름으로 바꿀 수 있음. 보통 제일 중요한 것을 default
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: 'O',
        winner: '',
    },  // 뷰의 data와 유사
    getters: {
        // turnMessage(state) {     // 마찬가지로 컴포넌트에서 return this.$store.getters.turnMessage; 로 가져올 수 있음.
        //     return state.turn + ' 님이 승리하셨습니다.'
        // }
    },  // 뷰의 computed와 유사. 캐싱됨.
    mutations: {    // 대문자로 쓰는 게 관례
        [SET_WINNER](state, winner) {   // 대괄호로 감싸 변수로 만드는 건 ES문법. Dynamic Property 라고 함?
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {    // 인자 데이터 구조분해
            Vue.set(state.tableData[row], cell, state.turn);    // 인덱스로 접근하면 안 바뀌므로 set 사용
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O'
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    },  // state를 하나씩, 동기적으로 수정할 때. state는 되도록 mutations 통해 수정하는 것이 권장됨
    actions: {

    },  // 비동기를 사용할 때, 혹은 여러 뮤테이션을 연달아 실행할 때.
});