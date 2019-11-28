<?php

namespace App\Services\Auth;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService
{

    private $userModel;
    private $Hash;

    public function __construct(
        User $userModel,
        Hash $Hash
    )
    {
        $this->userModel = $userModel;
        $this->Hash = $Hash;
    }

    public function register(Request $request): JsonResponse
    {
        if ($this->createUser($request->all())) {
            return response()->json([
                'registered' => true
            ]);
        }

        return response()->json([
            'registered' => false,
            'message' => 'Something went wrong. Please try again later.'
        ]);
    }

    private function createUser(array $data): bool
    {
        return $this->userModel::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $this->Hash::make($data['password'])
        ])->save();
    }

}
