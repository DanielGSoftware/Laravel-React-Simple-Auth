<?php


namespace App\Services\Auth;


use Illuminate\Support\Facades\Validator;

class UserValidationService
{

    private $validator;

    public function __construct(Validator $validator)
    {

        $this->validator = $validator;
    }

    public function registerValidation(array $data): array
    {
        return $this->validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/^\S*$/u'],
        ])->validate();
    }

    public function loginValidation(array $data): array
    {
        return $this->validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'regex:/^\S*$/u']
        ])->validate();
    }
}
