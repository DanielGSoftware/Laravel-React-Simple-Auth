<?php


namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\LoginUserService;
use App\Services\Auth\UserValidationService;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $loginService;
    private $userValidationService;

    public function __construct(LoginUserService $loginService, UserValidationService $userValidationService)
    {
        $this->loginService = $loginService;
        $this->userValidationService = $userValidationService;
    }

    public function login(Request $request)
    {
        $this->userValidationService->loginValidation($request->all());
        return $this->loginService->login($request);
    }

}
