<template>
    <div v-if = " currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if = " currentGame === 'response-check'">
        <response-check></response-check>
    </div>
    <div v-else-if = " currentGame === 'rock-scissors-paper'">
        <rock-scissors-paper></rock-scissors-paper>
    </div>
    <div v-else-if = " currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else-if = " currentGame === 'tic-tac-toe'">
        <tic-tac-toe></tic-tac-toe>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
    import numberBaseball from '../03/numberBaseball';
    import responseCheck from '../04/responseCheck';
    import rockScissorsPaper from '../05/rockScissorsPaper';
    import lottoGenerator from '../06/lottoGenerator';
    import TicTacToe from '../07-2/TicTacToe';

    export default {
        components: {
            numberBaseball,
            responseCheck,
            rockScissorsPaper,
            lottoGenerator,
            TicTacToe
        },
        mounted() {
            console.log(this.$router);  // 라우터 전체 설정
            console.log(this.$route);   // 현재 주소 설정
        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>