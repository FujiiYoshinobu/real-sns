export type User = {
    id: number;
    profilePicture: string;
    username: string;
};
export type Users = User[];

export type PostType = {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
};

export type Posts = PostType[];
