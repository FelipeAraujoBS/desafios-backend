import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateValidationDto } from './dto/validate.dto';

@Injectable()
export class ValidateService {
  async PassValidation(createValidationDto: CreateValidationDto) {
    const { password } = createValidationDto;

    const validations = {
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
    };

    const isValid = Object.values(validations).every(Boolean);

    if (!isValid) {
      throw new BadRequestException({
        message: 'Senha inválida',
        errors: Object.fromEntries(
          Object.entries(validations).filter(([, value]) => !value),
        ),
      });
    }

    return;
  }
}
