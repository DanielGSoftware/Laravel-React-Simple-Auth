<?php


namespace App\Http\Controllers\API\Auth;

use App\Services\Auth\CreateUserService;
use Illuminate\Http\Request;

class RegisterController
{

    private $createUserService;

    public function __construct(CreateUserService $createUserService)
    {
        $this->createUserService = $createUserService;
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->createUserService->register($request);
    }

}
