import { Configuration } from "@/../.configuration";
import { serialize } from "cookie";
import React from "react";
import { AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

export default function Sidebar() {
	const logout = () => {
		document.cookie = serialize("authorization", "", { expires: new Date(0) });
		window.location.reload();
	};

	const clearChat = () => {
		window.location.reload();
	};

	return (
		<div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
			<nav className="flex h-full flex-1 flex-col space-y-1 p-2">
				<a
					className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20"
					onClick={clearChat}
				>
					<AiOutlinePlus className="h-4 w-4" />
					New chat
				</a>
				<div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
					<div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
						<a
							className={`flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group ${
								Configuration.IS_CHAT_HISTORY_ENABLED ? "" : "hidden"
							}`}
						>
							<FiMessageSquare className="h-4 w-4" />
							<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
								New conversation
								<div className="absolute truncate inset-y-0 right-0 w-8 z-10  from-gray-900 group-hover:from-[#2A2B32]"></div>
							</div>
						</a>
					</div>
				</div>
				<a
					className={`flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm
						${Configuration.IS_CHAT_HISTORY_ENABLED ? "" : "hidden"}`}
				>
					<AiOutlineMessage className="h-4 w-4" />
					Clear conversations
				</a>
				{/* <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
					<AiOutlineSetting className="h-4 w-4" />
					Settings
				</a> */}
				{/* <a
					href="#"
					target="_blank"
					className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
				>
					<BiLinkExternal className="h-4 w-4" />
					Get help
				</a> */}
				<a
					className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
					onClick={logout}
				>
					<MdLogout className="h-4 w-4" />
					Log out
				</a>
			</nav>
		</div>
	);
}
