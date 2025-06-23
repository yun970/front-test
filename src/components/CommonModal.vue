<script setup>
    import {ref} from 'vue';
    
    const props = defineProps({
        title : {
            type : String,
            required : true,
            default : "팝업창"
        },
        content : {
            type : String,
            required : false,
        },
        attachs : {
            type : Object,
            required : false,            
        },
        position : {
            type : Object,
            required : false,
            default : {
                x : 500,
                y : 500,
            }
        },
        size : {
            type : Object,
            required : false,
            default : {
                top : 50,
                right : 50,
            },
        }
    })

    const isOpen = ref(true)
    const close = () => {
        isOpen.value = false;
    }

</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" v-if="isOpen">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">

      <!-- 헤더 -->
      <div class="modal-header flex justify-between items-center border-b pb-2 mb-4">        
          <h2 class="text-xl font-semibold">{{props.title ? props.title : '모달 제목'}}</h2>        
        <button @click="close" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
      </div>

      <!-- 바디 -->
      <div class="modal-body mb-4">
        <slot />
      </div>

      <!-- 푸터 -->
      <div class="modal-footer border-t pt-3 flex justify-end gap-2">        
          <button @click="close" class="px-4 py-2 bg-gray-600 text-white rounded">닫기</button>        
      </div>

    </div>
  </div>
</template>
