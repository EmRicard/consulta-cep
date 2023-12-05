import { ValidateByOptions, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface{

    constructor(private UsuarioRepository: UsuarioRepository){}

    async validate(value: any, validationArguments?: ValidationArguments | undefined): Promise<boolean> {
        const usuarioComEmailExiste = await this.UsuarioRepository.existeComEmail(value);
        return !usuarioComEmailExiste;
    }
    
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, prorpiedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: prorpiedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator
        })
    }
}