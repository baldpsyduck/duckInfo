export type cardInfo = {
  info: string;
  key: string;
};

export type informs = Array<{
  date: string; 
  data: Array<cardInfo>;
}>;

export type info={
  id:string;
  title: string;
  background?: string;
  authID:string;
  data:string;
  showPic?:string;
  permittedID?:Array<string>;
}