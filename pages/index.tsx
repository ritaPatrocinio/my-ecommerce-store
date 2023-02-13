import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import products from "../products.json";

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
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt={title}></img>
                  <h3>{title}</h3>
                  <p>{price}€</p>
                  <p>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
