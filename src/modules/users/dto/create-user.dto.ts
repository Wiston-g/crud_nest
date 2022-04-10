export class CreateUserDto {
  id?: number;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  cellphone: number;
  password: string;
  isActive?: boolean;
}
