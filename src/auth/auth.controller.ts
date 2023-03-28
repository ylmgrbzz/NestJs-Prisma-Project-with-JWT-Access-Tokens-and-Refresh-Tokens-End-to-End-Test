import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('/local/signup')
    signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
        return this.AuthService.signupLocal(dto);
    }
    @Post('/local/signin')
    signinLocal() {
        return this.AuthService.signinLocal();
    }

    @Post('/logout')
    logout() {
        return this.AuthService.logout();
    }

    @Post('/refresh')
    refreshTokens() {
        return this.AuthService.refreshTokens();
    }
}
