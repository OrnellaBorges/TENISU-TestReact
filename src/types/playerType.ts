export type ResponsePlayerType = {
  config: any;
  data: {
    players: ApiPlayerType[];
  };
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

export type ApiPlayerType = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };
};

export type PlayerType = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  picture: string;
  data: {
    rank: number;
    points: number;
    country: {
      picture: string;
      code: string;
    };
    birthday: string;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };
};
