export const store = {
    user: {
        name: '',
        email: '',
        setName: function(name) {
            console.log(this);
            this.name = name;
        },
        setEmail: function(email) {
            this.email = email;
        }
    }
}