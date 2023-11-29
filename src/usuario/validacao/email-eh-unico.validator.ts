import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";


export class EmailEhUnicoValidator implements ValidatorConstraintInterface{

    constructor(private UsuarioRepository: UsuarioRepository){

    }

    async validate(value: any, validationArguments?: ValidationArguments | undefined): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}