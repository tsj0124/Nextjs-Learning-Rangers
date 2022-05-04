import Link from "next/link";
import styles from "../../styles/Rangers.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { rangers: data },
	};
};

const Rangers = ({ rangers }) => {
	return (
		<div>
			<h1>All Rangers</h1>
			{rangers.map((ranger) => (
				<Link href={"/rangers/" + ranger.id} key={ranger.id}>
					<a className={styles.single}>
						<h3>{ranger.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Rangers;
