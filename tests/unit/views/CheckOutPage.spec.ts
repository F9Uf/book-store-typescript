import { shallowMount } from "@vue/test-utils";
import CheckOutPage from "@/views/CheckOutPage.vue";
import { CartModel, BookModel } from "@/model";

import mock from "@/books_db";
const mockBookData: BookModel[] = mock.books;

const MapBookIntoCart = (books: BookModel[]): CartModel[] => {
  const tmpCart = [...books];
  return tmpCart.map((e, index) => {
    return {
      itemNo: index,
      book: e
    };
  });
};

describe("CheckOutPage.vue", () => {
  describe("Calculate total price following promotion", () => {
    it("should no discount when buy 1 book", async () => {
      const mockBooks = [mockBookData[0]];
      const wrapper = shallowMount(CheckOutPage, {
        stubs: ["promotion-card"],
        propsData: {
          cartProp: MapBookIntoCart(mockBooks)
        }
      });
      const TotalPrice = wrapper.find("#total-price");
      expect(TotalPrice.text()).toContain("100฿");
    });

    it("should discount 20% when buy 2 uniqe book and 1 same book", async () => {
      const mockBooks = [mockBookData[0], mockBookData[0], mockBookData[1]];
      const wrapper = shallowMount(CheckOutPage, {
        stubs: ["promotion-card"],
        propsData: {
          cartProp: MapBookIntoCart(mockBooks)
        }
      });
      const TotalPrice = wrapper.find("#total-price");
      expect(TotalPrice.text()).toContain("280฿");
    });

    it("should discount 20% 3 times when buy double 3 unique book", async () => {
      const mockBooks = [
        mockBookData[0],
        mockBookData[0],
        mockBookData[0],
        mockBookData[1],
        mockBookData[1],
        mockBookData[1]
      ];
      const wrapper = shallowMount(CheckOutPage, {
        stubs: ["promotion-card"],
        propsData: {
          cartProp: MapBookIntoCart(mockBooks)
        }
      });
      const TotalPrice = wrapper.find("#total-price");
      expect(TotalPrice.text()).toContain("540฿");
    });

    it("should discount 30% and 20% when buy 2 same book two times and 1 unique book", async () => {
      const mockBooks = [
        mockBookData[0],
        mockBookData[0],
        mockBookData[1],
        mockBookData[1],
        mockBookData[2],
        mockBookData[2],
        mockBookData[3]
      ];
      const wrapper = shallowMount(CheckOutPage, {
        stubs: ["promotion-card"],
        propsData: {
          cartProp: MapBookIntoCart(mockBooks)
        }
      });
      const TotalPrice = wrapper.find("#total-price");
      expect(TotalPrice.text()).toContain("520฿");
    });

    it("should no discount when buy 3 same books", async () => {
      const mockBooks = [mockBookData[0], mockBookData[0], mockBookData[0]];
      const wrapper = shallowMount(CheckOutPage, {
        stubs: ["promotion-card"],
        propsData: {
          cartProp: MapBookIntoCart(mockBooks)
        }
      });
      const TotalPrice = wrapper.find("#total-price");
      expect(TotalPrice.text()).toContain("300฿");
    });
  });
});
