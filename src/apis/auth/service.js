import { ConflictError } from "../../utils/errors/ConflictError.js";
import { NotFoundError } from "../../utils/errors/NotFoundError.js";

export class UserService {
  constructor(model) {
    this.model = model;
  }

  async insert(user) {
    const userModel = new this.model(user);

    await userModel.save().catch((err) => {
      if (err.code && err.code === 11000) {
        const field = Object.keys(err.keyValue);
        throw new ConflictError(
          `An account with that ${field} already exists.`
        );
      }
    });
  }

  async getUserBy(email) {
    const user = await this.model
      .findOne({ email: email })
      .select({ email: 1, password: 1, username: 1 });

    if (!user) {
      throw new NotFoundError("Your email is not registered");
    }

    return user;
  }
}
