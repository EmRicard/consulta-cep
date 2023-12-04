import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface{

    constructor(private UsuarioRepository: UsuarioRepository){

    }

    async validate(value: any, validationArguments?: ValidationArguments | undefined): Promise<boolean> {
        const usuarioComEmailExiste = await this.UsuarioRepository.existeComEmail(value);
        return !usuarioComEmailExiste;
    }
    
}