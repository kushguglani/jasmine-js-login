describe("User Name Validate", function() { 

    it("should Only contains alphanumeric characters, underscore and dot.",function(){
        expect(usernameValidate("Kus#@")).toEqual(false); 
    });

    it("Underscore and dot can't be at the end or start of a username",function(){
        expect(usernameValidate("_kush.")).toEqual(false);
    })
    it("Underscore and dot can't be next to each other (e.g user_.name).",function(){
        expect(usernameValidate("kush_.kg")).toEqual(false)
    })
    it("Number of characters must be between 8 to 20.",function(){
        expect(usernameValidate("qwertiuopasdfghjkzxcvbnm")).toEqual(false);
    })
    it("Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).",function(){
        expect(usernameValidate("kush...kush")).toEqual(false);
    })
    it("validate user name Kushguglani",function() { 
        expect(usernameValidate("Kushguglani")).toEqual(true); 
     });    

     it("validate user name can not be empty",function() { 
        expect(usernameValidate("")).toEqual(false); 
     }); 
   
 
 });
describe("Password Validate", function() { 
    it("at least one numeric digit, one uppercase and one lowercase letter",function(){
        expect(passwordValidate("Kus123456")).toEqual(true); 
    });
    it("password between 6 to 20 characters",function(){
        expect(passwordValidate("Kushqwertiuopasdfghjkzxcvbnm")).toEqual(false);
    })
 });
