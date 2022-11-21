import { createContext, useContext, ReactNode, useState } from "react";

type ContextType = {
  language: string,
  changeLanguage: (language: string) => void;
  currentSite: 'forSib' | 'forInter' | 'forPolicy' | '';
  changeCurrentSite: (currentSite: 'forSib' | 'forInter' | 'forPolicy' | '') => void;
};

const contextDefaultValues: ContextType = {
  language: 'vi',
  changeLanguage: () => { },
  currentSite: '',
  changeCurrentSite: () => { },
};

export const CustomContext = createContext<ContextType>(contextDefaultValues);

export function useCustomContext() {
  return useContext(CustomContext);
}

type Props = {
  children: ReactNode;
};

export const CustomProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<string>('vi');
  const [currentSite, setCurrentSite] = useState<'forSib' | 'forInter' | 'forPolicy' | ''>('');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const changeCurrentSite = (currentSite: 'forSib' | 'forInter' | 'forPolicy' | '') => {
    setCurrentSite(currentSite);
  };

  const value = {
    language: language,
    currentSite: currentSite,
    changeCurrentSite: changeCurrentSite,
    changeLanguage: changeLanguage,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
    </CustomContext.Provider>
  );
};
