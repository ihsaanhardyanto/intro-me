import Link from "next/link";
import { ModeToggle } from "../../../components/ui/toggle-theme";
import Image from "next/image";

export function HompageHeader() {
	return (
		<div className="flex flex-row justify-center items-center sm:w-full">
			<header className="sticky top-0 z-50 mt-8 w-1/2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="flex items-center">
					<div className="flex justify-center">
						<ul className="flex flex-wrap justify-center flex-row gap-6 p-2 font-bold">
							<li>
								<Link href="/" className="flex items-center">
									<span className="font-bold pl-3">Home</span>
								</Link>
							</li>
							<li>
								<Link href="#projects">Projects</Link>
							</li>
							<li>
								<Link href="#contacts">Contacts</Link>
							</li>
						</ul>
					</div>

					<div className="pr-3">
						<ModeToggle />
					</div>
				</div>
			</header>
		</div>
	);
}
