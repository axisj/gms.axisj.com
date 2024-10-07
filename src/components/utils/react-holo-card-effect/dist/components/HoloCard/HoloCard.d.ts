import React from 'react';
interface Props {
    children?: React.ReactNode;
    url: string;
    height?: number;
    width?: number;
    showSparkles?: boolean;
    animated?:boolean;
}
export declare const HoloCard: ({ children, url, height, width, showSparkles, animated }: Props) => JSX.Element;
export {};
