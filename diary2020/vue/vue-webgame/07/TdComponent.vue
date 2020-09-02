<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    export default {
        // name: 'tdComponent',
        props: {
            cellData : String,
            rowIndex : Number,
            cellIndex : Number,
        },
        methods: {
            onClickTd() {
                if (this.cellData) return;  // cell 데이터가 이미 차 있으면 아무 조작도 하지 않고 리턴;


                //this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
                // 뿌리의 테이블 데이터, 현 좌표 칸을, 현재 턴 데이터로 채워라
                // 테이블 [행번호(바깥 배열 인덱스)][열번호(안쪽배열인덱스)]
                // 인덱스로 접근하면 화면 안 바뀜!

                const rootData = this.$root.$data;
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);

                let win = false;
                if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn ) {
                    win = true;
                }
                if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn ) {
                    win = true;
                }
                if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn ) {
                    win = true;
                }
                if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn ) {
                    win = true;
                }

                if (win) { // 이긴 경우

                    rootData.winner = rootData.turn;
                    rootData.turn = 'O';
                    rootData.tableData = [['','',''],['','',''],['','','']];

                } else { // 모든 칸이 다 찼는데 무승부일 때

                    let all = true; // all이 true면 모든 칸이 다 찼다는 뜻
                    rootData.tableData.forEach((row) => {  // 모든 행 검사
                        row.forEach((cell) =>{  // 모든 열 검사
                            if (!cell) {    // not cell : cell 값이 없을 때. if(cell)이 'cell 값이 존재할 때' 라는 의미인 것과 반대.
                                all = false;
                            }
                        });
                    });
                    if (all) {  // 모든 칸이 다 찼을 때
                        rootData.turn = 'O';
                        rootData.winner = '';
                        rootData.tableData = [['','',''],['','',''],['','','']];
                    } else {    //아직 빈 칸이 남았을 때, 턴 바꿈
                        rootData.turn = rootData.turn === 'O' ? 'X' : 'O'; // 턴 은 = 턴 데이터가 O라면? X로, 아니라면 : O로 바꿔라.
                    }

                }

                
            }   
        },
    }
</script>
<style>
    
</style>