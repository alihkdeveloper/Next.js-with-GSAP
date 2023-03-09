import Link from "next/link";
import {useRouter} from "next/router";
function Home1() {
	const router = useRouter();
	const handleClick = () => {
		router.push("/product");
		//router.replace("/product");
		//the replace means remove the products better to use push
	};
	return (
		<div>
			<h1>Home Page</h1>
			<Link href="/blog">
				<h2>Blogs</h2>
			</Link>
			<Link href="/product">
				<h2>Products</h2>
			</Link>
			<Link href="/docs">
				<h2>Docs Main Page</h2>
			</Link>
			<Link href="/docs/feature1/concept1">
				<h2>Docs Details</h2>
			</Link>
			<Link href="/info">
				<h2>Info</h2>
			</Link>
			<Link href="/movie">
				<h2>Movie List</h2>
			</Link>
			<Link href="/movie/1/review/1">
				<h2>Movie Review</h2>
			</Link>
			<button type="button" onClick={handleClick}>
				Place Order
			</button>
		</div>
	);
}
export default Home1;
