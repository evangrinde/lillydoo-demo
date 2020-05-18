import { shallowMount } from "@vue/test-utils";
import TrialPackage from "@/components/sections/TrialPackage.vue";

describe("TrialPackage.vue", () => {
  const factory = (values = {}) => {
    return shallowMount(TrialPackage, {
      data() {
        return {
          ...values
        };
      }
    });
  };

  it("selectedOption data renders product image", () => {
    const wrapper = factory({ selectedOption: 4 }, {});
    expect(wrapper.find("#product-option-img").attributes("src")).toEqual(
      `/images/product-options/testpaket-${wrapper.vm.selectedOption}.jpg`
    );
  });
});
