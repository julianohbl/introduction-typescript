// numbers
let name_var: number;
name_var = 123;
name_var = 1.2;
name_var = 0xfa;
console.log(name_var);

// boolean
let active: boolean = true;

// string
let firstName = "Juliano";
let lastName = "Lima";
let fullName: string = `${firstName} ${lastName}`;

// Enums
enum ROLES {
  MANAGER,
  ADMIN,
  CEO,
  CTO,
}
function setRole(role: ROLES): void {}

setRole(ROLES.CEO);

// arrays
let names = ["Juliano", "Teste", true, 1];
let name1: string[] = ["Só", "aceita", "tipo", "string"];
let name2: Array<string> = ["Só", "aceita", "tipo", "string"];
let name3: Array<any> = ["Juliano", "Teste", true, 1];
