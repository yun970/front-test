<script setup>
import { ref, computed, onMounted } from 'vue';
import { usePostStore } from '@/stores/postStore.js';
import CommonTable from '@/components/CommonTable.vue';

const { getPostList,
        
        getPostDetail,
        postDetail
    } = usePostStore();

    const postList = ref([
        { id: 1, title: '첫 번째 게시글', writer: '홍길동' },
        { id: 2, title: '두 번째 게시글', writer: '김이박' },
        { id: 3, title: '세 번째 게시글', writer: '박퓨전' },
      ]);
onMounted(async () => {
    await getPostList();

    console.log(postList.value);
});


</script>
<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Post List</h1>
        <CommonTable
        :data="postList"
        :header="['Title', 'ID', 'writer']"
        caption="List of Posts"
        :colGroup="[20, 40, 40]"
        :order="['title', 'id', 'writer']"
        />
    </div>

</template>
<style></style>