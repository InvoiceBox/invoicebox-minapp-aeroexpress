import { FC, ReactNode } from 'react';

export type TProps = {
    children: ReactNode;
};

// TODO
// 'src/stories/common/BgCard';
export const BgCard: FC<TProps> = ({ children }) => <div>{children}</div>;
