export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	const paths = data.map((ranger) => {
		return {
			params: { id: ranger.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: { ranger: data },
	};
};

const Details = ({ ranger }) => {
	return (
		<div>
			<h1>{ranger.name}</h1>
			<p>{ranger.email}</p>
			<p>{ranger.website}</p>
			<p>{ranger.address.city}</p>
		</div>
	);
};

export default Details;
