<script setup>
    import { computed } from 'vue';

    
    const props = defineProps({
        // 출력 데이터
        data: {
            type:Array
        , required:false
        }
         // 열(column) 명칭 
        , header: {
            type:Array
            , required:false
        }
        // 테이블 캡션
        , caption: {
            type:String
            , required:false
        }
        // 행간 너비
        , colGroup: {
            type:Array
            , required:false
        }
        // 열(column) 정렬 순서 
        , order: {
            type:Array
            , required:false
        }
    })

    const keys = computed(()=> {
        if(props.order){
            return props.order
        }

        const keySet = new Set();
        props.data.forEach(element => {
            Object.keys(element).forEach(k => keySet.add(k))
        });
        return Array.from(keySet);
    })
    

</script>
<template>
    <table class="border-collapse border border-gray-400 mx-auto">
        <caption class="hidden">{{props.caption}}</caption>
        <colgroup>
            <col v-for="col in colGroup" :width="col + '%'">
        </colgroup>
        <thead class="bg-gray-50 dark:bg-gray-700">
            <th v-for="th in props.header || keys"
                class="border border-gray-300 p-4 text-center font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200 ">
                {{ th }}
            </th>
        </thead>
        <tbody>
            <tr v-for="(item, rowIndex) in data" :key="rowIndex">
                <td v-for="key in keys" class="border border-gray-300 p-4 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    {{ item[key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style>
</style>
