import {useEffect, useRef} from "react";
import {gsap} from "gsap/dist/gsap";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

export default function IndexPage() {
	const boxRef = useRef();

	useEffect(() => {
		gsap.to(boxRef.current, {
			width: "+60%",
			marginRight: "+19%",
			rotate: "-0deg",
			duration: 1.7,
			ease: "strong.inOut",
		});
		var delayedCall = gsap.delayedCall(1, fallDown);
		function fallDown() {
			gsap.to(boxRef.current, {
				marginTop: "+15%",
				duration: 0.8,
				ease: "strong.inOut",
			});
		}
	}, []);
	const router = useRouter();
	const goTo = (url) => {
		router.push("/");
	};
	return (
		<div className="page">
			<h1>Prodcut Page</h1>
			<p>
				<button onClick={goTo} type="button">
					Back Home
				</button>
			</p>
			<div className="layoutBox">
				<Image
					className="boxProduct"
					ref={boxRef}
					src="/a.jpg"
					width="400"
					height="500"
					alt="image"
				/>
			</div>
		</div>
	);
}
