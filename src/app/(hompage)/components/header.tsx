import { ModeToggle } from "../../../components/ui/toggle-theme";
import { Button } from "@/components/ui/button";


export function HompageHeader(){
	return (
		<div className="flex flex-row justify-center items-center">
			<header className="sticky top-0 z-50 mt-8 w-1/2 border-2 rounded-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				{/* <header className="flex mt-6 fixed border-solid border-opacity-30 border drop-shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl"> */}
				<div className="flex items-center">
					<div className="flex-grow flex justify-center ml-12">
						<ul className="flex justify-center flex-row gap-6 p-2">
							<li>
								<Button variant="link">About</Button>
								{/* <Link href="" className="">
                    About
                    </Link> */}
							</li>
							<li>
								<Button variant="link">Projects</Button>
								{/* <Link href="" className="">
                    Projects
                    </Link> */}
							</li>
							<li>
								<Button variant="link">Contacts</Button>
								{/* <Link href="" className="">
                    Contacts
                </Link> */}
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


const Header: React.FC = () => {
	return (
		<div className="flex flex-row justify-center items-center">
			<header className="sticky top-0 z-50 mt-8 w-1/2 border-2 rounded-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				{/* <header className="flex mt-6 fixed border-solid border-opacity-30 border drop-shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl"> */}
				<div className="flex justify-between items-center">
					<div className="flex-grow flex justify-center">
						<ul className="flex justify-center flex-row gap-6 p-2">
							<li>
								<Button variant="link">About</Button>
								{/* <Link href="" className="">
                    About
                    </Link> */}
							</li>
							<li>
								<Button variant="link">Projects</Button>
								{/* <Link href="" className="">
                    Projects
                    </Link> */}
							</li>
							<li>
								<Button variant="link">Contacts</Button>
								{/* <Link href="" className="">
                    Contacts
                </Link> */}
							</li>
						</ul>
					</div>
					<div>
						<ModeToggle />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
