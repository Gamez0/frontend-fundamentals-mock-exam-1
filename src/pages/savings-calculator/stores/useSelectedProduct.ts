import { create } from 'zustand/react';

interface SelectedProductState {
  selectedProductId: string | null;
  setSelectedProduct: (id: string) => void;
}

const useSelectedProduct = create<SelectedProductState>(set => ({
  selectedProductId: null,
  setSelectedProduct: id => set({ selectedProductId: id }),
}));

export const useSelectedProductId = () => useSelectedProduct(state => state.selectedProductId);

// export only setter
export const useSetSelectedProduct = () => useSelectedProduct(state => state.setSelectedProduct);
