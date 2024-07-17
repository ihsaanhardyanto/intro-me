import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/(hompage)/globals.css";

//! Ubah menjadi Font yang dimau
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ihsaan Hardyanto",
	description: "Ihsaan Hardyanto",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
import { ThemeProvider } from "@/components/theme-provider";
