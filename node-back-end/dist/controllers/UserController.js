import User from "../models/User";
export class UserController {
    static async login(req, res, next) {
        const { username, password, role } = req.body;
        const user = new User({
            username,
            password,
            role,
        });
        try {
            const savedUser = await user.save();
            res.send(savedUser);
        }
        catch (e) {
            console.log(e);
            next(e);
        }
    }
}
