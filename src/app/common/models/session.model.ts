export class Session {
  accessToken: string;
  expiresIn: number;

  constructor(accessToken: string, expiresIn: number) {
    this.accessToken = accessToken;
    this.expiresIn = expiresIn;
  }
}

export class UserConfiguration {
  companyId: string;
  companies: [{ id: string; name: string }];
  dateOfBirth: Date;
  email: string;
  firstName: string;
  id: string;
  language: { id: number; code: string; description: string };
  lastName: string;
  middleName: string;
  role: { id: string; description: string };
  status: number;
  tenant: { id: string; logo: string; colorHex: string };
  userName: string;

  constructor(
    companyId: string,
    companies: [{ id: string; name: string }],
    dateOfBirth: Date,
    email: string,
    firstName: string,
    id: string,
    language: { id: number; code: string; description: string },
    lastName: string,
    middleName: string,
    role: { id: string; description: string },
    status: number,
    tenant: { id: string; logo: string; colorHex: string },
    userName: string
  ) {
    this.companyId = companyId;
    this.companies = companies;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.firstName = firstName;
    this.id = id;
    this.language = language;
    this.lastName = lastName;
    this.middleName = middleName;
    this.role = role;
    this.status = status;
    this.tenant = tenant;
    this.userName = userName;
  }
}
