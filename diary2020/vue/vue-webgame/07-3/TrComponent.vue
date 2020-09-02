<template>
    <tr>
        <td-component v-for="(cellData, Index) in rowData" :key="Index" :row-index="rowIndex" :cell-index="Index"></td-component>
    </tr>
</template>
<script>
    import TdComponent from './TdComponent';
    export default {
        // name: 'trComponent',
        components: {
            'td-component' : TdComponent,
        }, 
        data() {
            return {
                parent: 'I am your father',
            }
        },
        computed: {
            rowData() {    // vuex로 행데이터받음
                return this.$store.state.tableData[this.rowIndex];
            },
        },
        props: {
            rowIndex : Number,
        }
    }
</script>
<style>
    
</style>