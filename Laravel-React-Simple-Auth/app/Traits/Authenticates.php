<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

trait Authenticates
{
    protected function attemptLogin(Request $request): bool
    {
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    protected function handleApiToken(Request $request): string
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
    protected function credentials(Request $request): array
    {
        return $request->only('email', 'password');
    }


    protected function guard()
    {
        return Auth::guard();
    }
}
