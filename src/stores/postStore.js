import { defineStore } from "pinia";
import { ref, computed, reactive} from 'vue';
import axios from 'axios';

export const usePostStore = defineStore("usePostStore", () => {

    const post = ref({
        postList : [],
        postDetail : {},
    })

    const getPostList = async () => {
        const response = await axios.get('/api/posts');
        post.value.postList = response.data;
    }

    const postList = computed(() => post.value.postList);

    const getPostDetail = async (id) => {
        const response = await axios.get(`/api/posts/${id}`);
        post.value.postDetail = response.data;
    }

    const postDetail = computed(() => post.value.postDetail);

    return {
        getPostList,
        postList,
        getPostDetail,
        postDetail
    }
})