export class Contact {

    constructor(
        public _id?: string, 
        public name: string = '', 
        public email: string = '', 
        public phone: string = '',
        public moves?: any[]
        ) {

    }

    setId?() {
        
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        for (var i = 0; i < 3; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        this._id = txt
    }

}