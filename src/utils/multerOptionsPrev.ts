import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { MulterError, diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { HttpException, HttpStatus } from '@nestjs/common';

// Multer configuration
export const multerConfig = {
    dest: './uploads',
};

// Multer upload options
export const multerOptionsPrev = {
    // Enable file size limits
   fileFilter: (req:any, file:any, cb:any) => {
      if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|pdf|xlsx)$/))
        cb(null, true);
      else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
    },
    storage: diskStorage({
      destination: multerConfig.dest,
      filename: (req, file, cb) => {
        console.log("file Prev", file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extName = extname(file.originalname);
        const fileName = `${file.originalname}-${uniqueSuffix}${extName}`
        cb(null, fileName);
      }
    })
};