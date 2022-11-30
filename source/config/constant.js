import path from 'path';

let __dirname = path.resolve(); 

/*
module.exports = {
    usersConfig: {
    	avataUrl : 'upload/avata/'
    }
};
export default {
    usersConfig: {
    	avataUrl : 'upload/avata/'
    }
};
*/

export const usersConfig = {
    avataUrl : '/upload/users/'
};

export const publicURI =  __dirname + '/source/public';