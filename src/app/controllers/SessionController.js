import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import * as Yup from 'yup';

class SessionController {
    async store(req, res){
        try {
            const scheama = Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().required(),
            });

            if(!(await scheama.isValid(req.body))) return res.status(400).json({
                error: 'Email and password are required'
            });

           const { email, password } = req.body;
           
           const user = await User.findOne({ where: { email }});

           if(!user) return res.status(404).json({
               error: 'Incorrect email'
           });

           if(!(await user.checkPassword(password))) return res.status(400).json({
               error: 'Incorrect password'
           });

           const { id, name } = user;

           return res.json({
               user: { id, name, email },
               token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expireIn }),
           });

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new SessionController();
