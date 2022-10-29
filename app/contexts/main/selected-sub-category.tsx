import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useRef, useState } from 'react';
import type { Category } from '~/services/categories/interface';

const defaultSelectedSubCategory: Category = {
  id: -1,
  name: '',
};

type SelectedSubCategoryContext = {
  selectedSubCategory: Category | undefined;
  setSelectedSubCategory: (category: Category) => void;
  initialize: (category: Category) => void;
};

const selectedSubCategoryContext = createContext<SelectedSubCategoryContext>({
  selectedSubCategory: defaultSelectedSubCategory,
  setSelectedSubCategory: (_) => {},
  initialize: (_) => {},
});

export const SelectedSubCategoryProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Provider } = selectedSubCategoryContext;
  const [selectedSubCategory, setSelectedSubCategory] = useState<Category>(
    defaultSelectedSubCategory
  );
  const initialized = useRef(false);
  function initialize(subCategory: Category) {
    if (!initialized.current) {
      initialized.current = true;
      setSelectedSubCategory(subCategory);
    }
  }

  return (
    <Provider
      value={{
        selectedSubCategory,
        setSelectedSubCategory,
        initialize,
      }}
    >
      {children}
    </Provider>
  );
};

export const useSelectedSubCategory = () =>
  useContext(selectedSubCategoryContext);
