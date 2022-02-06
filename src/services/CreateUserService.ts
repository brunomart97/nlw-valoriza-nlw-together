import { UsersRepositories } from "../repositories/UsersRepositories";

class CreateUserService {
  async execute({
    name,
    email,
    admin
  }: IUserRequest) {
    const usersRepository = new UsersRepositories();

    if(!email) {
      throw new Error("E-mail incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };