import React from "react";
import AdminModalContext from "./AdminModalContext";
import AddCorporateProduct from "./addProduct.jsx";
import RecentSearchContext from "./recentSearch";
import AllModals from "./allModalContext.jsx";
import OnboardingUser from "./onboarding.jsx";
import Registration from "./RegContext.jsx";
import CorporateUser from "./userDetails.jsx";

function Store({ children }) {
  return (
    <Registration>
      <AdminModalContext>
        <RecentSearchContext>
          <CorporateUser>
            <OnboardingUser>
              <AddCorporateProduct>
                <AllModals>{children}</AllModals>
              </AddCorporateProduct>
            </OnboardingUser>
          </CorporateUser>
        </RecentSearchContext>
      </AdminModalContext>
    </Registration>
  );
}

export default Store;
