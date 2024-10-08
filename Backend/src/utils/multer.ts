import path from 'path'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'


// const storage = multer.diskStorage({

//     destination: (req, file, cb) => {

      
//       cb(null, path.join(__dirname, '..', 'uploads'));
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${uuidv4()}-${file.originalname}`); 
//     },
//   });
  
// const upload = multer({ storage: storage });

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export default upload

