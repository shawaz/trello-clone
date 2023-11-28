import { OrganizationList } from "@clerk/nextjs";

function CreateOrganizationPage() {
  return (
    <OrganizationList 
        hidePersonal 
        afterSelectOrganizationUrl='/org/:id'
        afterCreateOrganizationUrl='/org/:id'
    />
  )
}

export default CreateOrganizationPage