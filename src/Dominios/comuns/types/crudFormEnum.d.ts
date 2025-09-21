export type crudForm = "CREATE" | "EDIT" | "DELETE" | "DISMISS";


export type Tcf = {
    exe: crudForm;
    data: any;
};
export type TcallBackFunction = ({ exe, data }: Tcf) => any;
