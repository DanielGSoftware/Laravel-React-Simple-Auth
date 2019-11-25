<?php


namespace App\Services\Auth;

use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Boolean;

class LoginUserService
{
    private $str;

    public function __construct(Str $str)
    {
        $this->str = $str;
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


    private function attemptLogin(Request $request): Boolean
    {
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    private function handleApiToken(Request $request): string
    {
        $token = $this->str::random(80);

        $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return $token;
    }

    /**
     * Get the needed authorization credentials from the request.
     * @param Request $request
     * @return array
     */
    private function credentials(Request $request): array
    {
        return $request->only('email', 'password');
    }

    /**
     * Get the guard to be used during authentication.
     * @return StatefulGuard
     */
    private function guard(): StatefulGuard
    {
        return Auth::guard();
    }

}
