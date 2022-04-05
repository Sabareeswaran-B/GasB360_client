import Role from "./role.model";

export default  class Employee {
    employeeId! :      string;
    employeeName! :   string;
    roleId! : string;
    active!:    string;
    employeePhone!: string;
    employeeEmail!: string;
    password!: string;
    role!:Role;
  constructor() {}
}