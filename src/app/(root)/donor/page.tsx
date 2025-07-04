'use client'

import { Button } from "@/components/ui/button";
import DonateFormPopUp from "@/features/user/components/donate-form/donate-form-popup";
import { useState } from "react";


function UserProfilePage() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full">
      <Button onClick={() => setIsVisible(true)}>Click</Button>
      <DonateFormPopUp data={{
        organization: "Alu Myanmar",
        event: "Water Festival",
        amount: 0,
        phoneNumber: "",
        screenShot: undefined,
      }} isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* <OrgAdminRequestFormPopUp isVisible={isVisible}  setIsVisible={setIsVisible} /> */}
    </div>
  )
}

export default UserProfilePage;