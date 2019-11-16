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
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ])->validate();
    }
}
