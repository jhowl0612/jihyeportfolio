<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    import { mapState } from 'vuex';
    import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';   // 변수명 임포트

    export default {
        // name: 'tdComponent',
        props: {    // 프롭에서 셀데이터(O, X) 받지 않음
            rowIndex : Number,
            cellIndex : Number,
        },
        computed: {
            ...mapState({
                tableData: state => state.tableData,
                turn: state => state.turn,
                cellData(state) {
                    return state.tableData[this.rowIndex][this.cellIndex]
                }
            }),

            // cellData() {    // vuex로 셀데이터 받음, mapState 안 쓰는 기본 방식
            //     return this.$store.state.tableData[this.rowIndex][this.cellIndex];
            // },
            // tableData() {
            //     return this.$store.state.tableData;
            // },
            // turn() {
            //     return this.$store.state.turn;
            // }
        },
        methods: {
            onClickTd() {
                if (this.cellData) return;  // cell 데이터가 이미 차 있으면 아무 조작도 하지 않고 리턴;

                // this.$store.commit('CLICK_CELL');   // store의 CLICK_CELL 실행
                this.$store.commit(CLICK_CELL, { row: this.rowIndex, cell: this.cellIndex }); // 커밋(뮤테이션 이름, 데이터{데이터 구조분해1, 2})
                // store에서 바꿔 둔 변수로 실행. 문자열 오타 나면 찾기 힘든데 변수명 오타 나면 에러 코드가 알기 쉽게 나온다.
                let win = false;
                if (this.tableData[this.rowIndex][0] === this.turn && this.tableData[this.rowIndex][1] === this.turn && this.tableData[this.rowIndex][2] === this.turn ) {
                    win = true;
                }
                if (this.tableData[0][this.cellIndex] === this.turn && this.tableData[1][this.cellIndex] === this.turn && this.tableData[2][this.cellIndex] === this.turn ) {
                    win = true;
                }
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn ) {
                    win = true;
                }
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn ) {
                    win = true;
                }
                
                if (win) { // 이긴 경우

                    this.$store.commit(SET_WINNER, this.turn); 
                    this.$store.commit(RESET_GAME);

                } else { // 모든 칸이 다 찼는데 무승부일 때

                    let all = true; // all이 true면 모든 칸이 다 찼다는 뜻
                    this.tableData.forEach((row) => {  // 모든 행 검사
                        row.forEach((cell) =>{  // 모든 열 검사
                            if (!cell) {    // not cell : cell 값이 없을 때. if(cell)이 'cell 값이 존재할 때' 라는 의미인 것과 반대.
                                all = false;
                            }
                        });
                    });
                    if (all) {  // 모든 칸이 다 찼을 때
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME);
                    } else {    //아직 빈 칸이 남았을 때, 턴 바꿈
                        this.$store.commit(CHANGE_TURN);
                    }

                }
            }   
        },
    }
</script>
<style>
    
</style>