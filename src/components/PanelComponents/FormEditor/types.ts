export interface ItextAreaConfigType {
  key: string;
  name: string;
  type: 'TextArea';
}
export type TtextAreaDefaultType = string;

export interface InumberConfigType {
  key: string;
  name: string;
  type: 'Number';
  range?: [number, number];
  step?: number;
}
