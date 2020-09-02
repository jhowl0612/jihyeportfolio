<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}} 님의 승리!</div>
    </div>
</template>
<script>
    import TableComponent from './TableComponent';
    import EventBus from './EventBus';
    export default {
        components: {
            'table-component' : TableComponent,
        }, 
        data() {
            return{
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn: 'O',
                winner: '',
            };
        },
        methods: {
            onClickTd(rowIndex,cellIndex) {   // td 파일 emit에서 넘겨 준 값
                console.log(rowIndex,cellIndex);
                this.$set(this.tableData[rowIndex], cellIndex, this.turn);

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

                    this.winner = this.turn;
                    this.turn = 'O';
                    this.tableData = [['','',''],['','',''],['','','']];

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
                        this.turn = 'O';
                        this.winner = '';
                        this.tableData = [['','',''],['','',''],['','','']];
                    } else {    //아직 빈 칸이 남았을 때, 턴 바꿈
                        this.turn = this.turn === 'O' ? 'X' : 'O'; // 턴 은 = 턴 데이터가 O라면? X로, 아니라면 : O로 바꿔라.
                    }

                }
            },
        },
        created() { // 사용자 정의 이벤트
            EventBus.$on('clickTd', this.onClickTd);
        }
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