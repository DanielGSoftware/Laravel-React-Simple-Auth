<?php

namespace App\Services\Auth;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateUserService
{

    private $validationService;
    private $userModel;
    private $Hash;

    public function __construct(
        UserValidationService $validationService,
        User $userModel,
        Hash $Hash
    )
    {
        $this->validationService = $validationService;
        $this->userModel = $userModel;
        $this->Hash = $Hash;
    }

    public function register(Request $request): JsonResponse
    {
        $this->validate($request->all());

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

    private function validate(array $data): void
    {
        $this->validationService->registerValidation($data);
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
