import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common'; import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('/local/signup')
    signupLocal(@Body() dto: AuthDto) {
        return this.AuthService.signUpLocal();
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
