const _faker_data_names = [
     'Elda Palumbo',
     'Pacifico Giordano',
     'Sig. Avide Guerra',
     'Yago Amato',
     'Eustachio Messina',
     'Dott. Violante Lombardo',
     'Sig. Alighieri Monti',
     'Costanzo Costa',
     'Nazzareno Barbieri',
     'Max Coppola'
]
const _faker_data_emails = [
     'Elda@gmail.com',
     'Pacifico@gmail.com',
     'Sig29@gmail.com',
     'Yago@gmail.com',
     'Eustachio@gmail.com',
     'Dott@gmail.com',
     'SigAlighieri@gmail.com',
     'Costanzo@gmail.com',
     'Nazzareno@gmail.com',
     'Max@gmail.com'
]

const _faker_data_text = [
     'Lorem ipsum dolor sit amet consectetur  illum, minus animi adipisicing elit',
     'Omnis eaque recusandae illum, dolor sit amet consectetur minus animi ab',
     'ipsa porro optio dolor sit amet consectetur reiciendis alias modi voluptate facere ea cum cupiditate eos',
]

const _getRandomArbitrary = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

let _is_email_already_taken = false
let _is_email_already_text = ""
const _getRandomEmail = () => {
        if(_is_email_already_taken == false){
            _is_email_already_taken = true
            _is_email_already_text = _faker_data_emails[ _getRandomArbitrary(0, _faker_data_emails.length - 1 ) ];
            return _is_email_already_text
        }
        return  _is_email_already_text
}

const _switchCaseInput = (input,type) => {
    switch(type){
        case "text":
          return _faker_data_names[ _getRandomArbitrary(0, _faker_data_names.length - 1 ) ];
        case "email":
          return _getRandomEmail();
        case "date":
            if( input.name == "dob" ){
                return "1996-08-10"
            }
            input.valueAsDate = new Date();
            return false
        case "checkbox":
            input.checked = true
            return false
        case "radio":
            input.checked = true
            return false
        case "tel":
            return parseInt(Math.floor(Math.random() * 100000000000))
        case "number":
            return parseInt(Math.floor(Math.random() * 1000000))
        case "password":
            return "1234567Abc$"
        default:
            return ""
    }
}

const _randomFakerDataNames = (input) => {
      _switchCaseInput(input,input.type)
}

const _randomFakerDataText = () => {
        return _faker_data_text[ _getRandomArbitrary(0, _faker_data_text.length - 1 ) ];
}

const _handleInput = (input) => {
    for(let el of input){
           let res = _randomFakerDataNames(el)
           if(res != false){
              el.value = res
           }
     }
}

const _handleTextarea = (input) => {
    for(let el of input){
           el.value = _randomFakerDataText()
     }
}


const _handleSelect = (select) => {
    for(let el of select){
        for(let option of el.options){
             if(option != "" || option != "null"){
                  option.selected = true
             }
        }
    }
}