import { describe, test, beforeEach, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { usePostStore } from '../../src/stores/postStore';

describe('postStore with MSW', () => {
  let postStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    postStore = usePostStore();
  });

  test('포스트 목록 가져오기', async () => {
    await postStore.getPostList();
    console.log(postStore.postList);
    expect(postStore.postList.length).toBeGreaterThan(0);

  });

})