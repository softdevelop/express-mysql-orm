import path from 'path';

let __dirname = path.resolve(); 

export const publicURI =  __dirname + '/source/public';

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
    avataUrl : '/upload/users/',
    avataUri : publicURI + '/upload/users/',
};