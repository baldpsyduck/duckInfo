export type cardInfo = {
  info: string;
  id: string;
};

export type informs = Array<{
  date: string; 
  data: Array<cardInfo>;
}>;

export type info={
  id:string;
  title: string;
  start:string;
  end:string;
  background?: string;
  authID:string;
  data:string;
  showPic?:string;
  permittedID?:Array<string>;
}

export type infos=Array<{
  id:string;
  showPic?:string;
  title?:string;
}>