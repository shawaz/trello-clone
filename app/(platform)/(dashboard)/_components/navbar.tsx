import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

function navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm bg-white flex items-center">
      {/* TODO: Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className=" md:flex">
          <Logo />
        </div>
        <Button size='sm' className=" rounded-sm  md:block h-auto py-1.5 px-2">
          Create
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher 
          hidePersonal 
          afterCreateOrganizationUrl='/org/:id'
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl='/org/:id'
          appearance={{elements: {
            rootBox: {
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
            }
          }}}
        />
        <UserButton afterSignOutUrl="/" appearance={{elements: {
          avatarBox: {height: 30, width: 30}
        }}} />
      </div>
    </nav>
  )
}

export default navbar