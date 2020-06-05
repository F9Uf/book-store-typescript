import { shallowMount } from "@vue/test-utils";
import Item from "@/components/Item.vue";
import { BookModel } from "@/model";

const mockBooks: BookModel = {
  id: 0,
  title: "mock book 1",
  price: 100,
  img: "cookie5.jpg"
};

describe("Item.vue", () => {
  const wrapper = shallowMount(Item, {
    propsData: {
      book: mockBooks
    }
  });

  it("should render book title when pass book from props", async () => {
    const bookTitleHtml = wrapper.find("#book-title");
    expect(bookTitleHtml.text()).toContain("mock book 1");
  });

  it("should render book price when pass book from props", async () => {
    const bookPriceHtml = wrapper.find("#book-price");
    expect(bookPriceHtml.text()).toContain("100฿");
  });

  it("should render book image when pass book from props", async () => {
    // const bookImageHtml = wrapper.find("img#book-img");
    // expect(bookImageHtml.attributes("src")).toContain("cookie5.jpg");
    // TODO: testing render image from props
  });
});
