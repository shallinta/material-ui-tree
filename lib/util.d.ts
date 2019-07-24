import { MuiTreeData } from '.';

declare const getNodeDataByPath: (data: MuiTreeData, path: number[], childrenKey?: string) => MuiTreeData

export declare const withChildrenKey: (childrenKey: string) => (data: MuiTreeData, path: number[]) => MuiTreeData

export default getNodeDataByPath;