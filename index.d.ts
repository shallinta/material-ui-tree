import { FC, ReactEventHandler, CSSProperties, ReactElement } from 'react';

export interface MuiTreeData {
  [key: string]: unknown;
}

export interface MuiTreeButtonData {
  label?: string;
  icon?: ReactElement;
  hint?: string;
  onClick?: ReactEventHandler;
  stlye?: CSSProperties;
}

export interface MuiTreeLabelButtonData extends MuiTreeButtonData {
  label: string;
}

export interface MuiTreeIconButtonData extends MuiTreeButtonData {
  icon: ReactElement;
}

export interface MuiTreeProps {
  data?: MuiTreeData;
  className?: string;
  title?: string | ReactElement;
  labelKey?: string;
  valueKey?: string;
  childrenKey?: string;
  unfoldFirst?: boolean;
  unfoldAll?: boolean;
  pageSize?: number;
  foldIcon?: ReactElement;
  unfoldIcon?: ReactElement;
  loadMoreIcon?: ReactElement;
  actionsAlignRight?: boolean;
  getActionsData?: (
    data: MuiTreeData,
    path: number[],
    unfoldStatus: boolean,
    toggleFoldStatus: () => void
  ) => (MuiTreeLabelButtonData | MuiTreeIconButtonData)[];
  renderLabel?: (
    data: MuiTreeData,
    unfoldStatus: boolean
  ) => (string | ReactElement);
  renderLoadMoreText?: (
    page: number,
    pageSize: number,
    total: number
  ) => (string | ReactElement);
  requestChildrenData?: (
    data: MuiTreeData,
    path: number[],
    toggleFoldStatus: () => void
  ) => void;
}

declare const MuiTree: FC<MuiTreeProps>

export default MuiTree;
