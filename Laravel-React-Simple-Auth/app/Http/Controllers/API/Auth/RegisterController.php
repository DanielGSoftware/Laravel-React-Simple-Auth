<?php


namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\UserService;
use App\Services\Auth\UserValidationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    private $userService;
    private $userValidationService;

    public function __construct(UserService $userService, UserValidationService $userValidationService)
    {
        $this->userService = $userService;
        $this->userValidationService = $userValidationService;
    }

    public function register(Request $request): JsonResponse
    {
        $this->userValidationService->registerValidation($request->all());
        return $this->userService->register($request);
    }

}
