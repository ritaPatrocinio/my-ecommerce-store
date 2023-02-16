import Head from "next/head";
import styles from "@/styles/Home.module.css";
import products from "../products.json";
import useCart from "./hooks/useCart";

export default function Home() {
  const { totalPrice, totalItems, addToCart, checkout } = useCart();
  return (
    <>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Space Jelly Shop</h1>

        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className={styles.description}>
            <strong>Items: </strong>
            {totalItems}
          </p>
          <p className={styles.description}>
            <strong>Total Cost: </strong>
            {totalPrice}€
          </p>
          <br />
          <br />
          <button
            className={styles.button}
            onClick={() => checkout()}
            disabled={!totalItems}
          >
            Check Out
          </button>
        </div>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, image, title, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <img src={image} alt={title}></img>
                <h3>{title}</h3>
                <p>{price}€</p>
                <p>{description}</p>
                <p>
                  <button
                    className={styles.button}
                    onClick={() => addToCart({ id })}
                  >
                    Add to Cart
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
