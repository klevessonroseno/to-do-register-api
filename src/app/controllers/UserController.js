import User from '../models/User';
import * as Yup from 'yup';

class UserController {
    async store(req, res){
        try {
            const { password_hash } = req.body;

            if(password_hash) return res.status(400).json({
                error: 'Do not pass password_hash'
            });

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required().min(6)
            });

            if(!(await schema.isValid(req.body))){
                return res.status(400).json({
                    error: 'Validation Fails'
                });    
            }

            const userExists = await User.findOne({
                where: { email: req.body.email }
            });
    
            if(userExists) return res.status(400).json({
                error: 'User email must be unique'
            });
    
            const { id, name, email, provider } = await User.create(req.body);
    
            res.status(201).json({ id, name, email, provider });

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new UserController();
