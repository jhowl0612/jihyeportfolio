<template>
    <table>   <!-- tableData를 돌면서 각 값(안쪽 배열, rowData와 rowIndex 호명)를 호출하여, 다시 v-bind를 통해 프롭으로 넘김 -->
        <tr-component v-for="(rowData, Index) in tableData" :key="Index" :row-data="rowData" :row-index="Index"></tr-component>
    </table>   <!-- 배열 안에 값이 배열이기 때문에, 호명도 (값 호명, 값 호명) 형태로 함 row-data = 행 데이터, row-index = 행 번호-->
</template>
<script>
    import TrComponent from './TrComponent';
    export default {
        // name: 'tableComponent',
        components: {
            'tr-component' : TrComponent,
        }, 
        props: {
            tableData : Array,
        }
    }
</script>
<style>
    
</style>