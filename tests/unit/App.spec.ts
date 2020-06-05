import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { CartModel } from "@/model";

const mockCart: CartModel[] = [
  {
    itemNo: 0,
    book: {
      id: 0,
      title: "mock book 1",
      price: 100,
      img: "mock_book1.jpg"
    }
  },
  {
    itemNo: 1,
    book: {
      id: 1,
      title: "mock book 2",
      price: 100,
      img: "mock_book2.jpg"
    }
  }
];

describe("App.vue", () => {
  const wrapper = shallowMount(App, {
    stubs: ["router-link", "router-view"]
  });
  it("should render 0 item when no item in cart", () => {
    const checkoutLink = wrapper.find("#link-checkout");
    expect(checkoutLink.text()).toContain("Check Out");
    expect(checkoutLink.text()).toContain("0");
    expect(checkoutLink.text()).toContain("item");
  });

  it("should render 1 item when there're only one item in cart", async () => {
    const mockCart1: CartModel[] = mockCart.slice(0, 1);
    await wrapper.setData({
      cart: mockCart1
    });
    const checkoutLink = wrapper.find("#link-checkout");
    expect(checkoutLink.text()).toContain("Check Out");
    expect(checkoutLink.text()).toContain("1");
    expect(checkoutLink.text()).toContain("item");
  });

  it("should render more item(s) when there're more than one item in cart", async () => {
    await wrapper.setData({
      cart: mockCart
    });
    const checkoutLink = wrapper.find("#link-checkout");
    expect(checkoutLink.text()).toContain("Check Out");
    expect(checkoutLink.text()).toContain("2");
    expect(checkoutLink.text()).toContain("items");
  });
});
