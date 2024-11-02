import { Menu03Icon, Notification01Icon, Logout03Icon, Notification03Icon } from "hugeicons-react"

const NavBar = ({ showSidebar, setShowSidebar }) => {

    return (
        <>
            <div className="flex flex-row justify-between bg-white p-3 h-[10vh] w-full rounded-lg items-center">
                <div className="flex lg:hidden">
                    <Menu03Icon color="#000" onClick={function () {
                        setShowSidebar(!showSidebar)
                    }} />
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="text-md font-dosisBold">User Name</p>
                    <p className="text-xs font-dosisMedium">Event Name</p>
                </div>
                <div className="flex flex-row space-x-2">
                    {/* <Notification01Icon color="#000" /> */}
                    <Logout03Icon color="#000" />
                </div>
            </div>
        </>
    )
}

export { NavBar }