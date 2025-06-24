<script setup>
import { computed, ref } from 'vue'

const emitx = defineEmits(['close'])

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'popup'
  },
  content: {
    type: String,
    required: false
  },
  attachs: {
    type: Object,
    required: false
  },
  position: {
    type: Object,
    required: false,
    default: null
  },
  size: {
    type: Object,
    required: false,
    default: () => ({
      width: 500,
      height: 300
    })
  }
})

const modalStyle = computed(() => {
  const hasCustomPosition = props.position && props.position.x != null && props.position.y != null

  return hasCustomPosition
    ? {
        position: 'absolute',
        top: `${props.position.y}px`,
        left: `${props.position.x}px`,
        width: `${props.size.width}px`,
        height: `${props.size.height}px`
      }
    : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${props.size.width}px`,
        height: `${props.size.height}px`
      }
})
</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6"
        :style="modalStyle"
    >

      <!-- 헤더 -->
      <div class="modal-header flex justify-between items-center border-b pb-2 mb-4">        
          <h2 class="text-xl font-semibold">{{props.title ? props.title : '모달 제목'}}</h2>        
        <button @click="emitx('close')" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
      </div>

      <!-- 바디 -->
      <div class="modal-body mb-4">
        <slot />
      </div>

      <!-- 푸터 -->
      <div class="modal-footer border-t pt-3 flex justify-end gap-2">        
          <button @click="emitx('close')" class="px-4 py-2 bg-gray-600 text-white rounded">닫기</button>        
      </div>

    </div>
  </div>
</template>
