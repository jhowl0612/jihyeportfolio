import Vue from 'vue';
import VueRouter from 'vue-router';
// import numberBaseball from '../03/numberBaseball';
// import responseCheck from '../04/responseCheck';
// import rockScissorsPaper from '../05/rockScissorsPaper';
// import lottoGenerator from '../06/lottoGenerator';
// import TicTacToe from '../07/TicTacToe';
import gameMatcher from './gameMatcher';

Vue.use(VueRouter);

export default new VueRouter ({
    mode: 'history', // 하스토리 라우터
    routes: [   // 눈속임 주소 이름, 표시될 페이지. 페이지가 컴포넌트라고 생각하기. 임포트했으니 다른 폴더에 있어도 괜찮음.
        // { path: '/number-baseball', component: numberBaseball},
        // { path: '/response-check', component: responseCheck},
        // { path: '/rock-scissors-paper', component: rockScissorsPaper},
        // { path: '/lotto-generator', component: lottoGenerator},
        // { path: '/tic-tac-toe', component: TicTacToe},
        { path: '/game/:name', component: gameMatcher}, // /game/게임이름(가변). routes 목록이 길어지지 않도록 한 줄로 처리. (동적 매칭)
    ],  // 대신 게임매처의 template 구문이 길어진다. template에서 각각 달리 HTML 태그를 추가할 수 있는 것은 장점일지도.
});