<?php

namespace App\Services\Auth;

use App\User;
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


    public function createUser(array $data): bool
    {
        return $this->userModel::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $this->Hash::make($data['password'])
        ])->save();
    }

}
