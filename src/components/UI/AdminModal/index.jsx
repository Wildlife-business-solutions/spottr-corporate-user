import React from "react";
import { AdminBackdropContainer } from "./style";

function AdminBackdrop({ children, showAdminModal, handleClickAdminModal, bg, dis }) {
  return (
    <div dis={dis}>
      {showAdminModal && (
        <AdminBackdropContainer onClick={handleClickAdminModal} bg={bg}>
          {children}
        </AdminBackdropContainer>
      )}
    </div>
  );
}

export default AdminBackdrop;
