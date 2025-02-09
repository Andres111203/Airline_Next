declare interface createUserParams{
    name: string;
    email: string;
    password: string;
    phone: string
}
declare type searchParamProps = {
    params: { [key: string]: string };
    searchParam: { [key: string]: string | string[] | undefined };
};

declare interface User extends createUserParams{
    $id: string;
}