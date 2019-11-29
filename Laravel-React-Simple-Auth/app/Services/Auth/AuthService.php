<?php


namespace App\Services\Auth;

use Authenticates;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AuthService
{
    use Authenticates;


    private $str;
    private $userService;

    public function __construct(Str $str, UserService $userService)
    {
        $this->str = $str;
        $this->userService = $userService;
    }

    public function register(Request $request): JsonResponse
    {
        if ($this->userService->createUser($request->all())) {
            return response()->json([
                'registered' => true
            ]);
        }

        return response()->json([
            'registered' => false,
            'message' => 'Something went wrong. Please try again later.'
        ]);
    }


    public function login(Request $request): JsonResponse
    {
        if ($this->attemptLogin($request)) {
            $apiToken = $this->handleApiToken($request);
            return response()->json([
                'message' => 'Successfully logged in',
                'api_token' => $apiToken
            ]);
        }

        return response()->json([
            'message' => 'Login failed due to wrong credentials'
        ], 401);
    }

    public function logout(Request $request): JsonResponse
    {
        $user = $request->user('api');
        $user->api_token = null;
        $user->save();

        return response()->json(['message' => 'Successfully logged out']);
    }

}
