import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";


export class CriaUsuarioDTO{

    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @EmailEhUnico({message: 'e-mail em uso'})
    email: string;

    @MinLength(6)
    senha: string;
}