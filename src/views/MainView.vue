<script setup>
    import CommonModal from '@/components/CommonModal.vue';
    import { ref } from 'vue'

    const isOpen = ref(false);

    const modalToggle = () => {
        isOpen.value = !isOpen.value;
    }

</script>
<template>
<div>
    <!-- 업로드
    <input type="file" class="border-2 border-solid" /> -->
    <button class="border-4 border-solid" @click="modalToggle">버튼</button>

    <CommonModal
    v-if="isOpen"
    :title="제목"
    @close="modalToggle"
    >        
    asdf
    </CommonModal>

</div>
</template>