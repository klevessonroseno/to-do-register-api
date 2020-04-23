import File from '../models/File';

class FileController {
    async store(req, res){
        return res.status(201).json({ msg: 'success'});
    }
}

export default new FileController();
