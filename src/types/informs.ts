export type cardInfo = {
  info: string;
  key: string;
};

export type informs = Array<{
  date: string; 
  data: Array<cardInfo>;
}>;
