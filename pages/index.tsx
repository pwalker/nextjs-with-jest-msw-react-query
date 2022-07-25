import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";

import styles from "@/pages/index.module.css";

const fetchFoo = async () => {
  const response = await fetch("/foo");

  if (!response.ok) {
    throw Error("network response was not OK");
  }

  return response.json();
};

export default function Home() {
  const { data, status } = useQuery("foo", fetchFoo);

  return (
    <div className={styles.container}>
      <h1>Welcome to the test app!</h1>
      <div>{status}</div>
    </div>
  );
}
