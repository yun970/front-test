import { describe, test, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { render, screen } from "@testing-library/vue";

import PostList from "@/views/PostList.vue";

describe('PostList.vue', () => {

    beforeEach(() => {
        setActivePinia(createPinia()) // Pinia 활성화
    })

    test('포스트 목록 렌더링', () => {
        render(PostList)

        screen.debug()
    })

})