import {  OrganizationSwitcher, auth } from "@clerk/nextjs"

function OrganizationPage() {
  const {userId, orgId}  = auth();
  return (
    <>
     <OrganizationSwitcher hidePersonal />
    </>
   
  )
}

export default OrganizationPage