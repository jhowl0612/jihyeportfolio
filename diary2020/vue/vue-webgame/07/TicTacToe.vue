<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}} 님의 승리!</div>
    </div>
</template>
<script>
    import TableComponent from './TableComponent';
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