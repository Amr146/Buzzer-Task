import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create()(
	persist(
		(set) => ({
			userId: null,
			setUserId: (userId) => set({ userId }),
			confirmationResult: null,
			setConfirmationResult: (confirmationResult) =>
				set({ confirmationResult }),
			cart: [],
			addToCart: (product) =>
				set((state) => ({ cart: [...state.cart, product] })),
		}),
		{
			name: 'currentUser',
			storage: createJSONStorage(() => sessionStorage),

			merge: (persistedState, currentState) => ({
				...currentState,
				...persistedState,
			}),
		}
	)
);
