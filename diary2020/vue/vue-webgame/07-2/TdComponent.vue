<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    import EventBus from './EventBus';
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

                EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);  
                // 이벤트버스에서 정의한 clickTd와 대응. 이벤트버스의 $on과 이곳 $emit이 대응
            }   
        },
    }
</script>
<style>
    
</style>