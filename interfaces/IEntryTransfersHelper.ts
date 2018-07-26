import IEntry from './IEntry'
import IChip from './IChip'

// Generated by https://quicktype.io

export default interface IEntryTransfersHelper {
  entry:  IEntry;
  chips:  IChip[];
  helper: IHelper;
  ce:     null | number;
  picks: {
    id: number;
    selling_price: number;
    multiplier: number;
    purchase_price: number;
    purchase_date: string;
    is_captain: boolean;
    is_vice_captain: boolean;
    position: number;
    element: number;
    entry: number;
  }[];
}

export interface IHelper {
  id:              number;
  name:            string;
  bank:            number;
  value:           number;
  transfers_state: ITransfersState;
  wildcard_status: string;
  freehit_status:  string;
}

export interface ITransfersState {
  status: string;
  cost:   number;
  free:   null | number;
  made:   number;
}
