<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class GuestApi
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->bearerToken()) {
            return response()->json([
                'message' => 'You don\'t have permission to this resource.'
            ], 401);
        };

        return $next($request);
    }
}
