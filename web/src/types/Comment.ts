export type Comment = {
  id: number;
  userName: string;
  message: string;
};

export type AddCommentInput = {
  itemId: number;
  userName: string;
  message: string;
};
