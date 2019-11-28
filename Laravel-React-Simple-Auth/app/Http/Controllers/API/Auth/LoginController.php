<?php


namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\UserService;
use App\Services\Auth\UserValidationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $userService;
    private $userValidationService;

    public function __construct(UserService $userService, UserValidationService $userValidationService)
    {
        $this->userService = $userService;
        $this->userValidationService = $userValidationService;
    }

    public function login(Request $request): JsonResponse
    {
        $this->userValidationService->loginValidation($request->all());
        return $this->userService->login($request);
    }

    public function logout(Request $request): JsonResponse
    {
        return $this->userService->logout($request);
    }

    public function isAuthenticated(): JsonResponse
    {
        return response()->json(['Authenticated' => true], 200);
    }

}
