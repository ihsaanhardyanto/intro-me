import React from "react";
import Header, { HompageHeader } from "./components/header";
import Typewriter from "../../components/typewriter";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<HompageHeader />
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-start mt-10 ml-10 mr-10">
					<h1 className="text-4xl font-bold">
						<Typewriter
							options={{
								strings: [
									"Hello,",
									"Hola,",
									"Bonjour,",
									"Ciao,",
									"Hallo,",
									"你好,",
									"こんにちは,",
									"안녕하세요,",
									"สวัสดี,",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>

				<div className="flex items-start flex-col">
					<p className="text-2xl font-semibold ml-10">
						I&apos;m Ihsaan Hardyanto
					</p>
				</div>

				<div className="flex gap-2 mt-4">
					<Button variant="link">Github</Button>

					<Button variant="link">LinkedIn</Button>
				</div>
			</div>
		</>
	);
}
