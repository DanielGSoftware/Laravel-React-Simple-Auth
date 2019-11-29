<?php


namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\AuthService;
use App\Services\Auth\UserValidationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $authService;
    private $userValidationService;

    public function __construct(AuthService $authService, UserValidationService $userValidationService)
    {
        $this->authService = $authService;
        $this->userValidationService = $userValidationService;
    }

    public function login(Request $request): JsonResponse
    {
        $this->userValidationService->loginValidation($request->all());
        return $this->authService->login($request);
    }

    public function logout(Request $request): JsonResponse
    {
        return $this->authService->logout($request);
    }
}
