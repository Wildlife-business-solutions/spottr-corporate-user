import React, { createContext, useContext } from "react";
import { useSecureStorage } from 'Hooks/useSecureStorage'

const OnboardingContext = createContext();

export default function OnboardingUser({ children }) {

  const data = {
    "welcomePage":0,
    "brandName": "",
    "contactEmail": "",
    "contactPhoneNumber": "",
    "username": "",
    "lng": "",
    "lat": "",
    "description": "",
    "businessTags": [],
    "categoryId": "",
    "profileUrl": ""
  }
  

  const [corporateOnboarding, setCorporateOnboarding] = useSecureStorage("onboarding",data);

  return (
    <OnboardingContext.Provider value={{corporateOnboarding, setCorporateOnboarding}}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useCorporateOnboarding = ()=> useContext(OnboardingContext)
