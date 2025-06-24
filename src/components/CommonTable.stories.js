import CommonTable from './CommonTable.vue'

export default {
  title: 'Components/CommonTable',
  component: CommonTable,
  tags: ['autodocs'],
  argTypes: {
        data: {
      control: 'object',
      description: '출력 데이터 배열',
      table: {
        type: { summary: 'Array<Object>' },
        defaultValue: { summary: '[]' },
      },
    },
    header: {
      control: 'array',
      description: '열 이름 배열',
      table: {
        type: { summary: 'Array<string>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    caption: {
      control: 'text',
      description: '테이블 캡션',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    colGroup: {
      control: 'array',
      description: '열 너비 비율 배열',
      table: {
        type: { summary: 'Array<number>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    order: {
      control: 'array',
      description: '열 정렬 순서 배열',
      table: {
        type: { summary: 'Array<string>' },
        defaultValue: { summary: 'undefined' },
      },
    },
  }
}


const sampleData = [
  { 이름: '홍길동', 나이: 30, 직업: '개발자' },
  { 이름: '이몽룡', 나이: 25, 직업: '디자이너' },
  { 이름: '성춘향', 나이: 22, 직업: '기획자' }
];

const sampleHeader = ['이름', '나이', '직업'];
const sampleOrder = ['이름', '나이', '직업'];
const sampleColGroup = [33, 33, 34];

export const Default = {
  args: {
    caption: '기본 테이블',
    data: sampleData,
    header: sampleHeader,
    order: sampleOrder,
    colGroup: sampleColGroup,
  },
};