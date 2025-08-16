import { RootState } from '../store/store';
import { useStore } from 'react-redux';

export const useAppStore = useStore.withTypes<RootState>();
