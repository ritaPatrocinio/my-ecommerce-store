import { initiateCheckout } from "../../lib/payments";
import { useState } from "react";
import products from "../../products.json";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const defaultCart = { products: {} };

const useCart = () => {
  const [cart, setCart] = useState(defaultCart);

  const addToCart = ({ id }: { id?: string } = {}) => {
    if (!id) {
      return;
    }
    setCart((prev) => {
      //@ts-ignore
      if (prev.products[id]) {
        return {
          ...prev,
          products: {
            ...prev.products,
            //@ts-ignore
            [id]: { id, quantity: prev.products[id].quantity + 1 },
          },
        };
      } else {
        return {
          ...prev,
          products: {
            ...prev.products,
            [id]: { id, quantity: 1 },
          },
        };
      }
    });
  };

  const cartItems = Object.keys(cart.products).map((key) => {
    const product: Product | undefined = products.find(
      ({ id }) => `${id}` === `${key}`
    );
    return {
      //@ts-ignore
      ...cart.products[key],
      pricePerItem: (product as Product).price,
    };
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.pricePerItem * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const checkout = () => {
    initiateCheckout({
      lineItems: cartItems.map((item) => ({
        price: item.id,
        quantity: item.quantity,
      })),
    });
  };

  return {totalPrice, totalItems, addToCart, checkout};
};

export default useCart;
