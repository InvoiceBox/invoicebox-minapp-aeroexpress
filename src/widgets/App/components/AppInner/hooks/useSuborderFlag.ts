import { TInitialData } from '../../../hooks/useInitialData';

export const useSuborderFlag = (initialData: TInitialData) => initialData.minappType === 'suborder';
