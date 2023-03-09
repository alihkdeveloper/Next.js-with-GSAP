import {useEffect, useLayoutEffect, useRef} from "react";
import {gsap} from "gsap/dist/gsap";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

export default function IndexPage() {
	const root = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			var delayedCall = gsap.delayedCall(0.5, pullRight);

			function pullRight() {
				delayedCall.kill();
				let tween = gsap.to(".box", {
					marginRight: "28%",
					duration: 1.1,
					ease: "strong.inOut",
					rotate: "+15deg",
				});
			}
		}, root);

		return () => ctx.revert();
	}, []);

	const router = useRouter();
	const goTo = () => {
		router.push("product");
	};

	return (
		<div className="page" ref={root}>
			<h1>Home Page</h1>
			<br />
			<br />
			<Image
				className="box"
				src="/a.jpg"
				width="400"
				height="500"
				alt="image"
				onClick={goTo}
			/>
		</div>
	);
}
