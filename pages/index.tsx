import Head from "next/head";
import styles from "@/styles/Home.module.css";
import products from "../products.json";
import { initiateCheckout } from "../lib/payments";

export default function Home() {
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
        <div className={styles.description}></div>

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
                    onClick={() =>
                      initiateCheckout({
                        lineItems: [{ price: id, quantity: 1 }],
                      })
                    }
                  >
                    Buy
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
