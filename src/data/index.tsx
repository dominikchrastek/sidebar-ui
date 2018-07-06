export interface Comment {
  id: number;
  text: string;
  postId: number;
}

export interface Post {
  id: number;
  text: string;
}

export interface PostWitComments extends Post {
  comments: Comment[];
}
export enum Page {
  DASHBOARD = "DASHBOARD",
  MARKETPLACE = "MARKETPLACE",
  STRATEGIES = "STRATEGIES",
  INDICATORS = "INDICATORS",
  DATA = "DATA",
  SETTINGS = "SETTINGS",
  LOG_OUT = "LOG_OUT"
}
