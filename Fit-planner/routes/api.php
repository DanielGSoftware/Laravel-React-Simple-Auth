<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest.api')->group(function () {
    Route::post('/register', 'API\Auth\registerController@register')->name('register');
    Route::post('/login', 'API\Auth\LoginController@login')->name('login');
});


Route::middleware('auth:api')->group(function () {

});
