"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { NavLinks } from '../../../constant/constant';

type Props = {
	openNav: () => void
}

const Nav = ({ openNav }: Props) => {
	const [navBg, setNavBg] = useState(false);

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) {
				setNavBg(true);
			} else {
				setNavBg(false);
			}
		}

		window.addEventListener("scroll", handler);

		return () => window.removeEventListener("scroll", handler);

	}, [])

	return (
		<div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : "fixed"} duration-200 h-[10vh] z-[10000] fixed top-0 w-full -mt-2`}>
			<div className="flex items-center h-full justify-between w-[90%] mx-auto">
				{/*icon*/}
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group hover:scale-105 transition-transform">
						<span className="text-white font-bold text-lg group-hover:scale-110 transition-transform">LT</span>
					</div>
					<div className="hidden sm:block">
						<h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent tracking-wider">
							LOUIS TENG
						</h1>
						<p className="text-xs text-gray-400 mt-[-4px] tracking-widest">DEVELOPER</p>
					</div>
				</div>
				{/*navLinks*/}
				<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 hidden lg:flex items-center space-x-10">
					{
						NavLinks.map((link) => {
							return (
								<Link
									key={link.id}
									href={link.url}
									className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
								>
									<p>{link.label}</p>
								</Link>
							)
						})
					}
				</div>
				{/*CV BUTTON & MENU*/}
				<div className="flex items-center space-x-4">
					<button
						onClick={() => {
							// Create a temporary anchor element to trigger download
							const link = document.createElement('a');
							link.href = '/resume/cv.pdf'; // Your CV file path in public folder
							link.download = 'Louis_Teng_CV.pdf'; // Name for downloaded file
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}}
						className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                transition-all duration-300 text-white flex items-center space-x-2">
						<BiDownload className="w-5 h-5" />
						<span>Download CV</span>
					</button>
					<HiBars3BottomRight
						onClick={openNav}
						className="w-8 h-8 cursor-pointer text-white lg:hidden" />
				</div>
			</div >
		</div >
	)
}

export default Nav