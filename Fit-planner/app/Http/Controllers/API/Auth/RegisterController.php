<?php


namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Middleware\GuestApi;
use App\Services\Auth\CreateUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    private $createUserService;

    public function __construct(CreateUserService $createUserService)
    {
        $this->createUserService = $createUserService;
    }

    public function register(Request $request): JsonResponse
    {
        return $this->createUserService->register($request);
    }

}
