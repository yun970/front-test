import CommonModal from './CommonModal.vue'

export default {
  title: 'Components/CommonModal',
  component: CommonModal,
  tags: ['autodocs'],
  argTypes: {
    /*팝업창 제목*/
    title: { control: 'text', description: '팝업창 제목을 설정합니다.' },
    /*팝업창 제목*/
    content: { control: 'text' },
    /*팝업창 제목*/
    position: { control: 'object' },
    /*팝업창 제목*/
    size: { control: 'object' },
    /*팝업창 제목*/
    attachs: { control: 'object' },
    /*팝업창 제목*/
    close: { action: 'close' },
  },
}

const Template = (args) => ({
  components: { CommonModal },
  setup() {
    return { args }
  },
  template: `
    <CommonModal v-bind="args" @close="args.close">
      <template #default>
        <div>
          <p>{{ args.content }}</p>
        </div>
      </template>
    </CommonModal>
  `,
})

export const 기본 = Template.bind({})
기본.args = {
  title: '테스트 모달',
  content: '이것은 테스트 모달입니다.',
  position: null,
  size: { width: 500, height: 300 },
}