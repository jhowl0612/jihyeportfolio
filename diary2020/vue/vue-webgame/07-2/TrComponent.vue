<template>
    <tr>
        <td-component v-for="(cellData, Index) in rowData" :key="Index" :row-index="rowIndex" :cell-data="cellData" :cell-index="Index"></td-component>
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
        props: {
            rowData : Array,
            rowIndex : Number,
        }
    }
</script>
<style>
    
</style>