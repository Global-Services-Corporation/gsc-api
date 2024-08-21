export class EnvError extends Error{
    constructor(){
        super('Variáveis de ambiente inválida');
    }
}

export class EmailNull extends Error {
    constructor(){
        super('E-mail não encontrado!');
    }
}

export class EmailExist extends Error {
    constructor(){
        super('E-mail já está cadastrado!');
    }
}

export class NullInformation extends Error {
    constructor(){
        super("Informação não encontrada!");
    }
}

export class BadRequest extends Error {}


export class ZodError extends Error {}

