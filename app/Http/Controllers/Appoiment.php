<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User_appointment;
use App\User;

class Appoiment extends Controller
{
    public function store(){
        $app = new User_appointment;
        $app->maladyName = Request('t1');
        $app->maladyDescription = Request('t2');
        $app->user_id = \Auth::user()->id;
        $app->save();
    }

    public function getData(){
        $user_id = \Auth::user()->id;
        $data = User_appointment::where('user_id',$user_id)->paginate(2);
        return $data;
    }

    public function edit($id){
        $app = User_appointment::find($id);
        return $app;
    }
    public function update($id){
        $app = User_appointment::find($id);
        $app->maladyName = Request('t1');
        $app->maladyDescription = Request('t2');
        $app->update();
    }
    public function delete($id){
        $app = User_appointment::find($id);
         $app->delete();
    }

    public function userProfile($id){
        return \Auth::user();
    }

    public function show($app){
        $app = User_appointment::find($id);
        return $app;
    }

    public function userUpdate($id){
        $user = User::find($id);
        $user->name = Request('t1');
        $user->email = Request('t2');
        $user->phoneNumber = Request('t3');
        $user->age = Request('t4');
        $user->gender = Request('t5');
        $user->update();
    }
}
