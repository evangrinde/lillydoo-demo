import { shallowMount } from "@vue/test-utils";
import ProductSelection from "@/components/micro/ProductSelection.vue";

describe("ProductSelection.vue", () => {
  /* select any trial option... */
  it("selected trial option is emitted", async () => {
    const wrapper = shallowMount(ProductSelection);
    const selectedOption = 3;

    wrapper.find(`[data-id='${selectedOption}']`).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().select[0]).toEqual([selectedOption]);
  });
});
