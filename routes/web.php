<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/home/add/medical/app','appoiment@store');
Route::get('/home/all/appoiments','appoiment@getData');
Route::get('/home/user/profile','appoiment@userProfile');
Route::get('/home/appointment/edit/{id}','appoiment@edit');
Route::put('/home/appointment/update/{id}','appoiment@update');
Route::delete('/home/appointment/delete/{id}','appoiment@delete');
Route::get('/home/appointment/show/{id}','appoiment@show');
Route::get('/home/user/edit/{id}','appoiment@userProfile');
Route::put('/home/user/update/{id}','appoiment@userUpdate');
