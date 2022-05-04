import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ranger List | Home</title>
				<meta name="keywords" content="rangers" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
					modi cum velit commodi officiis aliquid est voluptatem, id dolorem
					dignissimos libero explicabo! Assumenda reprehenderit, debitis
					mollitia provident doloribus tempora!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
					modi cum velit commodi officiis aliquid est voluptatem, id dolorem
					dignissimos libero explicabo! Assumenda reprehenderit, debitis
					mollitia provident doloribus tempora!
				</p>
				<Link href="/rangers">
					<a className={styles.btn}>See Ranger Listing</a>
				</Link>
			</div>
		</>
	);
}
