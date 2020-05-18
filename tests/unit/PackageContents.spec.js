import { shallowMount } from "@vue/test-utils";
import PackageContents from "@/components/sections/PackageContents.vue";

describe("PackageContents.vue", () => {
  const factory = (props = {}, values = {}) => {
    return shallowMount(PackageContents, {
      propsData: {
        ...props
      },
      data() {
        return {
          ...values
        };
      }
    });
  };

  /* Trial option #1 is selected... */
  it("selecting trial option #1 renders water wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 1 }, {});
    expect(wrapper.find("[data-id='water-wipes']").isVisible()).toBe(true);
  });
  it("selecting trial option #1 does not render sensitive wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 1 }, {});
    expect(wrapper.find("[data-id='sensitive-wipes']").isVisible()).toBe(false);
  });

  /* Trial option #2 is selected... */
  it("selecting trial option #2 renders water wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 2 }, {});
    expect(wrapper.find("[data-id='water-wipes']").isVisible()).toBe(true);
  });
  it("selecting trial option #2 does not render sensitive wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 2 }, {});
    expect(wrapper.find("[data-id='sensitive-wipes']").isVisible()).toBe(false);
  });

  /* Trial option #3 is selected... */
  it("selecting trial option #3 renders water wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 3 }, {});
    expect(wrapper.find("[data-id='water-wipes']").isVisible()).toBe(true);
  });
  it("selecting trial option #3 does not render sensitive wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 3 }, {});
    expect(wrapper.find("[data-id='sensitive-wipes']").isVisible()).toBe(false);
  });

  /* Trial option #4 is selected... */
  it("selecting trial option #4 does not render water wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 4 }, {});
    expect(wrapper.find("[data-id='water-wipes']").isVisible()).toBe(false);
  });
  it("selecting trial option #4 renders sensitive wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 4 }, {});
    expect(wrapper.find("[data-id='sensitive-wipes']").isVisible()).toBe(true);
  });

  /* Trial option #5 is selected... */
  it("selecting trial option #5 does not render water wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 5 }, {});
    expect(wrapper.find("[data-id='water-wipes']").isVisible()).toBe(false);
  });
  it("selecting trial option #5 renders sensitive wipes in package contents", () => {
    const wrapper = factory({ selectedOption: 5 }, {});
    expect(wrapper.find("[data-id='sensitive-wipes']").isVisible()).toBe(true);
  });
});
