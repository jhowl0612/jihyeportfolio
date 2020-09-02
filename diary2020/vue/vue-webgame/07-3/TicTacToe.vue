<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component>
            <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                <td v-for="(cellData, cellIndex) in rowData" :key="cellIndex" @click="onClickTd(rowIndex, cellIndex)">{{cellData}}</td>
            </tr>
        </table-component>
        <div v-if="winner">{{winner}} 님의 승리!</div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';    // 뷰엑스에서 여러 데이터 가져오고 싶을 때 임포트
    import store, { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';   // 단순 임포트는 한 줄로 합칠 수도 있음
    import TableComponent from './TableComponent';

    export default {
        store,      // 요거까지 써야 $store 쓸 수 있음
        components: {
            'table-component' : TableComponent,
        },
        computed: {
            ...mapState(['winner', 'turn', 'tableData']),   // 뷰엑스에서 여러 데이터 가져오기

            // ...mapState({        // 활용예
            //     winner: state => state.winner,
            //     winner(state) {
            //         return state.winner + this.numberData;    // 컴포넌트내 데이터와 더하기
            //     },
            //     turnState: 'turn',   // state 이름 바꾸어서 가져오기
            // }),  

            // winner() {   // mapState 안 쓰는 기본 방식
            //     return this.$store.state.winner;
            // },
            // turn() {  
            //     return this.$store.state.turn;
            // },

            // ...mapState({        
            //     winner: state => state.winner,
            //     winner: state => state.turn,
            //     winner: state => state.tableData,
            // }), 
        },
        methods: {
            onClickTd(rowIndex, cellIndex) {
                if (this.cellData) return;  // cell 데이터가 이미 차 있으면 아무 조작도 하지 않고 리턴;

                // this.$store.commit('CLICK_CELL');   // store의 CLICK_CELL 실행
                this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex }); // 커밋(뮤테이션 이름, 데이터{데이터 구조분해1, 2})
                // store에서 바꿔 둔 변수로 실행. 문자열 오타 나면 찾기 힘든데 변수명 오타 나면 에러 코드가 알기 쉽게 나온다.
                let win = false;
                if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn ) {
                    win = true;
                }
                if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn ) {
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
    };
</script>
<style> 
    *{
        font-size: 48px;
    }
    table {
        border-collapse: collapse;
   }
    td {
        border: 2px solid black;
        width: 200px;
        height: 200px;
        text-align: center;
   }
</style>